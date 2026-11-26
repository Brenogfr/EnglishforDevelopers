import { ChevronRight, PencilLine } from 'lucide-react'
import type { Topic } from '../../types/content'
import { DoneMark } from '../ui/DoneMark'

interface ProjectCardProps {
  project: Topic
  moduleNumber: string
  done: boolean
  onOpen: (id: string) => void
}

export function ProjectCard({ project, moduleNumber, done, onOpen }: ProjectCardProps) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project.id)}
      className="relative z-1 flex w-full max-w-[560px] items-center gap-3.5 self-center rounded-lg border border-line-strong bg-surface-2 px-4.5 py-4 text-left hover:border-line-hover"
    >
      <span className="flex size-7.5 flex-none items-center justify-center rounded-md bg-accent-soft">
        <PencilLine className="size-4 text-accent" strokeWidth={1.8} aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-mono text-[11px] font-semibold tracking-[0.14em] text-accent">
          PROJETO PRÁTICO · MÓDULO {moduleNumber}
        </span>
        <span className="mt-1 block text-sm font-bold">{project.title}</span>
      </span>
      {done && <DoneMark />}
      <ChevronRight className="size-4 text-fg-soft" aria-hidden="true" />
    </button>
  )
}
