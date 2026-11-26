import type { Exercise } from '../../types/content'
import { ChoiceExercise } from './ChoiceExercise'
import { WritingExercise } from './WritingExercise'

interface ExerciseCardProps {
  exercise: Exercise
  number: number
}

function ExerciseBody({ exercise }: { exercise: Exercise }) {
  switch (exercise.kind) {
    case 'choice':
      return <ChoiceExercise exercise={exercise} />
    case 'writing':
      return <WritingExercise exercise={exercise} />
    default: {
      const unreachable: never = exercise
      return unreachable
    }
  }
}

export function ExerciseCard({ exercise, number }: ExerciseCardProps) {
  return (
    <article className="flex flex-col gap-3 rounded-[10px] border border-line bg-surface p-4">
      <p className="text-[15px] leading-normal font-bold">
        <span className="mr-2 font-mono text-muted">{String(number).padStart(2, '0')}</span>
        {exercise.prompt}
      </p>
      <ExerciseBody exercise={exercise} />
    </article>
  )
}
