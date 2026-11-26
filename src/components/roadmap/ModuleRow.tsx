import type { Module, Topic } from '../../types/content'
import { Connector } from './Connector'
import { ModuleHub, type HubTone } from './ModuleHub'
import { TopicCard } from './TopicCard'

interface ModuleRowProps {
  module: Module
  tone: HubTone
  isDone: (id: string) => boolean
  onOpen: (id: string) => void
}

export function ModuleRow({ module, tone, isDone, onOpen }: ModuleRowProps) {
  const half = Math.ceil(module.topics.length / 2)
  const doneCount = module.topics.filter((t) => isDone(t.id)).length
  const nextTopic = module.topics.find((t) => !isDone(t.id)) ?? module.topics[0]

  const column = (topics: Topic[]) => (
    <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
      {topics.map((t) => (
        <li key={t.id}>
          <TopicCard topic={t} done={isDone(t.id)} onOpen={onOpen} />
        </li>
      ))}
    </ul>
  )

  return (
    <section
      aria-label={module.title}
      className="relative grid grid-cols-1 gap-2.5 lg:grid-cols-[minmax(0,1fr)_64px_220px_64px_minmax(0,1fr)] lg:items-center lg:gap-0"
    >
      {column(module.topics.slice(0, half))}
      <Connector side="left" />
      <ModuleHub
        module={module}
        tone={tone}
        doneCount={doneCount}
        onContinue={() => nextTopic && onOpen(nextTopic.id)}
      />
      <Connector side="right" />
      {column(module.topics.slice(half))}
    </section>
  )
}
