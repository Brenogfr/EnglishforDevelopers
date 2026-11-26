# English for Developers — diagnóstico e proposta

> Status: **aprovada e implementada** (26/11/2026). Documento mantido como registro da decisão.
> Protótipo de referência: `prototipo/Main.dc.html` (fonte do canvas) e o canvas publicado.

## 1. Diagnóstico

| Local | Situação |
|---|---|
| `Desktop\Map\Aula de Inglês` | Pasta escolhida para o projeto. Contém só `prototipo/` e este arquivo. |
| `Desktop\RoadMap\Road` | Vazia; não será usada. |
| Roadmap Back-end | Não há código dele no computador. |
| `Desktop\look\lookdev` (Look Dev) | Projeto separado (Vite + React 19 + Tailwind 4). Não será tocado nem copiado. |
| Ambiente | Node 24.18, npm 11.16, git 2.54. |

Consequências:

- Progresso independente = chave própria por trilha (`roadmap:english:v1`); o inglês não consulta nem bloqueia outra trilha.
- Conteúdo das aulas vem **apenas** do protótipo: 8 módulos, 48 tópicos, 4 projetos práticos.

## 2. Plano de implementação

1. Base: Vite + React + TypeScript strict + Tailwind 4 + Lucide; `CLAUDE.md` e Skill.
2. Tipos e dados: tipos de domínio e 8 arquivos de módulo com o conteúdo do protótipo.
3. Persistência: `progressStorage` + `useProgress`.
4. Roadmap: cabeçalho, visão geral, módulos com conectores, cards de projeto.
5. Janela de estudo: explicação, exemplos com áudio, exercícios, checklist, navegação.
6. Acessibilidade e mobile: foco preso no modal, Esc, teclado, 375px.
7. Testes e validação visual (desktop e mobile).
8. Relatório final.

## 3. Arquitetura

```
Aula de Inglês/
├── CLAUDE.md                                    regras permanentes
├── .claude/skills/roadmap-development/SKILL.md  como construir
├── prototipo/                                   referência (não faz parte do build)
├── index.html
└── src/
    ├── main.tsx
    ├── App.tsx                     só monta a página
    ├── index.css                   Tailwind + tokens (@theme)
    ├── types/
    │   ├── content.ts              Module, Topic, Example, Exercise, Level
    │   └── progress.ts             TrackProgress
    ├── data/english/
    │   ├── index.ts                ordem dos módulos + lista linear
    │   ├── levels.ts               4 níveis
    │   └── modules/
    │       ├── 01-vocabulary.ts    6 tópicos + projeto 1
    │       ├── 02-grammar.ts
    │       └── … 08-interviews.ts
    ├── services/
    │   ├── progressStorage.ts      localStorage com try/catch e versão da chave
    │   └── speech.ts               speechSynthesis (en-US)
    ├── hooks/
    │   ├── useProgress.ts          concluídos e checklist de uma trilha
    │   └── useStudyNavigation.ts   tópico aberto, anterior/próximo, continuar
    ├── components/
    │   ├── layout/   PageHeader, ProgressOverview
    │   ├── roadmap/  ModuleRow, ModuleHub, TopicCard, Connector, LevelDivider, ProjectCard
    │   ├── study/    StudyModal, ExampleList, ExerciseCard, ChoiceExercise,
    │   │             WritingExercise, LearningChecklist, StudyFooter
    │   └── ui/       só o que for reaproveitado de fato
    └── pages/
        └── EnglishRoadmapPage.tsx
```

Decisões:

- Dados sem JSX: adicionar tópico = editar só o arquivo do módulo.
- Um arquivo por módulo (~150 linhas cada).
- Exercícios como união discriminada: `choice` (`options`, `answer`) e `writing` (`modelAnswer`).
- Estado local com hooks; sem Zustand/Redux. Sem roteador até existir uma segunda rota.
- Fontes Manrope e JetBrains Mono via Google Fonts no `index.html`.
- Dependências: produção `react`, `react-dom`, `lucide-react`; dev `vite`, `@vitejs/plugin-react`, `typescript`, `tailwindcss`, `@tailwindcss/vite`, `vitest`, `@testing-library/react`, `@testing-library/user-event`, `jsdom`.
- Desempenho: `StudyModal` com `React.lazy`; `memo` nos cards se medir diferença.
- `CLAUDE.md` = o que vale sempre; Skill = como construir. Sem repetição.

Testes: integridade dos dados (contagens, IDs únicos, respostas válidas), `progressStorage` com armazenamento bloqueado, `useProgress`, fluxo do modal (abrir, responder, revelar, concluir, Esc).
