import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import type {
  ContactRequest,
  ContactRequestInput,
  ContactRequestStatus,
} from "@/types/contact.types";

const dataDirectory = path.join(process.cwd(), "storage");
const dataFile = path.join(dataDirectory, "contact-requests.json");

const statusValues: ContactRequestStatus[] = [
  "new",
  "in_review",
  "closed",
  "archived",
];

async function ensureStore() {
  await mkdir(dataDirectory, { recursive: true });

  try {
    await readFile(dataFile, "utf8");
  } catch {
    await writeFile(dataFile, "[]", "utf8");
  }
}

async function readRequests() {
  await ensureStore();
  const raw = await readFile(dataFile, "utf8");
  return JSON.parse(raw) as ContactRequest[];
}

async function writeRequests(requests: ContactRequest[]) {
  await ensureStore();
  await writeFile(dataFile, JSON.stringify(requests, null, 2), "utf8");
}

function sanitizeText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function createId() {
  if (globalThis.crypto?.randomUUID) {
    return globalThis.crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export function validateContactRequestInput(input: unknown) {
  const payload = input as Partial<ContactRequestInput>;
  const name = sanitizeText(payload?.name);
  const email = sanitizeText(payload?.email).toLowerCase();
  const phone = sanitizeText(payload?.phone);
  const projectType = sanitizeText(payload?.projectType);
  const message = sanitizeText(payload?.message);

  const errors: Record<string, string> = {};

  if (name.length < 2) {
    errors.name = "El nombre debe tener al menos 2 caracteres.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "El correo no tiene un formato valido.";
  }

  if (!projectType) {
    errors.projectType = "Selecciona un tipo de proyecto.";
  }

  if (message.length < 10) {
    errors.message = "El mensaje debe tener al menos 10 caracteres.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false as const, errors };
  }

  return {
    ok: true as const,
    data: {
      name,
      email,
      phone: phone || undefined,
      projectType,
      message,
    },
  };
}

export async function listContactRequests(filters?: {
  status?: string | null;
  projectType?: string | null;
  query?: string | null;
}) {
  const requests = await readRequests();
  const normalizedQuery = sanitizeText(filters?.query).toLowerCase();

  return requests
    .filter((request) => {
      if (filters?.status && request.status !== filters.status) {
        return false;
      }

      if (filters?.projectType && request.projectType !== filters.projectType) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      return [request.name, request.email, request.projectType, request.message]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery);
    })
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function getContactRequest(id: string) {
  const requests = await readRequests();
  return requests.find((request) => request.id === id) ?? null;
}

export async function createContactRequest(input: ContactRequestInput) {
  const requests = await readRequests();
  const now = new Date().toISOString();
  const request: ContactRequest = {
    id: createId(),
    ...input,
    status: "new",
    source: "contact-page",
    createdAt: now,
    updatedAt: now,
  };

  await writeRequests([request, ...requests]);
  return request;
}

export async function updateContactRequest(
  id: string,
  input: Partial<ContactRequestInput> & { status?: ContactRequestStatus },
) {
  const requests = await readRequests();
  const index = requests.findIndex((request) => request.id === id);

  if (index === -1) {
    return null;
  }

  const current = requests[index];
  const status = input.status;

  if (status && !statusValues.includes(status)) {
    throw new Error("Invalid contact request status.");
  }

  const updated: ContactRequest = {
    ...current,
    name: sanitizeText(input.name) || current.name,
    email: sanitizeText(input.email).toLowerCase() || current.email,
    phone:
      input.phone === undefined
        ? current.phone
        : sanitizeText(input.phone) || undefined,
    projectType: sanitizeText(input.projectType) || current.projectType,
    message: sanitizeText(input.message) || current.message,
    status: status ?? current.status,
    updatedAt: new Date().toISOString(),
  };

  requests[index] = updated;
  await writeRequests(requests);
  return updated;
}

export async function deleteContactRequest(id: string) {
  const requests = await readRequests();
  const nextRequests = requests.filter((request) => request.id !== id);

  if (nextRequests.length === requests.length) {
    return false;
  }

  await writeRequests(nextRequests);
  return true;
}
