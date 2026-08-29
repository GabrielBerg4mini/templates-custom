const social = [
  { label: "Instagram", href: "#" },
  { label: "Behance", href: "#" },
  { label: "LinkedIn", href: "#" },
]

export function SiteFooter() {
  return (
    <footer id="contato" className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="text-lg font-medium tracking-[0.25em]">
              ARQ<span className="text-wood">.</span>STUDIO
            </p>
            <p className="mt-6 max-w-sm font-serif text-3xl font-light leading-snug text-balance">
              Vamos desenhar o próximo lugar que você vai chamar de seu.
            </p>
            <a
              href="https://wa.me/5511999999999"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-medium tracking-wide text-foreground transition-opacity hover:opacity-90"
            >
              Falar no WhatsApp
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-background/60">Contato</p>
            <ul className="mt-5 space-y-3 text-sm text-background/80">
              <li>
                <a href="tel:+5511999999999" className="hover:text-background">
                  +55 11 99999-9999
                </a>
              </li>
              <li>
                <a href="mailto:ola@arqstudio.com" className="hover:text-background">
                  ola@arqstudio.com
                </a>
              </li>
              <li className="pt-2 leading-relaxed">
                Rua dos Pinheiros, 1200
                <br />
                Pinheiros, São Paulo — SP
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-background/60">Redes</p>
            <ul className="mt-5 space-y-3 text-sm text-background/80">
              {social.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-background">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-background/15 pt-8 text-xs text-background/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ARQ STUDIO. Todos os direitos reservados.</p>
          <p>Arquitetura residencial de alto padrão · São Paulo, Brasil</p>
        </div>
      </div>
    </footer>
  )
}
