import { ChevronLeft, ChevronRight } from 'lucide-react'

interface StudyFooterProps {
  position: number
  total: number
  isDone: boolean
  onToggleDone: () => void
  onPrev?: () => void
  onNext?: () => void
}

const navButton =
  'inline-flex min-h-11 items-center gap-2 rounded-lg border border-control px-4 text-sm font-semibold hover:bg-raised'

export function StudyFooter({ position, total, isDone, onToggleDone, onPrev, onNext }: StudyFooterProps) {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-line px-4.5 py-4.5 sm:px-7">
      <div className="flex gap-2">
        {onPrev && (
          <button type="button" onClick={onPrev} className={navButton}>
            <ChevronLeft className="size-3.5" aria-hidden="true" />
            Anterior
          </button>
        )}
        {onNext && (
          <button type="button" onClick={onNext} className={navButton}>
            Próximo
            <ChevronRight className="size-3.5" aria-hidden="true" />
          </button>
        )}
      </div>
      <span className="font-mono text-xs text-muted">
        {position} de {total}
      </span>
      <button
        type="button"
        aria-pressed={isDone}
        onClick={onToggleDone}
        className={`min-h-11 rounded-lg px-4.5 text-sm font-bold ${
          isDone ? 'border border-success-line bg-success-bg text-success' : 'bg-fg text-bg hover:bg-white'
        }`}
      >
        {isDone ? 'Concluído · desmarcar' : 'Marcar como concluído'}
      </button>
    </footer>
  )
}
