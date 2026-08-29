import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-36 pb-16 lg:px-10 lg:pt-44">
        <div className="max-w-4xl">
          <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-muted-foreground">
            <span className="h-px w-10 bg-wood" aria-hidden="true" />
            Estúdio de Arquitetura · Residencial de alto padrão
          </p>
          <h1 className="font-serif text-5xl font-light leading-[1.02] tracking-tight text-balance text-foreground md:text-6xl lg:text-7xl">
            Criamos arquitetura atemporal para viver e trabalhar
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Projetos residenciais sustentáveis e de alto padrão, desenhados com precisão
            escandinava — luz natural, materiais nobres e espaços que envelhecem com beleza.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="https://wa.me/5511999999999"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-medium tracking-wide text-background transition-opacity hover:opacity-90"
            >
              Falar no WhatsApp
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#projetos"
              className="text-sm tracking-wide text-foreground underline decoration-wood decoration-2 underline-offset-8 transition-colors hover:text-wood"
            >
              Ver projetos
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm">
          <Image
            src="/images/hero-living-room.png"
            alt="Sala de estar minimalista escandinava banhada por luz natural"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
