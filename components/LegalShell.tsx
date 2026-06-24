import type { ReactNode } from "react";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { SITE } from "@/lib/site";

/** Envoltorio común para las páginas legales (aviso legal, privacidad). */
export function LegalShell({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <main className="mx-auto max-w-[760px] px-[26px] py-[80px]">
      <a href="/" className="mb-10 inline-flex items-center gap-2 text-[0.9rem] text-claydeep hover:text-clay">
        <ArrowLeft size={16} /> Volver al inicio
      </a>
      <h1 className="mb-2 text-[clamp(2rem,4vw,2.8rem)]">{title}</h1>
      <p className="mb-10 text-[0.88rem] text-muted">Última actualización: {updated}</p>
      <div className="legal-prose">{children}</div>
      <p className="mt-14 border-t border-line pt-6 text-[0.85rem] text-muted">
        {SITE.name} · {SITE.role} · Col. {SITE.colegiado} · Reg. sanitario {SITE.registroSanitario}
      </p>
    </main>
  );
}
