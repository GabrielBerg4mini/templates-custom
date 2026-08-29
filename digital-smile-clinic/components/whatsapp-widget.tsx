'use client'

import { useEffect, useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

const WHATSAPP =
  'https://wa.me/5511999999999?text=Ol%C3%A1!%20Quero%20agendar%20minha%20avalia%C3%A7%C3%A3o%20digital%203D.'

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1200)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="glass w-72 origin-bottom-right animate-fade-up rounded-2xl p-4 shadow-2xl">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-[#25D366] text-white">
                <MessageCircle className="size-5" />
              </span>
              <div>
                <p className="font-display text-sm font-bold text-navy">Digital Smile Clinic</p>
                <p className="text-xs text-cyan">Online agora</p>
              </div>
            </div>
            <button
              type="button"
              aria-label="Fechar"
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-navy"
            >
              <X className="size-4" />
            </button>
          </div>
          <p className="mt-3 rounded-xl bg-secondary px-3 py-2.5 text-sm text-navy/80">
            Olá! 👋 Quer agendar sua Avaliação Digital 3D? Fale com a gente agora.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="size-4" />
            Iniciar conversa
          </a>
        </div>
      )}

      <button
        type="button"
        aria-label="Abrir WhatsApp"
        onClick={() => setOpen((v) => !v)}
        className={`group relative flex size-15 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-500 hover:scale-105 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
        style={{ width: '3.75rem', height: '3.75rem' }}
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
        <MessageCircle className="relative size-7" />
      </button>
    </div>
  )
}
