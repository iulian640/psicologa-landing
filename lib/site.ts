/**
 * DEMO — Datos de muestra para el portafolio (no son datos reales de ningún cliente).
 * Todo el sitio lee de este archivo: cambiando estos valores se personaliza la web entera.
 * En el proyecto real, este es el único archivo que hay que tocar para los datos.
 */

export const SITE = {
  name: "Clara Méndez Ruiz",
  shortName: "Clara Méndez",
  role: "Psicóloga General Sanitaria",
  shortRole: "Psicóloga sanitaria",
  colegiado: "M-00000",
  registroSanitario: "CS-00000",
  email: "hola@clara-psicologia.demo",
  phoneDisplay: "+34 600 000 000",
  phoneRaw: "34600000000", // sin +, ni espacios (para WhatsApp)
  city: "Madrid",
  region: "Madrid",
  postalCode: "28001",
  address: "Calle de ejemplo 1",
  nif: "00000000X",
  modality: "online",
  url: "https://psicologa-demo.netlify.app",
} as const;

export const WHATSAPP_URL = `https://wa.me/${SITE.phoneRaw}`;
export const MAILTO_URL = `mailto:${SITE.email}`;

/** Imágenes. En la demo se usan fotos de stock (Unsplash) como marcador de posición. */
export const IMAGES = {
  logo: "/logo.png", // ausente en la demo → la cabecera muestra el monograma de respaldo
  heroPortrait: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1100&q=80",
  aboutPortrait: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80",
  og: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=1200&q=80",
};

/** Señales de confianza (no son cifras inventadas con afán publicitario). */
export const STATS = [
  { value: "100% online", label: "terapia desde cualquier punto de España" },
  { value: `Col. ${SITE.colegiado}`, label: "Psicóloga General Sanitaria colegiada" },
  { value: "Sin compromiso", label: "primer contacto para conocernos" },
];

/** Testimonios de muestra (ficticios, solo para la demo). */
export const TESTIMONIALS = [
  {
    quote:
      "Desde la primera sesión me sentí escuchada y acompañada. Un trato muy cercano y profesional que me ayudó a entender lo que me pasaba.",
    name: "Paciente",
    tag: "Terapia online",
  },
  {
    quote:
      "Había probado antes sin éxito, pero aquí fue diferente: me dio herramientas reales y noté el cambio en pocas semanas. Muy agradecida.",
    name: "Paciente",
    tag: "Terapia online",
  },
];

/** Tarifa de la sesión individual + nota de descuento. */
export const PRICING = {
  tag: "Sesión individual",
  title: "Terapia individual online",
  price: "60 €",
  unit: "/ 60 min",
  items: [
    "Sesión online por videollamada",
    "Ansiedad, autoestima, duelo, cambios vitales y más",
    "Plan personalizado y a tu ritmo",
  ],
  discountNote: "45 € para estudiantes y personas en situación de desempleo.",
};

/** Formación y acreditaciones (demo). */
export const CREDENTIALS = [
  "Psicóloga General Sanitaria",
  `Col. ${SITE.colegiado}`,
  "Grado en Psicología",
  "Máster en Psicología General Sanitaria",
  "Especialización en Terapias Contextuales",
];

/** Motivos de consulta que aparecen en el desplegable del formulario. */
export const FORM_TOPICS = [
  "Ansiedad y estrés",
  "Autoestima",
  "Estado de ánimo",
  "Duelo o pérdida",
  "Cambios vitales",
  "Otro, lo hablamos",
];

export const FAQS = [
  {
    q: "¿Cómo sé si necesito ir a terapia?",
    a: "No hace falta estar en crisis. Si algo te genera malestar de forma repetida, te cuesta gestionarlo solo o sientes que necesitas hablarlo con alguien neutral, la terapia puede ayudarte. El primer contacto sirve justo para valorarlo juntos.",
  },
  {
    q: "¿Las sesiones online funcionan igual de bien?",
    a: "Sí. La evidencia muestra que la terapia online es tan eficaz como la presencial para la mayoría de motivos de consulta. Solo necesitas un espacio tranquilo y conexión a internet. Trabajo exclusivamente online, por videollamada, para que puedas hacer tu proceso desde donde estés.",
  },
  {
    q: "¿Desde qué enfoque trabajas?",
    a: "Trabajo desde las terapias contextuales (como la Terapia de Aceptación y Compromiso, ACT), un enfoque basado en la evidencia. No se trata de eliminar lo que sientes, sino de ayudarte a relacionarte de otra forma con ello para avanzar hacia una vida con sentido para ti.",
  },
  {
    q: "¿Cuánto dura el proceso?",
    a: "Depende de cada persona y de sus objetivos. Algunos procesos se resuelven en pocas sesiones y otros requieren más tiempo. Revisamos juntos el avance con frecuencia para que siempre sepas dónde estás.",
  },
  {
    q: "¿Es todo confidencial?",
    a: "Por completo. Todo lo que se habla en consulta está protegido por el secreto profesional y la normativa del Colegio Oficial de Psicología. Tu intimidad es una prioridad.",
  },
  {
    q: "¿Cómo reservo mi primera sesión?",
    a: "Rellena el formulario de contacto o escríbeme por WhatsApp. Te responderé lo antes posible para encontrar el mejor horario, sin compromiso.",
  },
];
