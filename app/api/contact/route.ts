import { NextResponse } from "next/server";
import { SITE } from "@/lib/site";

export const runtime = "nodejs";

const FROM = process.env.CONTACT_FROM_EMAIL ?? "";

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string),
  );
}

export async function POST(req: Request) {
  const origin = req.headers.get("origin");
  const allowedOrigins = [
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://psicologa-demo.netlify.app",
    "https://psicologa-demo.netlify.app",
    "http://localhost:3000",
    "http://localhost:3001",
  ];
  if (origin && !allowedOrigins.includes(origin)) {
    return NextResponse.json({ error: "No autorizado." }, { status: 403 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Petición no válida." }, { status: 400 });
  }

  const nombre = String(body.nombre || "").trim();
  const contacto = String(body.contacto || "").trim();
  const motivo = String(body.motivo || "").trim();
  const mensaje = String(body.mensaje || "").trim();
  const consentimiento = body.consentimiento;
  const honeypot = String(body.empresa || "").trim();

  // Bot detectado: respondemos OK pero no enviamos nada.
  if (honeypot) return NextResponse.json({ ok: true });

  if (!nombre || !contacto) {
    return NextResponse.json({ error: "Faltan tu nombre o tu contacto." }, { status: 400 });
  }
  if (!consentimiento) {
    return NextResponse.json({ error: "Debes aceptar la política de privacidad." }, { status: 400 });
  }
  if (nombre.length > 120 || contacto.length > 160 || mensaje.length > 4000) {
    return NextResponse.json({ error: "Algún campo es demasiado largo." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || SITE.email;
  if (!apiKey || !FROM) {
    console.error("Faltan variables de entorno: RESEND_API_KEY o CONTACT_FROM_EMAIL.");
    return NextResponse.json({ error: "El formulario no está configurado todavía." }, { status: 500 });
  }

  // Si el contacto es un email, lo usamos como reply_to para poder responder directamente.
  const replyTo = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(contacto) ? contacto : undefined;

  const html = `
    <h2>Nueva consulta desde la web</h2>
    <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
    <p><strong>Contacto:</strong> ${escapeHtml(contacto)}</p>
    <p><strong>Motivo:</strong> ${escapeHtml(motivo || "—")}</p>
    <p><strong>Mensaje:</strong><br>${escapeHtml(mensaje || "—").replace(/\n/g, "<br>")}</p>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [to],
        reply_to: replyTo,
        subject: `Nueva consulta de ${nombre}`,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("Error de Resend:", res.status, detail);
      return NextResponse.json({ error: "No se pudo enviar el mensaje. Inténtalo más tarde o escríbeme por WhatsApp." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Fallo al contactar con Resend:", err);
    return NextResponse.json({ error: "No se pudo enviar el mensaje. Inténtalo más tarde." }, { status: 502 });
  }
}
