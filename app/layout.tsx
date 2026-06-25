import type { Metadata } from "next";
import { Newsreader, Outfit } from "next/font/google";
import { SITE, IMAGES } from "@/lib/site";
import "./globals.css";

const serif = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["300", "400", "500"],
});

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const description =
  "Psicóloga General Sanitaria. Terapia psicológica online para ansiedad, autoestima, duelo y cambios vitales, desde un enfoque basado en la evidencia (terapias contextuales). Sesiones por videollamada en toda España.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} · ${SITE.role}`,
    template: `%s · ${SITE.shortName}`,
  },
  description,
  authors: [{ name: SITE.name }],
  alternates: { canonical: SITE.url },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} · ${SITE.role}`,
    description,
    images: [{ url: IMAGES.og, width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} · ${SITE.role}`,
    description,
    images: [IMAGES.og],
  },
  robots: { index: true, follow: true },
  icons: { icon: IMAGES.logo, apple: IMAGES.logo },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-xl focus:bg-ink focus:px-4 focus:py-2 focus:text-white focus:outline focus:outline-2 focus:outline-claydeep"
        >
          Saltar al contenido principal
        </a>
        <div className="grain" aria-hidden={true} />
        {children}
      </body>
    </html>
  );
}
