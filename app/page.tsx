import {
  Wind,
  UserCircle,
  Flower,
  ArrowsClockwise,
  Heartbeat,
  Check,
  Plus,
  Envelope,
  Phone,
  Globe,
  VideoCamera,
  ShieldCheck,
  Quotes,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";

import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { Photo } from "@/components/Photo";
import { ContactForm } from "@/components/ContactForm";
import { WhatsappFloat } from "@/components/WhatsappFloat";
import { BrandLogo } from "@/components/BrandLogo";
import {
  SITE,
  WHATSAPP_URL,
  IMAGES,
  STATS,
  TESTIMONIALS,
  PRICING,
  CREDENTIALS,
  FAQS,
} from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Psychologist",
  name: SITE.name,
  description: `${SITE.role}. Terapia psicológica online en toda España.`,
  url: SITE.url,
  email: SITE.email,
  telephone: `+${SITE.phoneRaw}`,
  image: IMAGES.aboutPortrait,
  areaServed: "ES",
  availableLanguage: "es",
  knowsAbout: ["Ansiedad", "Autoestima", "Duelo", "Terapias contextuales", "ACT"],
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address,
    postalCode: SITE.postalCode,
    addressLocality: SITE.city,
    addressRegion: SITE.region,
    addressCountry: "ES",
  },
  makesOffer: {
    "@type": "Offer",
    name: "Sesión individual de psicoterapia online",
    price: "60",
    priceCurrency: "EUR",
    description: "Sesión de 60 minutos por videollamada. Precio reducido de 45 € para estudiantes y personas en situación de desempleo.",
    offeredBy: { "@type": "Psychologist", name: SITE.name },
  },
  hasCredential: [
    { "@type": "EducationalOccupationalCredential", credentialCategory: "license", name: `Psicóloga General Sanitaria, Col. ${SITE.colegiado}` },
    { "@type": "EducationalOccupationalCredential", credentialCategory: "degree", name: "Máster en Psicología General Sanitaria" },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Nav />
      <main id="main-content">

      {/* HERO */}
      <section className="pb-6 pt-8 sm:pt-12 lg:pt-16">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-[26px]">
          <div className="grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-[60px]">
            <Reveal>
              <span className="eyebrow">Terapia psicológica online</span>
              <h1 className="mb-6 text-[clamp(2.4rem,5.2vw,4.3rem)] tracking-[-0.02em]">
                Un espacio seguro para entenderte y <em className="italic text-claydeep">generar cambios</em> en tu vida
              </h1>
              <p className="mb-[34px] max-w-[30em] text-[1.18rem] text-muted">
                Acompañamiento psicológico cercano, sin juicios y basado en la evidencia. Sesiones online por videollamada en toda España.
              </p>
              <div className="flex flex-wrap gap-3.5">
                <a href="#contacto" className="btn btn-primary">Reservar sesión</a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
                  <WhatsappLogo size={18} weight="fill" aria-hidden={true} /> WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="relative">
              <span className="absolute inset-[20px_-20px_-20px_20px] -z-10 rounded-[36px] border border-sage" />
              <Photo
                src={IMAGES.heroPortrait}
                alt={`${SITE.name}, ${SITE.role}`}
                priority
                className="h-[420px] rounded-[36px] sm:h-[540px]"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATS / SEÑALES DE CONFIANZA */}
      <div className="mt-10 bg-sagedeep text-[#f1ede1]">
        <div className="mx-auto grid max-w-[1180px] gap-6 px-5 py-11 sm:px-[26px] md:grid-cols-3">
          {STATS.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className={`text-center ${i > 0 ? "border-t border-white/15 pt-6 md:border-l md:border-t-0 md:pt-0" : ""}`}
            >
              <b className="block font-serif text-[2.4rem] font-normal leading-tight text-white">{s.value}</b>
              <span className="text-[0.9rem] opacity-80">{s.label}</span>
            </Reveal>
          ))}
        </div>
      </div>

      {/* EMPATHY */}
      <section className="bg-surface py-[72px] md:py-[108px]" aria-labelledby="empathy-heading">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-[26px]">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <Reveal>
              <h2 id="empathy-heading" className="mb-5 text-[clamp(2.1rem,3.9vw,3rem)]">
                No estás exagerando. <em className="italic text-claydeep">Lo que sientes es real.</em>
              </h2>
              <p className="mb-4 text-[1.08rem] text-muted">
                A veces cuesta poner nombre a lo que pasa por dentro. No hace falta tocar fondo para pedir ayuda: si algo te pesa, ya es motivo suficiente para hablarlo.
              </p>
              <p className="text-[1.08rem] text-muted">
                En las sesiones encontrarás un espacio tranquilo, confidencial y sin prisas para empezar a entenderte.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="grid gap-3.5">
              {[
                { Icon: Heartbeat, text: "Te despiertas con el pecho apretado y no sabes muy bien por qué." },
                { Icon: ArrowsClockwise, text: "Le das mil vueltas a todo y no consigues desconectar." },
                { Icon: Flower, text: "Sientes que has perdido la ilusión o la energía por las cosas." },
                { Icon: UserCircle, text: "Te exiges muchísimo y casi nunca te sientes suficiente." },
              ].map(({ Icon, text }) => (
                <div key={text} className="emp-item">
                  <span className="ei"><Icon size={20} aria-hidden={true} /></span>
                  <p className="text-[1rem] text-inksoft">{text}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-[72px] md:py-[108px]">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-[26px]">
          <Reveal className="mb-14 max-w-[38em]">
            <span className="eyebrow">En qué puedo ayudarte</span>
            <h2 className="mb-4.5 text-[clamp(2.1rem,3.9vw,3.1rem)]">Terapia adaptada a lo que estás viviendo</h2>
            <p className="text-[1.08rem] text-muted">
              Cada proceso es único. Estas son las áreas en las que más acompaño, siempre con un enfoque humano y a tu ritmo.
            </p>
          </Reveal>

          <div className="grid auto-rows-fr gap-[18px] md:grid-cols-3">
            <Reveal className="md:col-span-2">
              <div className="card card-dark h-full">
                <span className="card-ico"><Wind size={24} aria-hidden={true} /></span>
                <h3 className="mb-2.5 text-[1.5rem]">Ansiedad y estrés</h3>
                <p className="text-[0.98rem]">
                  Aprende a reconocer lo que te activa y a recuperar la calma con herramientas que funcionan en tu día a día, no solo en la sesión.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="card h-full">
                <span className="card-ico"><UserCircle size={22} aria-hidden={true} /></span>
                <h3 className="mb-2.5 text-[1.5rem]">Autoestima</h3>
                <p className="text-[0.98rem] text-muted">Reconstruye una relación más amable contigo mismo.</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="card card-photo relative h-full">
                <Photo
                  src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=700&q=80"
                  alt="Luz cálida entre las hojas"
                />
                <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <span className="cap relative z-10 [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">A tu ritmo, sin presión</span>
              </div>
            </Reveal>
            <Reveal>
              <div className="card h-full">
                <span className="card-ico"><Flower size={22} aria-hidden={true} /></span>
                <h3 className="mb-2.5 text-[1.5rem]">Duelo y pérdidas</h3>
                <p className="text-[0.98rem] text-muted">Un acompañamiento respetuoso para transitar el dolor a tu tiempo.</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="card h-full">
                <span className="card-ico"><ArrowsClockwise size={22} aria-hidden={true} /></span>
                <h3 className="mb-2.5 text-[1.5rem]">Cambios vitales</h3>
                <p className="text-[0.98rem] text-muted">Decisiones difíciles y etapas nuevas: ordenamos juntos lo que sientes.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SOBRE MI */}
      <section id="sobre" className="bg-bg2 py-[72px] md:py-[108px]">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-[26px]">
          <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
            <Reveal className="relative">
              <span className="absolute inset-[-18px_18px_18px_-18px] -z-10 rounded-[36px] border border-clay" />
              <Photo
                src={IMAGES.aboutPortrait}
                alt={`Retrato de ${SITE.name}, ${SITE.role}`}
                className="h-[440px] rounded-[36px] sm:h-[560px]"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mb-5 text-[clamp(2.1rem,3.9vw,3rem)]">
                Hola, soy Andrea. Acompaño tu proceso <em className="italic text-claydeep">sin juicios y a tu ritmo</em>
              </h2>
              <p className="mb-4.5 text-[1.07rem] text-muted">
                Soy {SITE.role} (Col. {SITE.colegiado}). Me gradué en Psicología por la Universidad de Oviedo, cursé el Máster en Psicología General Sanitaria en la Universidad Pontificia de Salamanca y me especialicé en Terapias Contextuales en la Universidad de Almería.
              </p>
              <p className="mb-4.5 text-[1.07rem] text-muted">
                Trabajo desde las terapias contextuales (como la Terapia de Aceptación y Compromiso): un enfoque basado en la evidencia que no busca eliminar lo que sientes, sino ayudarte a relacionarte de otra forma con ello para avanzar hacia una vida con sentido. Mi forma de acompañar es cálida, directa y sin juicios.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {CREDENTIALS.map((c) => (
                  <span key={c} className="cred"><Check size={15} weight="bold" aria-hidden={true} /> {c}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="py-[72px] md:py-[108px]">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-[26px]">
          <Reveal className="mx-auto mb-14 max-w-[38em] text-center">
            <h2 className="mb-4.5 text-[clamp(2.1rem,3.9vw,3.1rem)]">Dar el primer paso es más fácil de lo que crees</h2>
            <p className="text-[1.08rem] text-muted">Un proceso claro y sin presión, para que sepas qué esperar desde el principio.</p>
          </Reveal>
          <div className="timeline grid gap-10 md:grid-cols-3">
            {[
              { n: "01", t: "Reservas tu sesión", d: "Escríbeme por el formulario o WhatsApp y elegimos el horario que mejor te encaje." },
              { n: "02", t: "Nos conocemos", d: "En la primera sesión, por videollamada, me cuentas qué te preocupa y vemos si encajamos para trabajar juntos." },
              { n: "03", t: "Plan a tu medida", d: "Diseñamos un camino con objetivos realistas y revisamos el avance en cada paso." },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1} className="text-center">
                <div className="tnum">{s.n}</div>
                <h3 className="mb-2 text-[1.4rem]">{s.t}</h3>
                <p className="mx-auto max-w-[22em] text-[0.98rem] text-muted">{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="bg-surface py-[72px] md:py-[108px]" aria-labelledby="testimonios-heading">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-[26px]">
          <Reveal className="mx-auto mb-14 max-w-[38em] text-center">
            <h2 id="testimonios-heading" className="mb-4.5 text-[clamp(2.1rem,3.9vw,3.1rem)]">Lo que cuentan quienes han dado el paso</h2>
            <p className="text-[1.08rem] text-muted">
              Opiniones de quienes han confiado en este espacio. Se muestran de forma anónima para proteger su privacidad.
            </p>
          </Reveal>
          <div className="mx-auto grid max-w-[900px] gap-[18px] md:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="quote h-full">
                  <blockquote className="mb-5.5 font-serif text-[1.18rem] leading-[1.5] text-ink">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="mt-auto flex items-center gap-3.5">
                    <span className="av"><Quotes size={18} weight="fill" aria-hidden={true} /></span>
                    <div>
                      {t.name && <b className="block font-sans text-[0.95rem] font-medium text-ink">{t.name}</b>}
                      <small className="text-[0.82rem] text-muted">{t.tag}</small>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-[72px] md:py-[108px]">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-[26px]">
          <Reveal className="mx-auto mb-14 max-w-[38em] text-center">
            <h2 className="mb-4.5 text-[clamp(2.1rem,3.9vw,3.1rem)]">Preguntas que igual te estás haciendo</h2>
            <p className="text-[1.08rem] text-muted">Si tienes cualquier otra duda, escríbeme sin compromiso y te respondo personalmente.</p>
          </Reveal>
          <Reveal className="mx-auto max-w-[820px]">
            {FAQS.map((f) => (
              <details key={f.q} className="faq">
                <summary>
                  {f.q}
                  <span className="pm"><Plus size={14} weight="bold" aria-hidden={true} /></span>
                </summary>
                <div className="ans">{f.a}</div>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      {/* SESIONES / TARIFA */}
      <section id="sesiones" className="bg-bg2 py-[72px] md:py-[108px]">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-[26px]">
          <Reveal className="mx-auto mb-14 max-w-[38em] text-center">
            <h2 className="mb-4.5 text-[clamp(2.1rem,3.9vw,3.1rem)]">Una tarifa clara, sin sorpresas</h2>
            <p className="text-[1.08rem] text-muted">Sin letra pequeña. Toda la terapia es online, por videollamada, esté donde estés.</p>
          </Reveal>

          <div className="mx-auto grid max-w-[940px] items-center gap-[18px] md:grid-cols-2">
            <Reveal>
              <div className="ses h-full">
                <span className="tag">{PRICING.tag}</span>
                <h3 className="mb-1.5 mt-3 text-[1.55rem]">{PRICING.title}</h3>
                <div className="price">{PRICING.price}<small> {PRICING.unit}</small></div>
                <ul className="mt-4.5 grid gap-2.5">
                  {PRICING.items.map((it) => (
                    <li key={it}><Check size={16} weight="bold" className="mt-1 shrink-0 text-sagedeep" aria-hidden={true} /> {it}</li>
                  ))}
                </ul>
                <p className="mt-5 rounded-xl bg-sagesoft px-4 py-3 text-[0.9rem] text-sagedeep">
                  {PRICING.discountNote}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid gap-3.5">
                {[
                  { Icon: VideoCamera, t: "Por videollamada", d: "Desde casa o donde te sientas a gusto, en toda España." },
                  { Icon: Globe, t: "60 minutos contigo", d: "Un rato solo para ti, sin prisas y a tu ritmo." },
                  { Icon: ShieldCheck, t: "Confidencial y basada en evidencia", d: "Secreto profesional garantizado y enfoque contrastado." },
                ].map(({ Icon, t, d }) => (
                  <div key={t} className="emp-item">
                    <span className="ei"><Icon size={20} aria-hidden={true} /></span>
                    <div>
                      <b className="block font-sans text-[0.98rem] font-medium text-ink">{t}</b>
                      <span className="text-[0.92rem] text-muted">{d}</span>
                    </div>
                  </div>
                ))}
                <a href="#contacto" className="btn btn-primary mt-1 justify-center">Reservar sesión</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="bg-sagedeep py-[72px] text-[#f1ede1] md:py-[108px]">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-[26px]">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-[60px]">
            <Reveal>
              <span className="eyebrow light">Da el primer paso</span>
              <h2 className="mb-4.5 text-[clamp(2.1rem,3.9vw,3.1rem)] text-white">¿Empezamos juntos?</h2>
              <p className="mb-7 max-w-[25em] text-[1.08rem] text-[#f1ede1]/80">
                Escríbeme y te respondo personalmente lo antes posible. El primer contacto es sin compromiso, para que decidas con tranquilidad.
              </p>
              <div className="grid gap-4">
                <div className="flex items-center gap-3.5 text-[1rem]">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/12"><Envelope size={20} aria-hidden={true} /></span>
                  <a href={`mailto:${SITE.email}`} className="hover:underline">{SITE.email}</a>
                </div>
                <div className="flex items-center gap-3.5 text-[1rem]">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/12"><Phone size={20} aria-hidden={true} /></span>
                  <a href={`tel:+${SITE.phoneRaw}`} className="hover:underline">{SITE.phoneDisplay}</a>
                </div>
                <div className="flex items-center gap-3.5 text-[1rem]">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/12"><Globe size={20} aria-hidden={true} /></span>
                  Sesiones online en toda España
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink pt-[60px] pb-[30px] text-[#d6cfc2]">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-[26px]">
          <div className="mb-11 grid gap-11 md:grid-cols-[1.5fr_1fr_1fr]">
            <div>
              <a href="#top" className="flex items-center gap-3">
                <BrandLogo monogram="CM" chip />
                <span className="leading-none">
                  <span className="block font-serif text-[1.3rem] font-medium text-white">{SITE.shortName}</span>
                  <span className="text-[0.66rem] uppercase tracking-[0.16em] text-[#d6cfc2]/60">{SITE.shortRole}</span>
                </span>
              </a>
              <p className="mt-4 max-w-[26em] text-[0.94rem] text-[#d6cfc2]/70">
                Acompañamiento psicológico cercano y profesional para ayudarte a sentirte mejor. Terapia 100% online en toda España.
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-sans text-[0.76rem] uppercase tracking-[0.14em] text-[#9b9488]">Navegación</h4>
              <ul className="grid gap-2.5">
                <li><a href="#servicios" className="text-[0.95rem] text-[#d6cfc2]/85 hover:text-white">Servicios</a></li>
                <li><a href="#sobre" className="text-[0.95rem] text-[#d6cfc2]/85 hover:text-white">Sobre mí</a></li>
                <li><a href="#proceso" className="text-[0.95rem] text-[#d6cfc2]/85 hover:text-white">Cómo trabajo</a></li>
                <li><a href="#faq" className="text-[0.95rem] text-[#d6cfc2]/85 hover:text-white">Preguntas frecuentes</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-sans text-[0.76rem] uppercase tracking-[0.14em] text-[#9b9488]">Contacto</h4>
              <ul className="grid gap-2.5">
                <li><a href={`mailto:${SITE.email}`} className="text-[0.95rem] text-[#d6cfc2]/85 hover:text-white">{SITE.email}</a></li>
                <li><a href={WHATSAPP_URL} className="text-[0.95rem] text-[#d6cfc2]/85 hover:text-white">{SITE.phoneDisplay}</a></li>
                <li><a href="#contacto" className="text-[0.95rem] text-[#d6cfc2]/85 hover:text-white">Reservar sesión</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-2.5 border-t border-[#d6cfc2]/15 pt-6 text-[0.82rem] text-[#a39d94]">
            <span>&copy; 2026 {SITE.name} · {SITE.role}, Col. {SITE.colegiado} · Reg. sanitario {SITE.registroSanitario}</span>
            <span className="flex gap-3">
              <a href="/aviso-legal" className="hover:text-white">Aviso legal</a>
              <a href="/privacidad" className="hover:text-white">Política de privacidad</a>
            </span>
          </div>
        </div>
      </footer>

      </main>
      <WhatsappFloat />
    </>
  );
}
