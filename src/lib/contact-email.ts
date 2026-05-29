import dns from "node:dns";
import net from "node:net";
import tls from "node:tls";
import type { ContactRequest } from "@/types/contact.types";

type MailConfig = {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  from: string;
  to: string;
  subjectPrefix: string;
  timeoutMs: number;
  family: 4 | 6 | undefined;
};

export type ContactEmailResult =
  | { status: "sent"; messageId: string }
  | { status: "skipped"; reason: string }
  | { status: "failed"; reason: string };

function readMailConfig(): MailConfig | null {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();
  const from = process.env.CONTACT_EMAIL_FROM?.trim();
  const to = process.env.CONTACT_EMAIL_TO?.trim();

  if (!host || !user || !pass || !from || !to) {
    return null;
  }

  const port = Number(process.env.SMTP_PORT ?? "465");
  const secure = (process.env.SMTP_SECURE ?? "true").toLowerCase() !== "false";
  const family = Number(process.env.SMTP_FAMILY ?? "4");

  return {
    host,
    port: Number.isFinite(port) ? port : 465,
    secure,
    user,
    pass,
    from,
    to,
    subjectPrefix: process.env.CONTACT_EMAIL_SUBJECT_PREFIX?.trim() || "Muebles Arte",
    timeoutMs: Number(process.env.SMTP_TIMEOUT_MS ?? "15000") || 15000,
    family: family === 4 || family === 6 ? family : undefined,
  };
}

function encodeHeader(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function encodeAddress(address: string) {
  return address
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean)
    .join(", ");
}

function extractEmailAddress(address: string) {
  return address.match(/<([^>]+)>/)?.[1]?.trim() ?? address.trim();
}

function getRecipients(addresses: string) {
  return addresses
    .split(",")
    .map(extractEmailAddress)
    .filter(Boolean);
}

function formatMessage(config: MailConfig, request: ContactRequest) {
  const subject = encodeHeader(
    `[${config.subjectPrefix}] Nueva solicitud de ${request.name}`,
  );
  const replyTo = encodeAddress(request.email);
  const messageId = `<${request.id}@muebles-arte.local>`;
  const body = [
    "Nueva solicitud recibida desde el formulario de contacto.",
    "",
    `Nombre: ${request.name}`,
    `Correo: ${request.email}`,
    `Telefono: ${request.phone ?? "No proporcionado"}`,
    `Tipo de proyecto: ${request.projectType}`,
    `Estatus: ${request.status}`,
    `Fecha: ${request.createdAt}`,
    "",
    "Mensaje:",
    request.message,
    "",
    `ID interno: ${request.id}`,
  ].join("\r\n");

  const headers = [
    `From: ${encodeAddress(config.from)}`,
    `To: ${encodeAddress(config.to)}`,
    `Reply-To: ${replyTo}`,
    `Subject: ${subject}`,
    `Message-ID: ${messageId}`,
    "MIME-Version: 1.0",
    'Content-Type: text/plain; charset="UTF-8"',
    "Content-Transfer-Encoding: 8bit",
  ];

  return {
    messageId,
    raw: `${headers.join("\r\n")}\r\n\r\n${body}`,
  };
}

async function connect(config: MailConfig) {
  const lookup = config.family
    ? (((hostname, options, callback) => {
        dns.lookup(hostname, { ...options, family: config.family }, callback);
      }) as net.LookupFunction)
    : undefined;

  const socket = config.secure
    ? tls.connect({
      host: config.host,
      port: config.port,
      lookup,
      servername: config.host,
      rejectUnauthorized:
        (process.env.SMTP_REJECT_UNAUTHORIZED ?? "true").toLowerCase() !==
        "false",
    })
    : net.connect({
      host: config.host,
      port: config.port,
      lookup,
    });

  socket.setTimeout(config.timeoutMs, () => {
    socket.destroy(new Error("Tiempo de espera agotado al conectar con SMTP."));
  });

  await waitForSocketReady(socket, config.secure ? "secureConnect" : "connect");

  return socket;
}

function waitForSocketReady(
  socket: net.Socket | tls.TLSSocket,
  event: "connect" | "secureConnect",
) {
  return new Promise<void>((resolve, reject) => {
    const onReady = () => {
      socket.off("error", onError);
      resolve();
    };
    const onError = (error: Error) => {
      socket.off(event, onReady);
      reject(error);
    };

    socket.once(event, onReady);
    socket.once("error", onError);
  });
}

