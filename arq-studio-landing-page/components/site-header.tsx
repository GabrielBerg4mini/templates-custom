"use client"

import { useEffect, useState } from "react"

const navItems = [
  { label: "Projetos", href: "#projetos" },
  { label: "Filosofia", href: "#filosofia" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#" className="text-lg font-medium tracking-[0.25em] text-foreground">
          ARQ<span className="text-wood">.</span>STUDIO
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="rounded-full border border-foreground px-5 py-2 text-sm tracking-wide text-foreground transition-colors hover:bg-foreground hover:text-background"
        >
          Iniciar Projeto
        </a>
      </div>
    </header>
  )
}
