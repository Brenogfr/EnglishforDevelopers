# English for Developers

Roadmap de estudo de inglês para desenvolvedores, do vocabulário do dia a dia à entrevista técnica.

- **8 módulos** em 4 níveis (Iniciante → Avançado), **48 tópicos** e **4 projetos práticos**
- Cada tópico abre uma janela de estudo com explicação em português, exemplos em inglês com tradução e pronúncia (com áudio do navegador), exercícios de escolha e de escrita, e checklist
- Progresso salvo no navegador, independente de outras trilhas (ex.: Back-end)
- Funciona no celular e por teclado

## Como rodar

Requer Node 20.19+ ou 22.12+.

```bash
npm install
npm run dev        # http://localhost:5173
```

| Comando | O que faz |
|---|---|
| `npm run dev` | servidor local com recarga automática |
| `npm test` | roda os testes (Vitest + Testing Library) |
| `npm run typecheck` | checa os tipos TypeScript |
| `npm run build` | typecheck + build de produção em `dist/` |
| `npm run preview` | serve o build de produção |

## Stack

Vite · React 19 · TypeScript (strict) · Tailwind CSS 4 · Lucide React · Vitest

## Estrutura

```
src/
├── data/english/   conteúdo: níveis e um arquivo por módulo
├── types/          tipos de domínio
├── services/       persistência do progresso e voz
├── hooks/          progresso, navegação e comportamento do modal
├── components/     layout/, roadmap/, study/, ui/
└── pages/          página do roadmap
prototipo/          protótipo original de referência (fora do build)
```

## Editando o conteúdo

- **Novo tópico:** acrescente ao array `topics` do módulo em `src/data/english/modules/`, com um `id` novo e único.
- **Novo módulo:** crie o arquivo em `modules/` e adicione-o à lista em `src/data/english/index.ts`.
- Não altere `id`s existentes: o progresso salvo depende deles.
- Rode `npm test`: os testes de integridade conferem contagens, IDs únicos e respostas válidas.

O progresso fica no `localStorage` do navegador, na chave `roadmap:english:v1`.

## Desenvolvimento com Claude Code

As regras permanentes do projeto estão em [`CLAUDE.md`](CLAUDE.md), e os padrões de arquitetura, acessibilidade e testes na skill [`roadmap-development`](.claude/skills/roadmap-development/SKILL.md).
