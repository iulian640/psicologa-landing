"use client";

import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { SITE, IMAGES } from "@/lib/site";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#sobre", label: "Sobre mí" },
  { href: "#proceso", label: "Cómo trabajo" },
  { href: "#sesiones", label: "Tarifas" },
  { href: "#faq", label: "Preguntas" },
  { href: "#contacto", label: "Contacto" },
];

/** Marca: usa el logo de /public si existe; si falla, muestra el monograma. */
function Brand() {
  const [logoOk, setLogoOk] = useState(true);
  return (
    <a href="#top" className="flex items-center gap-2 sm:gap-3" aria-label={`${SITE.name}, inicio`}>
      {logoOk ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={IMAGES.logo}
          alt=""
          height={46}
          className="h-[38px] w-auto object-contain sm:h-[46px]"
          onError={() => setLogoOk(false)}
        />
      ) : (
        <span className="grid h-[34px] w-[34px] place-items-center rounded-full bg-gradient-to-br from-sage to-clay font-serif text-[1rem] italic text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] sm:h-[38px] sm:w-[38px]">
          CM
        </span>
      )}
      <span className="leading-none">
        <span className="block font-serif text-[1.1rem] font-medium text-ink sm:text-[1.3rem]">{SITE.shortName}</span>
        <span className="text-[0.62rem] uppercase tracking-[0.16em] text-muted sm:text-[0.66rem]">{SITE.shortRole}</span>
      </span>
    </a>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="top"
      className={`sticky top-0 z-[80] transition-shadow duration-300 ${
        scrolled ? "bg-bg/85 shadow-[0_1px_0_var(--color-line)] backdrop-blur-md" : ""
      }`}
    >
      <div className="mx-auto flex h-[64px] max-w-[1180px] items-center justify-between px-4 sm:h-[76px] sm:px-[26px]">
        <Brand />

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="navlink text-[0.96rem] text-inksoft transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Envueltos en span: en Tailwind v4 `.btn` (sin capa) ignoraría `hidden`. */}
          <span className="hidden lg:inline-block">
            <a href="#sesiones" className="btn btn-ghost">Tarifas</a>
          </span>
          <span className="hidden sm:inline-block">
            <a href="#contacto" className="btn btn-primary">Reservar sesión</a>
          </span>
          <button
            className="grid h-[42px] w-[42px] place-items-center text-ink lg:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={26} /> : <List size={26} />}
          </button>
        </div>
      </div>

      {/* menú móvil */}
      <div
        className={`overflow-hidden border-line bg-surface transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[520px] border-b" : "max-h-0"
        }`}
      >
        <div className="mx-auto flex max-w-[1180px] flex-col px-4 sm:px-[26px]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-[14px] text-inksoft last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="btn btn-primary my-4 w-full justify-center"
          >
            Reservar sesión
          </a>
        </div>
      </div>
    </header>
  );
}
