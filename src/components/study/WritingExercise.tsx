import { useId, useState } from 'react'
import type { WritingExercise as WritingExerciseData } from '../../types/content'

interface WritingExerciseProps {
  exercise: WritingExerciseData
}

export function WritingExercise({ exercise }: WritingExerciseProps) {
  const [revealed, setRevealed] = useState(false)
  const inputId = useId()
  const answerId = useId()

  return (
    <>
      <label htmlFor={inputId} className="text-xs font-semibold text-muted">
        Sua resposta
      </label>
      <textarea
        id={inputId}
        lang="en"
        placeholder="Escreva em inglês…"
        className="box-border min-h-21 w-full resize-y rounded-lg border border-line-strong bg-bg p-3 text-sm leading-normal text-fg placeholder:text-muted"
      />
      <button
        type="button"
        aria-expanded={revealed}
        aria-controls={answerId}
        onClick={() => setRevealed((r) => !r)}
        className="min-h-11 self-start rounded-lg border border-control px-4 text-sm font-semibold hover:bg-raised"
      >
        {revealed ? 'Esconder resposta modelo' : 'Ver resposta modelo'}
      </button>
      <div
        id={answerId}
        lang="en"
        hidden={!revealed}
        className="rounded-lg border border-success-line bg-success-bg px-3.5 py-3 text-sm leading-relaxed whitespace-pre-line text-success-fg"
      >
        {exercise.modelAnswer}
      </div>
    </>
  )
}
