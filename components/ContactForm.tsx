"use client";

import { useState } from "react";
import { FORM_TOPICS } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setErrorMsg("");

    // DEMO: en el proyecto real esto hace POST a /api/contact, que envía el email
    // con Resend (ver app/api/contact/route.ts). Aquí solo se simula el envío para
    // que la demo pública funcione sin backend ni claves.
    void data;
    await new Promise((r) => setTimeout(r, 700));
    setStatus("sent");
    form.reset();
  }

  if (status === "sent") {
    return (
      <div className="rounded-[36px] bg-surface p-[38px] text-ink">
        <h3 className="mb-2 text-[1.6rem]">¡Mensaje recibido!</h3>
        <p className="text-[1rem] text-muted">
          Gracias por escribir. Te responderé personalmente lo antes posible al contacto que me has dejado. Si lo prefieres, también puedes escribirme directamente por WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form className="rounded-[36px] bg-surface p-[38px] text-ink" onSubmit={handleSubmit}>
      <h3 className="mb-1.5 text-[1.6rem]">Reserva tu sesión</h3>
      <p className="mb-6 text-[0.94rem] text-muted">Cuéntame un poco sobre ti y te contacto enseguida.</p>

      {/* Honeypot anti-spam: oculto para personas, los bots tienden a rellenarlo. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="empresa">No rellenar</label>
        <input id="empresa" name="empresa" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="field mb-[17px]">
        <label htmlFor="nombre">Nombre</label>
        <input id="nombre" name="nombre" type="text" placeholder="Tu nombre" required />
      </div>
      <div className="field mb-[17px]">
        <label htmlFor="contacto">Email o teléfono</label>
        <input id="contacto" name="contacto" type="text" placeholder="Para poder responderte" required />
      </div>
      <div className="field mb-[17px]">
        <label htmlFor="motivo">¿En qué te gustaría trabajar?</label>
        <select id="motivo" name="motivo" defaultValue={FORM_TOPICS[0]}>
          {FORM_TOPICS.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className="field mb-[17px]">
        <label htmlFor="mensaje">Mensaje (opcional)</label>
        <textarea id="mensaje" name="mensaje" placeholder="Lo que quieras contarme" />
      </div>

      <label className="mb-4 flex items-start gap-2.5 text-[0.82rem] leading-snug text-muted">
        <input type="checkbox" name="consentimiento" required className="mt-0.5 h-4 w-4 shrink-0 accent-sagedeep" />
        <span>
          He leído y acepto la{" "}
          <a href="/privacidad" target="_blank" className="underline hover:text-ink">política de privacidad</a>{" "}
          y consiento que se traten mis datos para responder a mi consulta.
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn btn-primary mt-1.5 w-full justify-center disabled:opacity-60"
      >
        {status === "sending" ? "Enviando…" : "Reservar sesión"}
      </button>

      {status === "error" ? (
        <p className="mt-3.5 text-center text-[0.8rem] text-claydeep">{errorMsg}</p>
      ) : (
        <p className="mt-3.5 text-center text-[0.78rem] text-muted">
          Tus datos son confidenciales y solo se usan para responderte.
        </p>
      )}
    </form>
  );
}
