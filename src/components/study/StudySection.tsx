import type { ReactNode } from 'react'

interface StudySectionProps {
  title: string
  children: ReactNode
}

export function StudySection({ title, children }: StudySectionProps) {
  return (
    <section>
      <h3 className="mt-6 mb-3 font-mono text-[11px] font-semibold tracking-[0.18em] text-accent uppercase">{title}</h3>
      {children}
    </section>
  )
}
