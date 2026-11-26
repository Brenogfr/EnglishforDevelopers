export type LevelId = 'beginner' | 'basic' | 'intermediate' | 'advanced'

export interface Level {
  id: LevelId
  name: string
  label: string
  description: string
}

export interface Example {
  en: string
  pt: string
  pronunciation?: string
}

export interface ChoiceExercise {
  kind: 'choice'
  prompt: string
  options: string[]
  answer: number
}

export interface WritingExercise {
  kind: 'writing'
  prompt: string
  modelAnswer: string
}

export type Exercise = ChoiceExercise | WritingExercise

export interface Topic {
  id: string
  title: string
  explanation: string
  examples: Example[]
  exercises: Exercise[]
  checklist: string[]
}

export interface Module {
  id: string
  number: string
  shortTitle: string
  title: string
  levelId: LevelId
  topics: Topic[]
  project?: Topic
}

/** Tópico ou projeto na ordem linear de estudo, com o módulo de origem. */
export interface StudyItem {
  topic: Topic
  module: Module
  isProject: boolean
}
