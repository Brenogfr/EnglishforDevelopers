import type { TrackId, TrackProgress } from '../types/progress'

const STORAGE_VERSION = 1

export function storageKey(track: TrackId): string {
  return `roadmap:${track}:v${STORAGE_VERSION}`
}

export function emptyProgress(): TrackProgress {
  return { done: {}, checks: {} }
}

function toFlagRecord(value: unknown): Record<string, true> {
  if (!value || typeof value !== 'object') return {}
  const out: Record<string, true> = {}
  for (const [key, flag] of Object.entries(value)) if (flag === true) out[key] = true
  return out
}

/** Lê o progresso da trilha. Armazenamento indisponível ou corrompido = progresso vazio. */
export function loadProgress(track: TrackId): TrackProgress {
  try {
    const raw = window.localStorage.getItem(storageKey(track))
    if (!raw) return emptyProgress()
    const parsed: unknown = JSON.parse(raw)
    if (!parsed || typeof parsed !== 'object') return emptyProgress()
    const { done, checks } = parsed as Record<string, unknown>
    return { done: toFlagRecord(done), checks: toFlagRecord(checks) }
  } catch {
    return emptyProgress()
  }
}

/** Salva o progresso da trilha. Falhas são ignoradas: o app segue funcionando sem salvar. */
export function saveProgress(track: TrackId, progress: TrackProgress): void {
  try {
    window.localStorage.setItem(storageKey(track), JSON.stringify(progress))
  } catch {
    // modo privado, cota cheia ou armazenamento bloqueado
  }
}
