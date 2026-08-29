'use client'

import { useState } from 'react'
import { ScanLine, Smile, Zap, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const items = [
  {
    id: 'alinhadores',
    icon: ScanLine,
    tag: 'Scanner Intraoral 3D',
    title: 'Escaneamento 3D em minutos',
    desc: 'Digitalização de alta resolução da sua boca — sem moldes desconfortáveis. Um mapa 3D preciso que guia todo o tratamento com alinhadores.',
    points: ['Sem moldes de gesso', 'Precisão de micra', 'Simulação instantânea'],
  },
  {
    id: 'lentes',
    icon: Smile,
    tag: 'Digital Smile Design (DSD)',
    title: 'Projete seu novo sorriso',
    desc: 'Desenhamos digitalmente cada detalhe das suas lentes e facetas. Você aprova o resultado na tela antes de qualquer procedimento.',
    points: ['Prévia realista do sorriso', 'Design personalizado', 'Aprovação antes de iniciar'],
  },
  {
    id: 'implantes',
    icon: Zap,
    tag: 'Clareamento a Laser',
    title: 'Dentes mais brancos, na hora',
    desc: 'Tecnologia de clareamento a laser que entrega vários tons de branqueamento em uma única sessão, com segurança e sem sensibilidade.',
    points: ['Resultado em 1 sessão', 'Baixa sensibilidade', 'Efeito duradouro'],
  },
]

export function Differentials() {
  const [active, setActive] = useState(0)

  return (
    <section id="diferenciais" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan">
            Diferenciais High-Tech
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Tecnologia de ponta em cada etapa
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Equipamentos digitais que tornam o tratamento mais preciso, rápido e previsível.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = item.icon
            const isActive = active === i
            return (
              <button
                key={item.id}
                id={item.id}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className={cn(
                  'group relative overflow-hidden rounded-3xl border p-8 text-left transition-all duration-300 scroll-mt-28',
                  isActive
                    ? 'border-cyan/50 bg-navy text-navy-foreground shadow-glow -translate-y-1'
                    : 'border-border bg-card hover:-translate-y-1 hover:border-cyan/40',
                )}
              >
                <div
                  className={cn(
                    'absolute -right-16 -top-16 size-40 rounded-full blur-2xl transition-opacity',
                    isActive ? 'bg-cyan/30 opacity-100' : 'bg-cyan/10 opacity-0 group-hover:opacity-100',
                  )}
                  aria-hidden
                />
                <span
                  className={cn(
                    'flex size-14 items-center justify-center rounded-2xl transition-colors',
                    isActive ? 'bg-cyan text-cyan-foreground' : 'bg-cyan/10 text-cyan',
                  )}
                >
                  <Icon className="size-7" strokeWidth={2} />
                </span>

                <p
                  className={cn(
                    'mt-6 text-xs font-semibold uppercase tracking-[0.18em]',
                    isActive ? 'text-cyan' : 'text-muted-foreground',
                  )}
                >
                  {item.tag}
                </p>
                <h3
                  className={cn(
                    'mt-2 font-display text-xl font-bold',
                    isActive ? 'text-navy-foreground' : 'text-navy',
                  )}
                >
                  {item.title}
                </h3>
                <p
                  className={cn(
                    'mt-3 text-sm leading-relaxed',
                    isActive ? 'text-navy-foreground/75' : 'text-muted-foreground',
                  )}
                >
                  {item.desc}
                </p>

                <ul className="mt-5 space-y-2">
                  {item.points.map((p) => (
                    <li
                      key={p}
                      className={cn(
                        'flex items-center gap-2 text-sm font-medium',
                        isActive ? 'text-navy-foreground/90' : 'text-navy/80',
                      )}
                    >
                      <span
                        className={cn(
                          'size-1.5 rounded-full',
                          isActive ? 'bg-cyan' : 'bg-cyan',
                        )}
                      />
                      {p}
                    </li>
                  ))}
                </ul>

                <span
                  className={cn(
                    'mt-6 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors',
                    isActive ? 'text-cyan' : 'text-navy',
                  )}
                >
                  Saber mais
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
