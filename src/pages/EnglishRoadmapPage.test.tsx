import { cleanup, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it } from 'vitest'
import { loadProgress } from '../services/progressStorage'
import { EnglishRoadmapPage } from './EnglishRoadmapPage'

afterEach(() => {
  cleanup()
  window.localStorage.clear()
})

async function openFirstTopic() {
  const user = userEvent.setup()
  render(<EnglishRoadmapPage />)
  const card = screen.getByRole('button', { name: 'Saudações no trabalho' })
  await user.click(card)
  const dialog = await screen.findByRole('dialog', { name: 'Saudações no trabalho' })
  return { user, card, dialog }
}

describe('EnglishRoadmapPage', () => {
  it('mostra os 8 módulos e os 4 projetos', () => {
    render(<EnglishRoadmapPage />)
    expect(screen.getAllByRole('button', { name: /^Continuar módulo/ })).toHaveLength(8)
    expect(screen.getAllByText(/PROJETO PRÁTICO/)).toHaveLength(4)
    expect(screen.getByText('0', { selector: 'strong' })).toBeTruthy()
  })

  it('abre a janela de estudo com todas as seções', async () => {
    const { dialog } = await openFirstTopic()
    const d = within(dialog)
    for (const title of ['Explicação', 'Exemplos · tradução · pronúncia', 'Exercícios práticos', 'Checklist de aprendizagem']) {
      expect(d.getByRole('heading', { name: title })).toBeTruthy()
    }
    expect(d.getByText('Good morning, team!')).toBeTruthy()
    expect(d.getByText('Bom dia, time!')).toBeTruthy()
  })

  it('corrige exercícios de escolha e revela a resposta modelo', async () => {
    const { user, dialog } = await openFirstTopic()
    const d = within(dialog)

    await user.click(d.getByRole('button', { name: /I am 25 years old/ }))
    expect(d.getByText(/A resposta certa está destacada/)).toBeTruthy()
    await user.click(d.getByRole('button', { name: /Pretty good, thanks/ }))
    expect(d.getByText('Correto!')).toBeTruthy()

    const reveal = d.getByRole('button', { name: 'Ver resposta modelo' })
    expect(d.getByText(/I'm the new backend developer/).closest('[hidden]')).not.toBeNull()
    await user.click(reveal)
    expect(d.getByText(/I'm the new backend developer/).closest('[hidden]')).toBeNull()
  })

  it('salva checklist e conclusão no progresso do inglês', async () => {
    const { user, dialog } = await openFirstTopic()
    const d = within(dialog)

    await user.click(d.getByRole('checkbox', { name: 'Sei cumprimentar em mensagens e calls' }))
    await user.click(d.getByRole('button', { name: 'Marcar como concluído' }))

    expect(loadProgress('english')).toEqual({ done: { m1t1: true }, checks: { 'm1t1-c0': true } })
    expect(d.getByRole('button', { name: 'Concluído · desmarcar' })).toBeTruthy()
  })

  it('navega para o próximo tópico', async () => {
    const { user, dialog } = await openFirstTopic()
    await user.click(within(dialog).getByRole('button', { name: /Próximo/ }))
    expect(screen.getByRole('dialog', { name: 'Números e datas' })).toBeTruthy()
    expect(within(screen.getByRole('dialog')).queryByRole('button', { name: /Anterior/ })).toBeTruthy()
  })

  it('não fecha com Esc enquanto há resposta escrita no campo', async () => {
    const { user, dialog } = await openFirstTopic()
    await user.type(within(dialog).getByLabelText('Sua resposta'), 'Hi everyone')
    await user.keyboard('{Escape}')
    expect(screen.getByRole('dialog')).toBeTruthy()
  })

  it('fecha com Esc e devolve o foco ao card', async () => {
    const { user, card } = await openFirstTopic()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog')).toBeNull()
    expect(document.activeElement).toBe(card)
  })
})
