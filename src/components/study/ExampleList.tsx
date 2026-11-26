import { Play } from 'lucide-react'
import { isSpeechAvailable, speak } from '../../services/speech'
import type { Example } from '../../types/content'

interface ExampleListProps {
  examples: Example[]
}

export function ExampleList({ examples }: ExampleListProps) {
  const canSpeak = isSpeechAvailable()

  return (
    <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
      {examples.map((ex, i) => (
        <li key={i}className="flex items-center gap-3.5 rounded-[10px] border border-line bg-surface px-4 py-3.5">
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <span lang="en" className="text-[15px] leading-snug font-bold">
              {ex.en}
            </span>
            <span className="text-sm leading-snug text-muted">{ex.pt}</span>
            {ex.pronunciation && (
              <span className="font-mono text-xs text-accent">pronúncia: {ex.pronunciation}</span>
            )}
          </div>
          {canSpeak && (
            <button
              type="button"
              onClick={() => speak(ex.en)}
              aria-label={`Ouvir: ${ex.en}`}
              className="flex size-11 flex-none items-center justify-center rounded-full border border-control bg-raised hover:border-control-strong"
            >
              <Play className="size-4" aria-hidden="true" />
            </button>
          )}
        </li>
      ))}
    </ul>
  )
}
