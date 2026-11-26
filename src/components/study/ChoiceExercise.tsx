import { useState } from 'react'
import type { ChoiceExercise as ChoiceExerciseData } from '../../types/content'

interface ChoiceExerciseProps {
  exercise: ChoiceExerciseData
}

const LETTERS = 'ABCDEF'

function optionClass(picked: number | null, index: number, answer: number): string {
  if (picked === null) return 'border-line-strong bg-bg hover:border-line-hover'
  if (index === answer) return 'border-success bg-success-bg'
  if (index === picked) return 'border-warn bg-warn-bg'
  return 'border-line bg-bg opacity-70'
}

export function ChoiceExercise({ exercise }: ChoiceExerciseProps) {
  const [picked, setPicked] = useState<number | null>(null)
  const correct = picked === exercise.answer

  return (
    <>
      <div className="flex flex-col gap-2">
        {exercise.options.map((option, i) => (
          <button
            key={option}
            type="button"
            lang="en"
            aria-pressed={picked === i}
            onClick={() => setPicked(i)}
            className={`flex min-h-11 items-center gap-3 rounded-lg border px-3 py-2 text-left text-sm leading-snug ${optionClass(picked, i, exercise.answer)}`}
          >
            <span className="flex-none font-mono text-xs text-muted">{LETTERS[i]}</span>
            <span>{option}</span>
          </button>
        ))}
      </div>
      <p aria-live="polite" className={`text-[13px] font-bold ${correct ? 'text-success' : 'text-warn'}`}>
        {picked === null ? '' : correct ? 'Correto!' : 'Quase. A resposta certa está destacada em verde.'}
      </p>
    </>
  )
}
