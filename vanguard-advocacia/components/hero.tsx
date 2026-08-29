import { ArrowRight, ShieldCheck } from 'lucide-react'
import { WhatsAppIcon } from './whatsapp-icon'

const WHATSAPP_URL =
  'https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20da%20Vanguard%20Advocacia.'

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/hero-office.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      </div>

      <div className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pt-32 pb-24 lg:px-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-secondary/40 px-4 py-1.5 text-xs font-medium tracking-[0.15em] text-muted-foreground uppercase backdrop-blur-sm">
            <ShieldCheck className="h-3.5 w-3.5 text-steel" strokeWidth={2} />
            Advocacia empresarial de alta performance
          </div>

          <h1 className="mt-7 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
            Blindagem jurídica e{' '}
            <span className="text-steel-gradient">inteligência estratégica</span> para o seu negócio
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Reduzimos riscos, protegemos patrimônio e otimizamos a carga tributária da sua empresa
            com uma atuação preventiva, técnica e absolutamente confidencial.
          </p>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-md bg-brushed-steel px-7 py-4 text-base font-semibold text-steel-foreground shadow-lg shadow-black/30 transition-transform duration-300 hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Falar com Especialista no WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#atuacao"
              className="inline-flex items-center gap-2 rounded-md border border-hairline px-6 py-4 text-base font-medium text-foreground transition-colors hover:border-steel"
            >
              Áreas de atuação
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-hairline pt-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-steel" /> Sigilo absoluto
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-steel" /> Atuação nacional
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-steel" /> Conformidade LGPD
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
