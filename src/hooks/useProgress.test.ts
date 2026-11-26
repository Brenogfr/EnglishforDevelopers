import { act, renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { loadProgress } from '../services/progressStorage'
import { checklistKey, useProgress } from './useProgress'

afterEach(() => window.localStorage.clear())

describe('useProgress', () => {
  it('marca e desmarca tópicos e salva', () => {
    const { result } = renderHook(() => useProgress('english'))
    expect(result.current.isDone('m1t1')).toBe(false)

    act(() => result.current.toggleDone('m1t1'))
    expect(result.current.isDone('m1t1')).toBe(true)
    expect(loadProgress('english').done).toEqual({ m1t1: true })

    act(() => result.current.toggleDone('m1t1'))
    expect(result.current.isDone('m1t1')).toBe(false)
  })

  it('controla itens do checklist', () => {
    const { result } = renderHook(() => useProgress('english'))
    const key = checklistKey('m2t3', 1)
    act(() => result.current.toggleCheck(key))
    expect(result.current.isChecked(key)).toBe(true)
    expect(loadProgress('english').checks).toEqual({ 'm2t3-c1': true })
  })

  it('recupera o progresso salvo ao montar', () => {
    const first = renderHook(() => useProgress('english'))
    act(() => first.result.current.toggleDone('p1'))
    first.unmount()

    const { result } = renderHook(() => useProgress('english'))
    expect(result.current.isDone('p1')).toBe(true)
  })
})
