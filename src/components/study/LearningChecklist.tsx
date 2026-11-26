import { Check } from 'lucide-react'
import { checklistKey } from '../../hooks/useProgress'

interface LearningChecklistProps {
  topicId: string
  items: string[]
  isChecked: (key: string) => boolean
  onToggle: (key: string) => void
}

export function LearningChecklist({ topicId, items, isChecked, onToggle }: LearningChecklistProps) {
  return (
    <ul className="m-0 list-none p-0">
      {items.map((label, i) => {
        const key = checklistKey(topicId, i)
        const checked = isChecked(key)
        return (
          <li key={key}>
            <label className="flex min-h-11 cursor-pointer items-center gap-3 py-1 text-sm">
              <input type="checkbox" checked={checked} onChange={() => onToggle(key)} className="peer sr-only" />
              <span
                aria-hidden="true"
                className={`flex size-5 flex-none items-center justify-center rounded-[5px] peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-info ${
                  checked ? 'bg-success' : 'border-[1.5px] border-control-strong'
                }`}
              >
                {checked && <Check className="size-3.5 text-bg" strokeWidth={3} />}
              </span>
              <span className={checked ? 'text-muted line-through' : 'text-fg'}>{label}</span>
            </label>
          </li>
        )
      })}
    </ul>
  )
}
