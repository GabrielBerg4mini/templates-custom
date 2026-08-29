'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { MoveHorizontal } from 'lucide-react'

export function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState(50)
  const draggingRef = useRef(false)

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const raw = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(98, Math.max(2, raw)))
  }, [])

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!draggingRef.current) return
      setFromClientX(e.clientX)
    }
    const onUp = () => {
      draggingRef.current = false
    }
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
    }
  }, [setFromClientX])

  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan">
            Antes &amp; Depois
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Resultados reais, arraste e compare
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Deslize a alça para revelar a transformação de sorriso feita com nosso protocolo digital.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <div
            ref={containerRef}
            className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-3xl border border-white/40 shadow-2xl"
            onPointerDown={(e) => {
              draggingRef.current = true
              setFromClientX(e.clientX)
            }}
          >
            {/* after (base) */}
            <Image
              src="/smile-after.png"
              alt="Sorriso depois do tratamento, dentes alinhados e brancos"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
            <span className="absolute right-4 top-4 rounded-full bg-cyan px-3 py-1 text-xs font-bold text-cyan-foreground">
              DEPOIS
            </span>

            {/* before (clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <Image
                src="/smile-before.png"
                alt="Sorriso antes do tratamento, dentes desalinhados"
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
              <span className="absolute left-4 top-4 rounded-full bg-navy px-3 py-1 text-xs font-bold text-navy-foreground">
                ANTES
              </span>
            </div>

            {/* handle */}
            <div
              className="absolute inset-y-0 z-10 flex w-0.5 items-center justify-center bg-white"
              style={{ left: `${pos}%` }}
            >
              <button
                type="button"
                aria-label="Arrastar para comparar antes e depois"
                onPointerDown={(e) => {
                  e.stopPropagation()
                  draggingRef.current = true
                }}
                className="flex size-12 cursor-ew-resize items-center justify-center rounded-full border-2 border-white bg-navy text-cyan shadow-glow"
              >
                <MoveHorizontal className="size-5" />
              </button>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MoveHorizontal className="size-4 text-cyan" />
            Arraste para comparar
          </div>
        </div>
      </div>
    </section>
  )
}
