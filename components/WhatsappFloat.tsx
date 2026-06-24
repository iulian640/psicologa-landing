import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { WHATSAPP_URL } from "@/lib/site";

export function WhatsappFloat() {
  return (
    <a
      className="wa-float"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbeme por WhatsApp"
    >
      <WhatsappLogo size={30} weight="fill" color="#fff" />
    </a>
  );
}
