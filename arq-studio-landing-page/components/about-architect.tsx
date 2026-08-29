import Image from "next/image"

export function AboutArchitect() {
  return (
    <section id="filosofia" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="relative order-1 aspect-[4/5] w-full overflow-hidden rounded-sm lg:order-none">
          <Image
            src="/images/architect-portrait.png"
            alt="Retrato do arquiteto fundador da ARQ STUDIO"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover grayscale"
          />
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-muted-foreground">
            O arquiteto
          </p>
          <blockquote className="font-serif text-3xl font-light leading-snug tracking-tight text-balance text-foreground md:text-4xl">
            &ldquo;Arquitetura não é sobre impressionar. É sobre criar espaços que fazem sentido
            hoje e continuam certos daqui a trinta anos.&rdquo;
          </blockquote>
          <p className="mt-8 leading-relaxed text-muted-foreground text-pretty">
            Fundada com a convicção de que o bom design é discreto, a ARQ STUDIO combina o rigor
            da tradição escandinava com a luz e os materiais brasileiros. Cada projeto começa
            pela luz natural, pela circulação do ar e pela relação honesta entre forma e função.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <span className="h-px w-12 bg-wood" aria-hidden="true" />
            <div>
              <p className="font-medium text-foreground">Henrique Alvim</p>
              <p className="text-sm text-muted-foreground">Arquiteto fundador · CAU 12345-6</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
