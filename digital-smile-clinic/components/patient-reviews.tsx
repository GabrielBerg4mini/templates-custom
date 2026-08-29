'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Star, Play, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@/lib/utils'

type Review = {
  name: string
  role: string
  text: string
  thumb: string
}

const reviews: Review[] = [
  {
    name: 'Rafael Almeida',
    role: 'Alinhadores invisíveis',
    text: 'Em 7 meses meu sorriso mudou completamente. O escaneamento 3D é impressionante — vi o resultado final antes mesmo de começar.',
    thumb: '/patient-1.png',
  },
  {
    name: 'Juliana Costa',
    role: 'Lentes de contato dental',
    text: 'O Digital Smile Design me deu total confiança. Aprovei cada detalhe na tela e o resultado ficou idêntico ao projeto. Recomendo demais!',
    thumb: '/patient-2.png',
  },
  {
    name: 'Marina Ribeiro',
    role: 'Clareamento a laser',
    text: 'Atendimento impecável e super tecnológico. Fiz o clareamento a laser em uma sessão e saí com o sorriso dos meus sonhos.',
    thumb: '/patient-3.png',
  },
]

export function PatientReviews() {
  const [index, setIndex] = useState(0)
  const current = reviews[index]

  const go = (dir: number) =>
    setIndex((i) => (i + dir + reviews.length) % reviews.length)

  return (
    <section id="sobre" className="relative isolate overflow-hidden bg-navy py-20 sm:py-28">
      <div
        className="absolute right-0 top-0 -z-10 size-[30rem] rounded-full bg-cyan/20 blur-3xl"
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-cyan text-cyan" />
              ))}
            </div>
            <span className="text-sm font-semibold text-navy-foreground">
              5,0 no Google · 380+ avaliações
            </span>
          </div>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-navy-foreground sm:text-4xl">
            Pacientes que sorriem de novo
          </h2>
        </div>

        <div className="mt-14 grid items-center gap-8 lg:grid-cols-2">
          {/* video thumbnail */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
              <Image
                src={current.thumb || '/placeholder.svg'}
                alt={`Depoimento em vídeo de ${current.name}`}
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
              <button
                type="button"
                aria-label={`Reproduzir depoimento de ${current.name}`}
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="flex size-20 items-center justify-center rounded-full bg-cyan/90 text-cyan-foreground shadow-glow transition-transform hover:scale-105">
                  <Play className="size-8 fill-current" />
                </span>
              </button>
              <div className="absolute bottom-4 left-4 rounded-xl glass-dark px-4 py-2">
                <p className="font-display text-sm font-bold text-navy-foreground">
                  {current.name}
                </p>
                <p className="text-xs text-cyan">{current.role}</p>
              </div>
            </div>
          </div>

          {/* review text card */}
          <div className="glass-dark rounded-3xl p-8 sm:p-10">
            <Quote className="size-10 text-cyan" />
            <p className="mt-5 text-pretty text-xl font-medium leading-relaxed text-navy-foreground">
              “{current.text}”
            </p>
            <div className="mt-6 flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-cyan text-cyan" />
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Ver avaliação ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={cn(
                      'h-2 rounded-full transition-all',
                      i === index ? 'w-8 bg-cyan' : 'w-2 bg-white/25 hover:bg-white/40',
                    )}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Avaliação anterior"
                  onClick={() => go(-1)}
                  className="flex size-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-navy-foreground transition-colors hover:bg-white/10"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  type="button"
                  aria-label="Próxima avaliação"
                  onClick={() => go(1)}
                  className="flex size-11 items-center justify-center rounded-xl bg-cyan text-cyan-foreground transition-transform hover:-translate-y-0.5"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
