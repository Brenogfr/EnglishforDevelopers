import { ChevronRight } from 'lucide-react'
import type { Module } from '../../types/content'

export type HubTone = 'info' | 'accent'

const TONES: Record<HubTone, { border: string; chip: string; label: string }> = {
  info: { border: 'border-info-line', chip: 'bg-info-bg text-info', label: 'text-info' },
  accent: { border: 'border-accent-line', chip: 'bg-accent-bg text-accent', label: 'text-accent' },
}

interface ModuleHubProps {
  module: Module
  tone: HubTone
  doneCount: number
  onContinue: () => void
}

export function ModuleHub({ module, tone, doneCount, onContinue }: ModuleHubProps) {
  const t = TONES[tone]

  return (
    <div className="relative z-1 order-first mb-1 lg:order-none lg:mb-0">
      <button
        type="button"
        onClick={onContinue}
        aria-label={`Continuar módulo ${module.number}: ${module.title}`}
        className={`flex h-11.5 w-full items-center gap-2.5 rounded-md border bg-surface px-3 font-mono text-[13px] font-semibold tracking-[0.12em] uppercase hover:bg-hover ${t.border}`}
      >
        <span className={`rounded px-1.5 py-0.5 text-xs tracking-normal ${t.chip}`}>{module.number}</span>
        <span className={`flex-1 truncate text-left ${t.label}`}>{module.shortTitle}</span>
        <span className="text-[11px] tracking-normal text-muted">
          {doneCount}/{module.topics.length}
        </span>
        <ChevronRight className="size-3.5 text-fg-soft" aria-hidden="true" />
      </button>
      <p className="mt-2 text-left text-xs leading-snug text-muted lg:absolute lg:-inset-x-6 lg:top-full lg:bg-bg lg:py-1 lg:text-center">
        {module.title}
      </p>
    </div>
  )
}
