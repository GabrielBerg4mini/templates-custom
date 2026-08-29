'use client'

import { useEffect, useState } from 'react'
import { Menu, X, ScanLine } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Alinhadores', href: '#alinhadores' },
  { label: 'Lentes', href: '#lentes' },
  { label: 'Implantes', href: '#implantes' },
  { label: 'Sobre', href: '#sobre' },
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
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'py-3' : 'py-5',
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={cn(
            'flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-6',
            scrolled ? 'glass shadow-lg shadow-navy/5' : 'bg-transparent',
          )}
        >
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-xl bg-navy text-cyan shadow-glow">
              <ScanLine className="size-5" strokeWidth={2.25} />
            </span>
            <span className="font-display text-lg font-bold leading-none tracking-tight text-navy">
              Digital Smile
              <span className="block text-[0.7rem] font-medium tracking-[0.28em] text-cyan">
                CLINIC
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-sm font-medium text-navy/70 transition-colors hover:text-navy after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-cyan after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#avaliacao"
              className="hidden rounded-xl bg-navy px-5 py-2.5 text-sm font-semibold text-navy-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex"
            >
              Avaliação Digital 3D
            </a>
            <button
              type="button"
              aria-label="Abrir menu"
              onClick={() => setOpen((v) => !v)}
              className="flex size-10 items-center justify-center rounded-xl border border-border bg-card text-navy md:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="glass mt-2 rounded-2xl p-4 md:hidden">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-navy/80 hover:bg-secondary"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#avaliacao"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-lg bg-navy px-3 py-2.5 text-center text-sm font-semibold text-navy-foreground"
              >
                Avaliação Digital 3D
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
