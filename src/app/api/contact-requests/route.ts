import type { NextRequest } from "next/server";
import {
  createContactRequest,
  listContactRequests,
  validateContactRequestInput,
} from "@/lib/contact-requests.store";
import { sendContactRequestEmail } from "@/lib/contact-email";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const requests = await listContactRequests({
    status: searchParams.get("status"),
    projectType: searchParams.get("projectType"),
    query: searchParams.get("q"),
  });

  return Response.json({ data: requests });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const result = validateContactRequestInput(body);

  if (!result.ok) {
    return Response.json({ errors: result.errors }, { status: 400 });
  }

  const contactRequest = await createContactRequest(result.data);
  const email = await sendContactRequestEmail(contactRequest);

  if (email.status === "failed") {
    console.error("No se pudo enviar el correo de contacto:", email.reason);
  }

  return Response.json({ data: contactRequest, email }, { status: 201 });
}
