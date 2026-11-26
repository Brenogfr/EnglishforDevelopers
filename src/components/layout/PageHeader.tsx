import type { ReactNode } from 'react'
import { MessageSquareCode } from 'lucide-react'

interface PageHeaderProps {
  children?: ReactNode
}

export function PageHeader({ children }: PageHeaderProps) {
  return (
    <header className="mb-18 flex flex-col items-center gap-4.5 text-center">
      <p className="inline-flex items-center gap-2 rounded-lg border border-line-strong bg-surface px-3.5 py-2 text-[13px] font-semibold text-fg-soft">
        <span className="size-2 flex-none rounded-full bg-success" aria-hidden="true" />
        Trilha paralela · progresso próprio · não bloqueia o Back-end
      </p>
      <h1 className="mt-1.5 flex items-center gap-3.5 text-3xl font-extrabold tracking-tight sm:text-[44px]">
        <MessageSquareCode className="size-8 text-accent sm:size-10" strokeWidth={1.6} aria-hidden="true" />
        English for Developers
      </h1>
      <p className="max-w-[640px] text-base leading-relaxed text-muted">
        Do vocabulário do dia a dia à entrevista técnica. Cada tópico abre uma janela de estudo com explicação em
        português, exemplos em inglês, pronúncia, exercícios e checklist.
      </p>
      {children}
    </header>
  )
}
