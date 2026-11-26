import { useCallback, useEffect, useState } from 'react'
import { loadProgress, saveProgress } from '../services/progressStorage'
import type { TrackId, TrackProgress } from '../types/progress'

function toggleFlag(record: Record<string, true>, key: string): Record<string, true> {
  const next = { ...record }
  if (next[key]) delete next[key]
  else next[key] = true
  return next
}

export function checklistKey(topicId: string, index: number): string {
  return `${topicId}-c${index}`
}

/** Progresso de uma trilha, salvo automaticamente a cada mudança. */
export function useProgress(track: TrackId) {
  const [progress, setProgress] = useState<TrackProgress>(() => loadProgress(track))

  useEffect(() => {
    saveProgress(track, progress)
  }, [track, progress])

  const isDone = useCallback((id: string) => Boolean(progress.done[id]), [progress.done])
  const isChecked = useCallback((key: string) => Boolean(progress.checks[key]), [progress.checks])

  const toggleDone = useCallback((id: string) => {
    setProgress((p) => ({ ...p, done: toggleFlag(p.done, id) }))
  }, [])

  const toggleCheck = useCallback((key: string) => {
    setProgress((p) => ({ ...p, checks: toggleFlag(p.checks, key) }))
  }, [])

  return { isDone, isChecked, toggleDone, toggleCheck }
}
