const stats = [
  { value: 'R$ 50M+', label: 'Economizados em tributos para nossos clientes' },
  { value: '+200', label: 'Empresas atendidas em todo o território nacional' },
  { value: '98%', label: 'Taxa de êxito em teses e contencioso estratégico' },
]

export function AuthorityStats() {
  return (
    <section className="relative overflow-hidden border-y border-hairline bg-card">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, oklch(0.8 0.01 240) 0px, oklch(0.8 0.01 240) 1px, transparent 1px, transparent 14px)',
        }}
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 divide-y divide-[oklch(1_0_0_/_10%)] px-6 py-4 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-10">
        {stats.map((stat) => (
          <div key={stat.value} className="flex flex-col items-center px-6 py-10 text-center md:py-14">
            <span className="font-display text-4xl font-bold tracking-tight text-steel-gradient sm:text-5xl lg:text-6xl">
              {stat.value}
            </span>
            <span className="mt-4 max-w-[16rem] text-sm leading-relaxed text-muted-foreground">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
