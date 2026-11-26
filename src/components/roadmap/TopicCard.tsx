import { memo } from 'react'
import type { Topic } from '../../types/content'
import { DoneMark } from '../ui/DoneMark'

interface TopicCardProps {
  topic: Topic
  done: boolean
  onOpen: (id: string) => void
}

export const TopicCard = memo(function TopicCard({ topic, done, onOpen }: TopicCardProps) {
  return (
    <button
      type="button"
      onClick={() => onOpen(topic.id)}
      className="flex h-11.5 w-full items-center justify-between gap-3 rounded-md border border-line bg-surface px-3.5 text-left text-sm font-bold transition-colors hover:border-line-hover hover:bg-hover"
    >
      <span className="truncate">{topic.title}</span>
      {done && <DoneMark />}
    </button>
  )
})
