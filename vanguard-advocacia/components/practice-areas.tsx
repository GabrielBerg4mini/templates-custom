import { Landmark, GitMerge, Lock, FileSignature, Briefcase, Building2 } from 'lucide-react'

const areas = [
  {
    icon: Landmark,
    title: 'Direito Tributário',
    desc: 'Planejamento e recuperação de créditos para reduzir a carga fiscal com segurança jurídica.',
  },
  {
    icon: GitMerge,
    title: 'Fusões & Aquisições',
    desc: 'Estruturação de M&A, due diligence e negociação de operações societárias complexas.',
  },
  {
    icon: Lock,
    title: 'Proteção Patrimonial',
    desc: 'Holdings, blindagem e sucessão para preservar o patrimônio de sócios e famílias.',
  },
  {
    icon: FileSignature,
    title: 'Contratos',
    desc: 'Elaboração e revisão de contratos empresariais de alto valor com mitigação de riscos.',
  },
  {
    icon: Briefcase,
    title: 'Trabalhista B2B',
    desc: 'Compliance trabalhista, terceirização e defesa estratégica em passivos corporativos.',
  },
  {
    icon: Building2,
    title: 'Societário',
    desc: 'Governança, acordos de sócios e reorganização de estruturas societárias.',
  },
]

export function PracticeAreas() {
  return (
    <section id="atuacao" className="relative border-t border-hairline py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.25em] text-steel uppercase">Atuação Empresarial</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
            Especialidades técnicas para cada frente do seu negócio
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-hairline bg-border sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <div
              key={area.title}
              id={area.title === 'Fusões & Aquisições' ? 'contencioso' : undefined}
              className="group relative bg-card p-8 transition-colors duration-300 hover:bg-secondary"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-md border border-hairline bg-background transition-colors duration-300 group-hover:border-steel">
                <area.icon className="h-6 w-6 text-steel" strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold text-foreground">{area.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{area.desc}</p>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-brushed-steel transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
