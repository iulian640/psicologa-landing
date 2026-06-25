import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: `Aviso legal de ${SITE.name}, ${SITE.role}.`,
  alternates: { canonical: "/aviso-legal" },
  robots: { index: false, follow: true },
};

export default function AvisoLegal() {
  return (
    <LegalShell title="Aviso legal" updated="junio de 2026">
      <h2>1. Datos identificativos</h2>
      <p>
        En cumplimiento de la Ley 34/2002 de Servicios de la Sociedad de la Información y de Comercio
        Electrónico (LSSI-CE), se informa de los datos del titular de este sitio web:
      </p>
      <ul>
        <li><strong>Titular:</strong> {SITE.name}</li>
        <li><strong>Actividad:</strong> {SITE.role}</li>
        <li><strong>Nº de colegiada:</strong> {SITE.colegiado} (Colegio Oficial de Psicología del Principado de Asturias)</li>
        <li><strong>Registro sanitario:</strong> {SITE.registroSanitario}</li>
        <li><strong>NIF:</strong> {SITE.nif}</li>
        <li><strong>Domicilio profesional:</strong> {SITE.address}, {SITE.postalCode} {SITE.city} ({SITE.region})</li>
        <li><strong>Email:</strong> <a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
        <li><strong>Sitio web:</strong> {SITE.url}</li>
      </ul>

      <h2>2. Objeto</h2>
      <p>
        Este sitio web tiene como finalidad ofrecer información sobre los servicios de psicología
        sanitaria que presta la titular, así como facilitar el contacto con personas interesadas. Los
        servicios se prestan de forma exclusivamente <strong>online</strong>.
      </p>

      <h2>3. Condiciones de uso</h2>
      <p>
        El acceso y uso de este sitio atribuyen la condición de usuario e implican la aceptación de las
        condiciones recogidas en este aviso legal. El usuario se compromete a hacer un uso adecuado de
        los contenidos y a no emplearlos para actividades ilícitas o contrarias a la buena fe.
      </p>
      <p>
        La información de esta web tiene carácter divulgativo y no sustituye en ningún caso a una
        valoración o intervención psicológica individualizada.
      </p>

      <h2>4. Propiedad intelectual</h2>
      <p>
        Los contenidos de este sitio (textos, imágenes, logotipo y diseño) son titularidad de {SITE.name}
        o se utilizan con la correspondiente autorización, y están protegidos por la normativa de propiedad
        intelectual. Queda prohibida su reproducción sin autorización expresa.
      </p>

      <h2>5. Responsabilidad</h2>
      <p>
        La titular no se responsabiliza de los daños derivados de un uso inadecuado del sitio ni de la
        indisponibilidad temporal por causas técnicas. Tampoco se hace responsable de los contenidos de
        sitios de terceros a los que se pueda enlazar.
      </p>

      <h2>6. Legislación aplicable</h2>
      <p>
        Las presentes condiciones se rigen por la legislación española. Para cualquier controversia, las
        partes se someten a los juzgados y tribunales que correspondan conforme a derecho.
      </p>
    </LegalShell>
  );
}
