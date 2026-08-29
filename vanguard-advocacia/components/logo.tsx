export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className ?? ''}`}>
      <span aria-hidden="true" className="relative inline-flex h-9 w-9 items-center justify-center">
        <svg viewBox="0 0 40 40" className="h-9 w-9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="steelEmblem" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#dfe4e8" />
              <stop offset="0.5" stopColor="#9aa3ab" />
              <stop offset="1" stopColor="#c3cad0" />
            </linearGradient>
          </defs>
          <path
            d="M20 2 L36 8 V20 C36 30 29 36 20 39 C11 36 4 30 4 20 V8 Z"
            stroke="url(#steelEmblem)"
            strokeWidth="1.5"
            fill="none"
          />
          <path d="M13 13 L20 29 L27 13" stroke="url(#steelEmblem)" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-base font-semibold tracking-[0.18em] text-foreground uppercase">
          Vanguard
        </span>
        <span className="font-display text-[0.62rem] font-medium tracking-[0.42em] text-muted-foreground uppercase">
          Advocacia
        </span>
      </span>
    </div>
  )
}
