---
name: roadmap-development
description: Como implementar e alterar o roadmap English for Developers — arquitetura, componentes, tipagem, conteúdo de módulos, persistência de progresso, acessibilidade e testes. Use ao criar ou mudar componentes, hooks, serviços ou arquivos de conteúdo neste projeto.
---

# Desenvolvimento do roadmap

Regras permanentes do projeto estão no `CLAUDE.md`; aqui fica o *como*.

## Fluxo de dados

```
data/english (estático) ──► pages/EnglishRoadmapPage ──► components
                                  │
hooks/useProgress ◄── services/progressStorage (localStorage)
hooks/useStudyNavigation (tópico aberto, anterior/próximo)
```

- A página só chama hooks e passa props. Sem regra de negócio no JSX.
- Componentes recebem dados prontos e callbacks; não leem `localStorage` nem importam `data/` diretamente (exceto a página).
- Estado: `useState`/`useReducer` locais. Não adicione store global sem segunda página que precise dela.

## Componentes

- Um componente por arquivo, nome em PascalCase igual ao arquivo, export nomeado.
- Pasta pela área: `layout/` (estrutura da página), `roadmap/` (mapa de módulos), `study/` (janela de estudo), `ui/` (primitivos usados em 2+ áreas).
- Props tipadas com `interface XProps`; sem `any`; sem `React.FC`.
- Passou de ~150 linhas ou acumulou duas responsabilidades: divida.
- Estilo com classes Tailwind; cores e fontes vêm dos tokens em `src/index.css` (`@theme`). Não use hex solto nos componentes.
- Ícones: `lucide-react`, com `aria-hidden` quando decorativos.

## Tipagem

- Tipos de domínio em `src/types/`; reutilize, não redeclare.
- `Exercise` é união discriminada por `kind` (`'choice' | 'writing'`); trate com `switch` exaustivo.
- IDs são strings estáveis (`m1t1`, `p1`). Nunca mude um ID existente: o progresso salvo depende dele.

## Conteúdo

- Cada módulo é `src/data/english/modules/NN-nome.ts`, exportando um `Module`.
- Novo módulo: crie o arquivo e adicione-o à lista em `src/data/english/index.ts`. Nenhum componente muda.
- Novo tópico: acrescente ao array `topics` do módulo, com ID novo e único.
- `pronunciation` é opcional; omita quando não for útil.
- Só use texto fornecido pelo usuário (ver `CLAUDE.md`).

## Persistência

- Somente `services/progressStorage.ts` toca `localStorage`. Toda leitura/escrita em `try/catch`; falha = app funciona sem salvar.
- Chave por trilha e versionada: `roadmap:<trilha>:v<n>`. Mudou o formato salvo: suba a versão.
- Guardar só o necessário: tópicos concluídos e itens de checklist. Respostas de exercício são efêmeras.

## Acessibilidade

- Elementos clicáveis são `<button>` ou `<a href>`; nunca `onClick` em `div`.
- Janela de estudo: `role="dialog"`, `aria-modal`, `aria-labelledby`; foco vai para ela ao abrir, fica preso dentro, `Esc` fecha e o foco volta ao card de origem; rolagem do body travada.
- Alvos de toque ≥ 44px; foco visível (`focus-visible:outline`).
- Contraste mínimo 4.5:1 para texto; estados certo/errado diferem em cor **e** texto.
- Ícone sem texto precisa de `aria-label`.
- Layout funciona em 375px: colunas empilham, conectores somem.

## Testes

- Vitest + Testing Library, arquivo `*.test.ts(x)` ao lado do testado.
- O Vitest roda sem globais: importe `describe/it/expect` de `vitest` e chame `cleanup()` no `afterEach` de testes que renderizam componentes.
- Obrigatórios ao mexer em cada área:
  - `data/`: integridade (`data/english/index.test.ts`) — contagens, IDs únicos, `answer` dentro de `options`.
  - `services/`: comportamento com armazenamento indisponível.
  - `hooks/`: com `renderHook`.
  - `study/`: fluxo do usuário via `userEvent` e queries por papel (`getByRole`).
- Não teste detalhes de implementação (classes CSS, estado interno).
