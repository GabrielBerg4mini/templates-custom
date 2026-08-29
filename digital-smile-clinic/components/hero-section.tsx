import Image from 'next/image'
import { MessageCircle, ScanLine, Sparkles, ShieldCheck } from 'lucide-react'

const WHATSAPP =
  'https://wa.me/5511999999999?text=Ol%C3%A1!%20Quero%20agendar%20minha%20avalia%C3%A7%C3%A3o%20digital%203D.'

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      {/* backdrop */}
      <div className="absolute inset-0 -z-10 grid-tech" aria-hidden />
      <div
        className="absolute -right-40 -top-40 -z-10 size-[36rem] rounded-full bg-cyan/25 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -left-52 top-40 -z-10 size-[32rem] rounded-full bg-navy/10 blur-3xl"
        aria-hidden
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-cyan/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-navy">
            <Sparkles className="size-3.5 text-cyan" />
            ODONTOLOGIA DIGITAL DE ALTA PRECISÃO
          </span>

          <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Transforme seu sorriso de forma{' '}
            <span className="relative whitespace-nowrap text-cyan text-glow-cyan">
              invisível
            </span>
            , rápida e digital
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Escaneamento intraoral <strong className="text-navy">3D</strong> em minutos e
            alinhadores transparentes <strong className="text-navy">sem bráquetes</strong>.
            Planejamento digital do início ao resultado final — você vê seu novo sorriso antes de
            começar.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-2xl bg-cyan px-7 py-4 text-base font-bold text-cyan-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="size-5" />
              Agendar Consulta via WhatsApp
            </a>
            <a
              href="#diferenciais"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-card px-6 py-4 text-base font-semibold text-navy transition-colors hover:bg-secondary"
            >
              Conhecer a tecnologia
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <ScanLine className="size-4 text-cyan" /> Scanner intraoral 3D
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="size-4 text-cyan" /> +2.400 sorrisos entregues
            </span>
          </div>
        </div>

        {/* hero image */}
        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute inset-0 -z-10 translate-x-6 translate-y-6 rounded-[2.5rem] bg-navy/90" aria-hidden />
            <div className="overflow-hidden rounded-[2.5rem] border border-white/40 shadow-2xl">
              <Image
                src="/hero-aligner.png"
                alt="Paciente sorrindo segurando um alinhador transparente"
                width={720}
                height={860}
                priority
                className="h-full w-full object-cover"
              />
            </div>

            {/* floating glass stat card */}
            <div className="glass animate-float-slow absolute -left-4 bottom-10 rounded-2xl p-4 shadow-xl sm:-left-8">
              <p className="font-display text-2xl font-bold text-navy">98%</p>
              <p className="text-xs text-muted-foreground">satisfação dos pacientes</p>
            </div>
            <div className="glass animate-float-slow absolute -right-3 top-10 rounded-2xl p-4 shadow-xl [animation-delay:1.5s] sm:-right-6">
              <div className="flex items-center gap-2">
                <span className="flex size-8 items-center justify-center rounded-lg bg-cyan/15 text-cyan">
                  <ScanLine className="size-4" />
                </span>
                <div>
                  <p className="font-display text-sm font-bold text-navy">Scan 3D</p>
                  <p className="text-[0.7rem] text-muted-foreground">sem moldes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
