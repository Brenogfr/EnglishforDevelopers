import type { Level, LevelId } from '../../types/content'

export const levels: Record<LevelId, Level> = {
  beginner: {
    id: 'beginner',
    name: 'Iniciante',
    label: 'NÍVEL 1 · INICIANTE',
    description: 'Vocabulário de sobrevivência e as estruturas que aparecem em toda frase.',
  },
  basic: {
    id: 'basic',
    name: 'Básico',
    label: 'NÍVEL 2 · BÁSICO',
    description: 'Ler documentação e falar a língua do código.',
  },
  intermediate: {
    id: 'intermediate',
    name: 'Intermediário',
    label: 'NÍVEL 3 · INTERMEDIÁRIO',
    description: 'Entender pessoas falando e começar a conversar.',
  },
  advanced: {
    id: 'advanced',
    name: 'Avançado',
    label: 'NÍVEL 4 · AVANÇADO',
    description: 'Escrever como profissional e passar em entrevistas.',
  },
}
