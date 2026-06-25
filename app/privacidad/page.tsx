import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: `Política de privacidad y protección de datos de ${SITE.name}.`,
  alternates: { canonical: "/privacidad" },
  robots: { index: false, follow: true },
};

export default function Privacidad() {
  return (
    <LegalShell title="Política de privacidad" updated="junio de 2026">
      <p>
        De acuerdo con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos
        Personales y garantía de los derechos digitales (LOPDGDD), te informamos sobre el tratamiento de
        tus datos personales.
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <ul>
        <li><strong>Responsable:</strong> {SITE.name} ({SITE.role}, Col. {SITE.colegiado})</li>
        <li><strong>Registro sanitario:</strong> {SITE.registroSanitario}</li>
        <li><strong>Email:</strong> <a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
      </ul>

      <h2>2. ¿Con qué finalidad tratamos tus datos?</h2>
      <p>
        Los datos que facilitas a través del formulario de contacto (nombre, email o teléfono, motivo de
        consulta y mensaje) se tratan con la única finalidad de <strong>atender y responder a tu
        solicitud</strong> y, en su caso, gestionar la reserva de una primera sesión.
      </p>

      <h2>3. ¿Cuál es la base legal?</h2>
      <p>
        La base jurídica es tu <strong>consentimiento</strong>, que prestas al marcar la casilla y enviar
        el formulario. Puedes retirarlo en cualquier momento.
      </p>

      <h2>4. ¿Durante cuánto tiempo conservamos los datos?</h2>
      <p>
        Conservaremos tus datos el tiempo necesario para atender tu consulta. Si no se inicia una relación
        terapéutica, se eliminarán una vez gestionada. Los datos derivados de una eventual relación
        asistencial se conservan conforme a la normativa sanitaria aplicable.
      </p>

      <h2>5. ¿A quién se comunican tus datos?</h2>
      <p>
        No se ceden datos a terceros salvo obligación legal. El envío del formulario se gestiona a través
        del proveedor de correo <strong>Resend</strong> (Resend, Inc.), que actúa como encargado del
        tratamiento para hacer llegar tu mensaje. El correo se entrega a la cuenta de la responsable.
      </p>

      <h2>6. ¿Cuáles son tus derechos?</h2>
      <p>Puedes ejercer en cualquier momento los siguientes derechos escribiendo a <a href={`mailto:${SITE.email}`}>{SITE.email}</a>:</p>
      <ul>
        <li>Acceso, rectificación y supresión de tus datos.</li>
        <li>Limitación u oposición a su tratamiento.</li>
        <li>Portabilidad de los datos.</li>
        <li>Retirar el consentimiento prestado.</li>
      </ul>
      <p>
        Si consideras que tus derechos no han sido atendidos, puedes presentar una reclamación ante la
        Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>).
      </p>

      <h2>7. Confidencialidad</h2>
      <p>
        Toda la información compartida en el marco de la relación terapéutica está amparada por el secreto
        profesional y el código deontológico del Colegio Oficial de Psicología.
      </p>

      <h2>8. Cookies</h2>
      <p>
        Este sitio web no utiliza cookies de seguimiento ni de analítica con fines publicitarios. Si en el
        futuro se incorporasen, se informaría debidamente y se solicitaría tu consentimiento.
      </p>
    </LegalShell>
  );
}
