const steps = [
  {
    number: "01",
    title: "Briefing & Conceito",
    description:
      "Ouvimos como você vive. Traduzimos rotina, referências e terreno em um conceito arquitetônico claro.",
  },
  {
    number: "02",
    title: "Modelagem 3D",
    description:
      "Visualizamos cada ambiente em modelos tridimensionais realistas antes de qualquer decisão construtiva.",
  },
  {
    number: "03",
    title: "Projeto Executivo",
    description:
      "Detalhamento técnico completo — estrutura, materiais e especificações prontos para a obra.",
  },
  {
    number: "04",
    title: "Gestão de Obra",
    description:
      "Acompanhamos a execução do início ao fim, garantindo fidelidade ao projeto e ao prazo.",
  },
]

export function Methodology() {
  return (
    <section id="processo" className="border-y border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-32">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Processo
          </p>
          <h2 className="font-serif text-4xl font-light leading-tight tracking-tight text-balance text-foreground md:text-5xl">
            Um método, quatro etapas, zero surpresas
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground text-pretty">
            Da primeira conversa à entrega das chaves, cada fase é conduzida com transparência
            e rigor técnico.
          </p>
        </div>

        <ol className="flex flex-col">
          {steps.map((step) => (
            <li
              key={step.number}
              className="grid grid-cols-[auto_1fr] gap-8 border-t border-border py-10 first:border-t-0 first:pt-0"
            >
              <span className="font-serif text-2xl font-light text-wood">{step.number}</span>
              <div>
                <h3 className="text-xl font-medium text-foreground">{step.title}</h3>
                <p className="mt-3 max-w-lg leading-relaxed text-muted-foreground text-pretty">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
