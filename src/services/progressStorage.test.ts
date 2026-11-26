import { afterEach, describe, expect, it, vi } from 'vitest'
import { emptyProgress, loadProgress, saveProgress, storageKey } from './progressStorage'

afterEach(() => {
  vi.restoreAllMocks()
  window.localStorage.clear()
})

describe('progressStorage', () => {
  it('usa uma chave própria e versionada por trilha', () => {
    expect(storageKey('english')).toBe('roadmap:english:v1')
  })

  it('salva e recupera o progresso', () => {
    const progress = { done: { m1t1: true as const }, checks: { 'm1t1-c0': true as const } }
    saveProgress('english', progress)
    expect(loadProgress('english')).toEqual(progress)
  })

  it('retorna progresso vazio quando não há nada salvo', () => {
    expect(loadProgress('english')).toEqual(emptyProgress())
  })

  it('ignora dados corrompidos', () => {
    window.localStorage.setItem(storageKey('english'), '{not json')
    expect(loadProgress('english')).toEqual(emptyProgress())
    window.localStorage.setItem(storageKey('english'), JSON.stringify({ done: { a: 'yes', b: true } }))
    expect(loadProgress('english')).toEqual({ done: { b: true }, checks: {} })
  })

  it('não quebra quando o armazenamento está bloqueado', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('blocked')
    })
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('blocked')
    })
    expect(loadProgress('english')).toEqual(emptyProgress())
    expect(() => saveProgress('english', emptyProgress())).not.toThrow()
  })
})
