"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

type ContactFormProps = {
  projectTypes: string[];
};

type FormState = "idle" | "submitting" | "success" | "error";

const initialErrors: Record<string, string> = {};

export default function ContactForm({ projectTypes }: ContactFormProps) {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState(initialErrors);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setErrors(initialErrors);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/contact-requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        projectType: formData.get("projectType"),
        message: formData.get("message"),
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      setErrors(result.errors ?? {});
      setState("error");
      return;
    }

    form.reset();
    setState("success");
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 bg-paper p-5 md:p-7">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-xs uppercase tracking-[0.2em] text-black/42">
            Nombre
          </span>
          <input
            type="text"
            name="name"
            className="h-12 border border-black/12 bg-paper px-4 text-sm outline-none transition-colors focus:border-black"
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name ? (
            <span className="text-xs leading-5 text-red-700">{errors.name}</span>
          ) : null}
        </label>
        <label className="grid gap-2">
          <span className="text-xs uppercase tracking-[0.2em] text-black/42">
            Correo
          </span>
          <input
            type="email"
            name="email"
            className="h-12 border border-black/12 bg-paper px-4 text-sm outline-none transition-colors focus:border-black"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email ? (
            <span className="text-xs leading-5 text-red-700">{errors.email}</span>
          ) : null}
        </label>
      </div>

      <label className="grid gap-2">
        <span className="text-xs uppercase tracking-[0.2em] text-black/42">
          Telefono
        </span>
        <input
          type="tel"
          name="phone"
          className="h-12 border border-black/12 bg-paper px-4 text-sm outline-none transition-colors focus:border-black"
        />
      </label>

      <label className="grid gap-2">
        <span className="text-xs uppercase tracking-[0.2em] text-black/42">
          Tipo de proyecto
        </span>
        <select
          name="projectType"
          className="h-12 border border-black/12 bg-paper px-4 text-sm text-black/70 outline-none transition-colors focus:border-black"
          defaultValue=""
          aria-invalid={Boolean(errors.projectType)}
        >
          <option value="" disabled>
            Selecciona una opcion
          </option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.projectType ? (
          <span className="text-xs leading-5 text-red-700">
            {errors.projectType}
          </span>
        ) : null}
      </label>

      <label className="grid gap-2">
        <span className="text-xs uppercase tracking-[0.2em] text-black/42">
          Mensaje
        </span>
        <textarea
          name="message"
          rows={7}
          className="resize-none border border-black/12 bg-paper p-4 text-sm leading-7 outline-none transition-colors focus:border-black"
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message ? (
          <span className="text-xs leading-5 text-red-700">{errors.message}</span>
        ) : null}
      </label>

      <div className="flex flex-col gap-4 border-t border-black/10 pt-5 md:flex-row md:items-center md:justify-between">
        <p className="max-w-[420px] text-xs leading-6 text-black/45">
          Las solicitudes se guardan en el backend interno y quedan disponibles
          para seguimiento desde la API de contacto.
        </p>
        <button
          type="submit"
          disabled={state === "submitting"}
          className="inline-flex h-11 items-center justify-center gap-2 border border-black bg-black px-5 text-xs font-medium uppercase tracking-[0.18em] !text-white transition-colors hover:bg-paper hover:!text-black disabled:cursor-not-allowed disabled:opacity-60"
        >
          {state === "submitting" ? "Enviando" : "Enviar solicitud"}
          {state === "success" ? (
            <CheckCircle2 size={15} strokeWidth={1.5} />
          ) : (
            <ArrowUpRight size={15} strokeWidth={1.5} />
          )}
        </button>
      </div>

      {state === "success" ? (
        <p className="border border-black/10 bg-sand px-4 py-3 text-sm leading-6 text-black/70">
          Solicitud recibida. El equipo de Nuuk puede revisarla desde el backend.
        </p>
      ) : null}

      {state === "error" && Object.keys(errors).length === 0 ? (
        <p className="border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-800">
          No pudimos guardar la solicitud. Intenta de nuevo.
        </p>
      ) : null}
    </form>
  );
}
