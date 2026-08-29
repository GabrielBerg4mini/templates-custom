'use client'

import { useEffect, useState } from 'react'
import { Menu, X, ShieldCheck } from 'lucide-react'
import { Logo } from './logo'

const navLinks = [
  { label: 'Atuação Empresarial', href: '#atuacao' },
  { label: 'Contencioso', href: '#contencioso' },
  { label: 'Sócios', href: '#socios' },
  { label: 'Contato', href: '#contato' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-hairline bg-background/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" aria-label="Vanguard Advocacia - início">
          <Logo />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-steel after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contato"
            className="hidden items-center gap-2 rounded-md border border-hairline bg-secondary/60 px-5 py-2.5 text-sm font-semibold tracking-wide text-foreground transition-all duration-300 hover:border-steel hover:bg-secondary sm:inline-flex"
          >
            <ShieldCheck className="h-4 w-4 text-steel" strokeWidth={1.75} />
            Atendimento VIP
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-hairline text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-hairline bg-background/95 backdrop-blur-xl lg:hidden">
          <nav aria-label="Navegação mobile" className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-brushed-steel px-5 py-3 text-sm font-semibold text-steel-foreground"
            >
              <ShieldCheck className="h-4 w-4" strokeWidth={1.75} />
              Atendimento VIP
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
