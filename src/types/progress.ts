export type TrackId = 'english'

export interface TrackProgress {
  /** IDs de tópicos/projetos concluídos. */
  done: Record<string, true>
  /** Itens de checklist marcados, chave `${topicId}-c${index}`. */
  checks: Record<string, true>
}
