import Image from "next/image"

const projects = [
  {
    name: "Casa Mata",
    location: "Serra da Mantiqueira, SP",
    image: "/images/project-1.png",
    year: "2024",
  },
  {
    name: "Residência Pátio",
    location: "Jardins, São Paulo",
    image: "/images/project-2.png",
    year: "2023",
  },
]

export function FeaturedProjects() {
  return (
    <section id="projetos" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Projetos selecionados
          </p>
          <h2 className="font-serif text-4xl font-light tracking-tight text-foreground md:text-5xl">
            Obras que definem lugar
          </h2>
        </div>
        <a
          href="#contato"
          className="text-sm tracking-wide text-foreground underline decoration-wood decoration-2 underline-offset-8 hover:text-wood"
        >
          Ver portfólio completo
        </a>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <a key={project.name} href="#contato" className="group block">
            <figure className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={`${project.name} — ${project.location}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/40" />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-4 p-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-xs uppercase tracking-[0.3em] text-background/80">
                  {project.location} · {project.year}
                </p>
                <p className="mt-2 font-serif text-3xl font-light text-background">{project.name}</p>
              </figcaption>
            </figure>
          </a>
        ))}
      </div>
    </section>
  )
}
