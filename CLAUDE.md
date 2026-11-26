# English for Developers

Roadmap de estudo de inglês para desenvolvedores: 8 módulos, 48 tópicos, 4 projetos práticos, cada um com uma janela de estudo.

## Stack e comandos

Vite · React 19 · TypeScript (strict) · Tailwind CSS 4 · Lucide React · Vitest + Testing Library.

```
npm run dev        # servidor local
npm run typecheck  # tsc --noEmit
npm test           # vitest run
npm run build      # typecheck + build de produção
```

Antes de dar uma tarefa como pronta: `npm run typecheck` e `npm test` passando.

## Regras permanentes

- **Trilha independente.** O progresso do inglês é salvo na própria chave (`roadmap:english:v1`) e nunca bloqueia nem consulta outra trilha (ex.: Back-end).
- **Conteúdo não se inventa.** Textos de aulas, exemplos, exercícios e checklists vêm só do que o usuário forneceu. A referência original está em `prototipo/Main.dc.html`. Faltou conteúdo: pergunte.
- **Sem dependências novas** sem necessidade clara e aprovação do usuário.
- **Sem abstrações antecipadas.** Extraia componente ou helper compartilhado só quando houver um segundo uso real.
- **Nada de arquivo gigante.** Conteúdo fica um arquivo por módulo; componentes têm uma responsabilidade.
- **Projetos separados.** Este projeto não importa, copia nem altera nada do Look Dev (`Desktop\look\lookdev`).
- `prototipo/` é só referência e não entra no build.
- Interface em português; exemplos de estudo em inglês.

## Mapa

```
src/types/       tipos de domínio (content.ts, progress.ts)
src/data/english/ níveis e módulos (um arquivo por módulo)
src/services/    persistência e APIs do navegador
src/hooks/       estado e regras de navegação
src/components/  layout/, roadmap/, study/, ui/
src/pages/       páginas: apenas compõem componentes
```

Como construir dentro dessa estrutura (padrões, tipagem, conteúdo novo, acessibilidade, testes): skill `roadmap-development` em `.claude/skills/roadmap-development/SKILL.md`.
