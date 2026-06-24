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
  keywords: [
    "psicóloga online",
    "terapia online",
    "psicóloga general sanitaria",
    "ansiedad",
    "autoestima",
    "terapias contextuales",
    "ACT",
    "Asturias",
    SITE.name,
  ],
  authors: [{ name: SITE.name }],
  alternates: { canonical: "/" },
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
        <div className="grain" aria-hidden />
        {children}
      </body>
    </html>
  );
}
