import { LinkedInIcon } from './linkedin-icon'

const partners = [
  {
    name: 'Ricardo Vasconcelos',
    role: 'Sócio Fundador · Tributário',
    credentials: 'OAB/SP 128.440 · LL.M. Direito Tributário (FGV)',
    image: '/images/partner-1.png',
    linkedin: 'https://www.linkedin.com',
  },
  {
    name: 'Helena Marques',
    role: 'Sócia · M&A e Societário',
    credentials: 'OAB/SP 201.882 · MBA Corporate Finance (Insper)',
    image: '/images/partner-2.png',
    linkedin: 'https://www.linkedin.com',
  },
  {
    name: 'Eduardo Lins',
    role: 'Sócio · Contencioso Estratégico',
    credentials: 'OAB/RJ 156.771 · Mestre em Processo Civil (USP)',
    image: '/images/partner-3.png',
    linkedin: 'https://www.linkedin.com',
  },
  {
    name: 'Carolina Prado',
    role: 'Sócia · Proteção Patrimonial',
    credentials: 'OAB/SP 233.109 · Esp. Planejamento Sucessório',
    image: '/images/partner-4.png',
    linkedin: 'https://www.linkedin.com',
  },
]

export function Partners() {
  return (
    <section id="socios" className="border-t border-hairline py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.25em] text-steel uppercase">Sócios</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
            Advogados que lideram operações de alta complexidade
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner) => (
            <article
              key={partner.name}
              className="group overflow-hidden rounded-lg border border-hairline bg-card transition-colors duration-300 hover:border-steel"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={partner.image || '/placeholder.svg'}
                  alt={`Retrato de ${partner.name}`}
                  className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <a
                  href={partner.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn de ${partner.name}`}
                  className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-md border border-hairline bg-background/70 text-steel backdrop-blur-sm transition-colors hover:bg-brushed-steel hover:text-steel-foreground"
                >
                  <LinkedInIcon className="h-4 w-4" />
                </a>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground">{partner.name}</h3>
                <p className="mt-1 text-sm font-medium text-steel">{partner.role}</p>
                <p className="mt-3 border-t border-hairline pt-3 text-xs leading-relaxed text-muted-foreground">
                  {partner.credentials}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
