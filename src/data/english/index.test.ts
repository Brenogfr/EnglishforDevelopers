import { describe, expect, it } from 'vitest'
import { englishModules, englishStudyItems, levels } from './index'

describe('conteúdo English for Developers', () => {
  it('tem 8 módulos, 48 tópicos e 4 projetos', () => {
    expect(englishModules).toHaveLength(8)
    expect(englishModules.flatMap((m) => m.topics)).toHaveLength(48)
    expect(englishModules.filter((m) => m.project)).toHaveLength(4)
    expect(englishStudyItems).toHaveLength(52)
  })

  it('tem 6 tópicos por módulo', () => {
    for (const m of englishModules) expect(m.topics).toHaveLength(6)
  })

  it('usa IDs únicos', () => {
    const ids = englishStudyItems.map((i) => i.topic.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('aponta para níveis existentes', () => {
    for (const m of englishModules) expect(levels[m.levelId]).toBeDefined()
  })

  it('tem todas as partes da janela de estudo', () => {
    for (const { topic } of englishStudyItems) {
      expect(topic.explanation.length).toBeGreaterThan(0)
      expect(topic.examples.length).toBeGreaterThan(0)
      expect(topic.exercises.length).toBeGreaterThan(0)
      expect(topic.checklist.length).toBeGreaterThan(0)
    }
  })

  it('não repete exemplos nem opções dentro de um tópico (são chaves de lista)', () => {
    for (const { topic } of englishStudyItems) {
      const examples = topic.examples.map((e) => e.en)
      expect(new Set(examples).size).toBe(examples.length)
      for (const ex of topic.exercises) {
        if (ex.kind === 'choice') expect(new Set(ex.options).size).toBe(ex.options.length)
      }
    }
  })

  it('tem a resposta de cada exercício de escolha entre as opções', () => {
    for (const { topic } of englishStudyItems) {
      for (const ex of topic.exercises) {
        if (ex.kind === 'choice') {
          expect(ex.answer).toBeGreaterThanOrEqual(0)
          expect(ex.answer).toBeLessThan(ex.options.length)
        } else {
          expect(ex.modelAnswer.length).toBeGreaterThan(0)
        }
      }
    }
  })
})
