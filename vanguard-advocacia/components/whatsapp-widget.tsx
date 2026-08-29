import { WhatsAppIcon } from './whatsapp-icon'

const WHATSAPP_URL =
  'https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20da%20Vanguard%20Advocacia.'

export function WhatsAppWidget() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com especialista no WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full border border-hairline bg-card/90 py-2 pl-2 pr-3 shadow-xl shadow-black/40 backdrop-blur-md transition-all duration-300 hover:pr-5 sm:bottom-8 sm:right-8"
    >
      <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-brushed-steel text-steel-foreground">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-steel opacity-30" />
        <WhatsAppIcon className="relative h-6 w-6" />
      </span>
      <span className="hidden text-sm font-semibold text-foreground sm:block">
        Fale conosco
        <span className="block text-xs font-normal text-muted-foreground">Resposta imediata</span>
      </span>
    </a>
  )
}
