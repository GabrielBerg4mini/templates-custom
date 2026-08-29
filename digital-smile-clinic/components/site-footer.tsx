import { MapPin, Clock, Phone, Navigation, ScanLine, Mail } from 'lucide-react'

const WHATSAPP =
  'https://wa.me/5511999999999?text=Ol%C3%A1!%20Quero%20agendar%20minha%20avalia%C3%A7%C3%A3o%20digital%203D.'
const MAPS_ROUTE =
  'https://www.google.com/maps/dir/?api=1&destination=Av.+Paulista+1000+Sao+Paulo'

const hours = [
  { day: 'Segunda a Sexta', time: '08h — 20h' },
  { day: 'Sábado', time: '09h — 14h' },
  { day: 'Domingo', time: 'Fechado' },
]

export function SiteFooter() {
  return (
    <footer className="relative bg-background">
      {/* CTA band */}
      <section id="avaliacao" className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 scroll-mt-24">
        <div className="relative overflow-hidden rounded-[2rem] bg-navy px-6 py-12 text-center sm:px-12 sm:py-16">
          <div
            className="absolute -left-20 -top-20 size-72 rounded-full bg-cyan/25 blur-3xl"
            aria-hidden
          />
          <div
            className="absolute -bottom-24 -right-16 size-80 rounded-full bg-cyan/15 blur-3xl"
            aria-hidden
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-bold tracking-tight text-navy-foreground sm:text-4xl">
              Pronto para conhecer seu novo sorriso?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-navy-foreground/70">
              Faça sua Avaliação Digital 3D e veja a simulação do resultado ainda na primeira
              consulta.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-2xl bg-cyan px-8 py-4 text-base font-bold text-cyan-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              <Phone className="size-5" />
              Agendar via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* footer content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-xl bg-navy text-cyan">
                <ScanLine className="size-5" strokeWidth={2.25} />
              </span>
              <span className="font-display text-lg font-bold leading-none tracking-tight text-navy">
                Digital Smile
                <span className="block text-[0.7rem] font-medium tracking-[0.28em] text-cyan">
                  CLINIC
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Odontologia digital avançada: alinhadores invisíveis, lentes, implantes e
              planejamento 3D.
            </p>
          </div>

          {/* address */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-navy">
              Endereço
            </h3>
            <p className="mt-4 flex items-start gap-3 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0 text-cyan" />
              Av. Paulista, 1000 — 12º andar
              <br />
              Bela Vista, São Paulo — SP
            </p>
            <a
              href={MAPS_ROUTE}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-cyan/40 hover:bg-secondary"
            >
              <Navigation className="size-4 text-cyan" />
              Traçar rota no Google Maps
            </a>
          </div>

          {/* hours */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-navy">
              Horário
            </h3>
            <ul className="mt-4 space-y-2.5">
              {hours.map((h) => (
                <li key={h.day} className="flex items-center justify-between gap-4 text-sm">
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="size-4 text-cyan" />
                    {h.day}
                  </span>
                  <span className="font-medium text-navy">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-navy">
              Contato
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-navy"
                >
                  <Phone className="size-4 text-cyan" />
                  (11) 99999-9999
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@digitalsmileclinic.com.br"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-navy"
                >
                  <Mail className="size-4 text-cyan" />
                  contato@digitalsmile.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Digital Smile Clinic. Todos os direitos reservados.</p>
          <p>CRO-SP 00000 · Responsável Técnico Dr. Digital</p>
        </div>
      </div>
    </footer>
  )
}
