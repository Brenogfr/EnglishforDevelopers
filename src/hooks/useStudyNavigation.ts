import { useCallback, useMemo, useState } from 'react'
import type { StudyItem } from '../types/content'

/** Qual item está aberto na janela de estudo e para onde ir a partir dele. */
export function useStudyNavigation(items: StudyItem[], isDone: (id: string) => boolean) {
  const [openId, setOpenId] = useState<string | null>(null)

  const index = openId ? items.findIndex((i) => i.topic.id === openId) : -1
  const current = index >= 0 ? (items[index] ?? null) : null
  const prevId = index > 0 ? (items[index - 1]?.topic.id ?? null) : null
  const nextId = index >= 0 ? (items[index + 1]?.topic.id ?? null) : null

  const resumeId = useMemo(
    () => (items.find((i) => !isDone(i.topic.id)) ?? items[0])?.topic.id ?? null,
    [items, isDone],
  )

  const open = useCallback((id: string) => setOpenId(id), [])
  const close = useCallback(() => setOpenId(null), [])

  return { current, position: index + 1, total: items.length, prevId, nextId, resumeId, open, close }
}
