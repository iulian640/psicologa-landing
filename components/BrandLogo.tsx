"use client";

import { useState } from "react";
import { IMAGES } from "@/lib/site";

/**
 * Marca reutilizable. Muestra el logo de /public; si el archivo falta, cae a un
 * monograma. `chip` lo coloca sobre un fondo claro (para fondos oscuros como el
 * pie de página, donde la "A" oscura del logo no se vería directamente).
 */
export function BrandLogo({ monogram = "AG", chip = false }: { monogram?: string; chip?: boolean }) {
  const [ok, setOk] = useState(true);

  if (!ok) {
    return (
      <span className="grid h-[38px] w-[38px] place-items-center rounded-full bg-gradient-to-br from-sage to-clay font-serif text-[1.05rem] italic text-white">
        {monogram}
      </span>
    );
  }

  return (
    <span className={chip ? "grid h-[42px] w-[42px] place-items-center rounded-xl bg-surface" : "inline-flex"}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={IMAGES.logo}
        alt=""
        className={`w-auto object-contain ${chip ? "h-[30px]" : "h-[46px]"}`}
        onError={() => setOk(false)}
      />
    </span>
  );
}
