import { useEffect, useId, useRef } from 'react'
import { X } from 'lucide-react'
import { levels } from '../../data/english'
import { useModalBehavior } from '../../hooks/useModalBehavior'
import type { StudyItem } from '../../types/content'
import { ExampleList } from './ExampleList'
import { ExerciseCard } from './ExerciseCard'
import { LearningChecklist } from './LearningChecklist'
import { StudyFooter } from './StudyFooter'
import { StudySection } from './StudySection'

interface StudyModalProps {
  item: StudyItem
  position: number
  total: number
  isDone: boolean
  isChecked: (key: string) => boolean
  onToggleDone: () => void
  onToggleCheck: (key: string) => void
  onPrev?: () => void
  onNext?: () => void
  /** Precisa ser estável (useCallback) para não reiniciar o foco do diálogo. */
  onClose: () => void
}

export function StudyModal(props: StudyModalProps) {
  const { item, isChecked, onToggleCheck, onClose } = props
  const { topic, module, isProject } = item
  const overlayRef = useRef<HTMLDivElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const titleId = useId()
  const levelName = levels[module.levelId].name

  useModalBehavior(dialogRef, onClose)

  useEffect(() => {
    overlayRef.current?.scrollTo?.({ top: 0 })
    dialogRef.current?.focus()
  }, [topic.id])

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/80 px-2 py-3 sm:px-4 sm:py-10"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="w-full max-w-[780px] rounded-[14px] border border-line-strong bg-panel shadow-[0_30px_80px_rgba(0,0,0,0.6)] focus:outline-none"
      >
        <header className="flex items-start justify-between gap-4 border-b border-line px-4.5 pt-6 pb-5 sm:px-7">
          <div>
            <p className="font-mono text-xs font-semibold tracking-[0.14em] text-accent uppercase">
              {isProject ? `Projeto prático · ${levelName}` : `${module.number} · ${module.shortTitle} · ${levelName}`}
            </p>
            <h2 id={titleId} className="mt-2 text-2xl font-extrabold tracking-tight sm:text-[26px]">
              {topic.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar janela de estudo"
            className="flex size-11 flex-none items-center justify-center rounded-lg border border-line-strong hover:bg-raised"
          >
            <X className="size-4.5" aria-hidden="true" />
          </button>
        </header>

        <div className="flex flex-col px-4.5 pb-5.5 sm:px-7 sm:pb-7">
          <StudySection title="Explicação">
            <p className="text-[15px] leading-[1.7] text-fg-soft">{topic.explanation}</p>
          </StudySection>
          <StudySection title="Exemplos · tradução · pronúncia">
            <ExampleList examples={topic.examples} />
          </StudySection>
          <StudySection title="Exercícios práticos">
            <div className="flex flex-col gap-2.5">
              {topic.exercises.map((exercise, i) => (
                <ExerciseCard key={`${topic.id}-${i}`} exercise={exercise} number={i + 1} />
              ))}
            </div>
          </StudySection>
          <StudySection title="Checklist de aprendizagem">
            <LearningChecklist topicId={topic.id} items={topic.checklist} isChecked={isChecked} onToggle={onToggleCheck} />
          </StudySection>
        </div>

        <StudyFooter
          position={props.position}
          total={props.total}
          isDone={props.isDone}
          onToggleDone={props.onToggleDone}
          onPrev={props.onPrev}
          onNext={props.onNext}
        />
      </div>
    </div>
  )
}
