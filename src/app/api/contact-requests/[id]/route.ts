import {
  deleteContactRequest,
  getContactRequest,
  updateContactRequest,
} from "@/lib/contact-requests.store";
import type { ContactRequestStatus } from "@/types/contact.types";

export const runtime = "nodejs";

type ContactRequestRouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(
  _request: Request,
  context: ContactRequestRouteContext,
) {
  const { id } = await context.params;
  const contactRequest = await getContactRequest(id);

  if (!contactRequest) {
    return Response.json({ error: "Solicitud no encontrada." }, { status: 404 });
  }

  return Response.json({ data: contactRequest });
}

export async function PATCH(
  request: Request,
  context: ContactRequestRouteContext,
) {
  const { id } = await context.params;
  const body = (await request.json().catch(() => null)) as
    | {
        name?: string;
        email?: string;
        phone?: string;
        projectType?: string;
        message?: string;
        status?: ContactRequestStatus;
      }
    | null;

  if (!body) {
    return Response.json(
      { error: "El cuerpo de la solicitud no es valido." },
      { status: 400 },
    );
  }

  try {
    const contactRequest = await updateContactRequest(id, body);

    if (!contactRequest) {
      return Response.json(
        { error: "Solicitud no encontrada." },
        { status: 404 },
      );
    }

    return Response.json({ data: contactRequest });
  } catch {
    return Response.json({ error: "Estatus no valido." }, { status: 400 });
  }
}

export async function DELETE(
  _request: Request,
  context: ContactRequestRouteContext,
) {
  const { id } = await context.params;
  const deleted = await deleteContactRequest(id);

  if (!deleted) {
    return Response.json({ error: "Solicitud no encontrada." }, { status: 404 });
  }

  return Response.json({ data: { id } });
}