function createSmtpSession(socket: net.Socket | tls.TLSSocket) {
  let buffer = "";
  const lines: string[] = [];
  const pending: Array<(line: string) => void> = [];

  socket.setEncoding("utf8");
  socket.on("data", (chunk) => {
    buffer += chunk;

    while (buffer.includes("\r\n")) {
      const index = buffer.indexOf("\r\n");
      const line = buffer.slice(0, index);
      buffer = buffer.slice(index + 2);
      const resolve = pending.shift();

      if (resolve) {
        resolve(line);
      } else {
        lines.push(line);
      }
    }
  });

  function readLine() {
    return new Promise<string>((resolve, reject) => {
      const queuedLine = lines.shift();

      if (queuedLine) {
        resolve(queuedLine);
        return;
      }

      if (buffer.includes("\r\n")) {
        const index = buffer.indexOf("\r\n");
        const line = buffer.slice(0, index);
        buffer = buffer.slice(index + 2);
        resolve(line);
        return;
      }

      const onError = (error: Error) => {
        socket.off("close", onClose);
        reject(error);
      };
      const onClose = () => {
        socket.off("error", onError);
        reject(new Error("La conexion SMTP se cerro antes de responder."));
      };

      pending.push((line) => {
        socket.off("error", onError);
        socket.off("close", onClose);
        resolve(line);
      });
      socket.once("error", onError);
      socket.once("close", onClose);
    });
  }

  async function readResponse(expectedCodes: number[]) {
    const lines: string[] = [];

    while (true) {
      const line = await readLine();
      lines.push(line);

      if (/^\d{3} /.test(line)) {
        const code = Number(line.slice(0, 3));

        if (!expectedCodes.includes(code)) {
          throw new Error(`SMTP ${line}`);
        }

        return lines.join("\n");
      }
    }
  }

  async function command(value: string, expectedCodes: number[]) {
    socket.write(`${value}\r\n`);
    return readResponse(expectedCodes);
  }

  return { command, readResponse };
}

async function sendSmtpMail(config: MailConfig, request: ContactRequest) {
  let socket = await connect(config);
  let session = createSmtpSession(socket);
  const { raw, messageId } = formatMessage(config, request);
  const from = extractEmailAddress(config.from);
  const recipients = getRecipients(config.to);

  await session.readResponse([220]);
  await session.command(`EHLO ${process.env.SMTP_HELO_NAME ?? "localhost"}`, [
    250,
  ]);

  if (!config.secure && config.port !== 25) {
    await session.command("STARTTLS", [220]);
    socket = tls.connect({
      socket,
      servername: config.host,
      rejectUnauthorized:
        (process.env.SMTP_REJECT_UNAUTHORIZED ?? "true").toLowerCase() !==
        "false",
    });
    socket.setTimeout(config.timeoutMs, () => {
      socket.destroy(new Error("Tiempo de espera agotado al negociar TLS."));
    });
    await waitForSocketReady(socket, "secureConnect");
    session = createSmtpSession(socket);
    await session.command(`EHLO ${process.env.SMTP_HELO_NAME ?? "localhost"}`, [
      250,
    ]);
  }

  await session.command("AUTH LOGIN", [334]);
  await session.command(Buffer.from(config.user).toString("base64"), [334]);
  await session.command(Buffer.from(config.pass).toString("base64"), [235]);
  await session.command(`MAIL FROM:<${from}>`, [250]);

  for (const recipient of recipients) {
    await session.command(`RCPT TO:<${recipient}>`, [250, 251]);
  }

  await session.command("DATA", [354]);
  await session.command(`${raw.replace(/^\./gm, "..")}\r\n.`, [250]);
  await session.command("QUIT", [221]);

  return messageId;
}

export async function sendContactRequestEmail(
  request: ContactRequest,
): Promise<ContactEmailResult> {
  if ((process.env.CONTACT_EMAIL_ENABLED ?? "true").toLowerCase() === "false") {
    return { status: "skipped", reason: "El envio de correo esta desactivado." };
  }

  const config = readMailConfig();

  if (!config) {
    return {
      status: "skipped",
      reason:
        "Faltan variables SMTP_HOST, SMTP_USER, SMTP_PASS, CONTACT_EMAIL_FROM o CONTACT_EMAIL_TO.",
    };
  }

  try {
    const messageId = await sendSmtpMail(config, request);
    return { status: "sent", messageId };
  } catch (error) {
    return {
      status: "failed",
      reason: error instanceof Error ? error.message : "Error desconocido.",
    };
  }
}
