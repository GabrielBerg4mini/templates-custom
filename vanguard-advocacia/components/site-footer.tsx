import { MapPin, Mail, Phone, ShieldCheck } from 'lucide-react'
import { Logo } from './logo'

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Avenida+Brigadeiro+Faria+Lima+3477+Sao+Paulo'

export function SiteFooter() {
  return (
    <footer id="contato" className="border-t border-hairline bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand + address */}
          <div>
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Escritório de advocacia empresarial dedicado à blindagem jurídica, eficiência
              tributária e defesa estratégica de empresas de alto padrão.
            </p>
            <address className="mt-6 space-y-3 text-sm not-italic text-muted-foreground">
              <span className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-steel" strokeWidth={1.75} />
                Av. Brigadeiro Faria Lima, 3477 · 14º andar
                <br />
                Itaim Bibi, São Paulo — SP, 04538-133
              </span>
              <a href="tel:+551130000000" className="flex items-center gap-3 transition-colors hover:text-foreground">
                <Phone className="h-4 w-4 shrink-0 text-steel" strokeWidth={1.75} />
                +55 (11) 3000-0000
              </a>
              <a href="mailto:contato@vanguardadvocacia.com.br" className="flex items-center gap-3 transition-colors hover:text-foreground">
                <Mail className="h-4 w-4 shrink-0 text-steel" strokeWidth={1.75} />
                contato@vanguardadvocacia.com.br
              </a>
            </address>
          </div>

          {/* Navigation */}
          <nav aria-label="Rodapé" className="text-sm">
            <h3 className="font-display text-xs font-semibold tracking-[0.2em] text-foreground uppercase">
              Atuação
            </h3>
            <ul className="mt-5 space-y-3 text-muted-foreground">
              {['Direito Tributário', 'Fusões & Aquisições', 'Proteção Patrimonial', 'Contratos', 'Trabalhista B2B', 'Societário'].map(
                (item) => (
                  <li key={item}>
                    <a href="#atuacao" className="transition-colors hover:text-foreground">
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </nav>

          {/* Location + VIP */}
          <div className="text-sm">
            <h3 className="font-display text-xs font-semibold tracking-[0.2em] text-foreground uppercase">
              Localização
            </h3>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center gap-3 rounded-md border border-hairline bg-background px-4 py-3 font-medium text-foreground transition-colors hover:border-steel"
            >
              <MapPin className="h-4 w-4 text-steel" strokeWidth={1.75} />
              Ver no mapa
            </a>
            <a
              href="#top"
              className="mt-4 flex items-center gap-3 rounded-md bg-brushed-steel px-4 py-3 font-semibold text-steel-foreground"
            >
              <ShieldCheck className="h-4 w-4" strokeWidth={1.75} />
              Atendimento VIP
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-hairline pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Vanguard Advocacia. Todos os direitos reservados.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="#" className="transition-colors hover:text-foreground">
              Política de Privacidade (LGPD)
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Termos de Uso
            </a>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-steel" strokeWidth={2} />
              Em conformidade com a LGPD
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
