"use client";

import { useState } from "react";

/**
 * Placeholder photography with a coherent warm duotone treatment and a
 * graceful fallback: if the remote image fails, the branded gradient panel
 * shows instead of a broken-image icon.
 * For production, swap these for the real photos (and consider next/image).
 */
export function Photo({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  const [ok, setOk] = useState(true);
  return (
    <div className={`ph ${className}`}>
      {ok && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          onError={() => setOk(false)}
        />
      )}
    </div>
  );
}
