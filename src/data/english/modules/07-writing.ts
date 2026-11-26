import type { Module } from '../../../types/content'

export const writing: Module = {
  id: 'm7',
  number: '07',
  shortTitle: 'Writing',
  title: 'Writing: escrita',
  levelId: 'advanced',
  topics: [
    {
      id: 'm7t1',
      title: 'Mensagens de commit',
      explanation: "Commits em inglês usam o imperativo, como uma ordem: 'Add', 'Fix', 'Remove', não 'Added' ou 'Fixing'. Assunto curto (até ~50 caracteres), sem ponto final.",
      examples: [
        {
          en: 'Add pagination to orders endpoint',
          pt: 'Adiciona paginação ao endpoint de pedidos',
        },
        {
          en: 'Fix null check in UserService',
          pt: 'Corrige verificação de nulo no UserService',
        },
        {
          en: 'Refactor payment validation',
          pt: 'Refatora a validação de pagamento',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: 'Melhor mensagem de commit:',
          options: ['Fix timeout in payment client', 'fixed stuff', 'Fixing some things today'],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: "Escreva um commit para 'remove código não usado do módulo de relatórios'.",
          modelAnswer: 'Remove unused code from reports module',
        },
      ],
      checklist: [
        'Escrevo commits no imperativo',
        'Mantenho o assunto curto',
        'Reescrevi 5 commits antigos',
      ],
    },
    {
      id: 'm7t2',
      title: 'Descrição de Pull Request',
      explanation: 'Um bom PR responde: o que muda (What), por que (Why) e como testar (How to test). Frases curtas e listas funcionam melhor que parágrafos.',
      examples: [
        {
          en: 'This PR adds rate limiting to the public API.',
          pt: 'Este PR adiciona limitação de taxa à API pública.',
        },
        {
          en: 'Closes #42.',
          pt: 'Fecha a issue 42.',
          pronunciation: 'KLÔU-ziz',
        },
        {
          en: 'To test, run the app and send 100 requests.',
          pt: 'Para testar, rode a aplicação e envie 100 requisições.',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: 'Qual seção explica a motivação da mudança?',
          options: ['Why', 'How to test', 'Screenshots'],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: 'Escreva o What e o Why de um PR que adiciona cache.',
          modelAnswer: '## What\nAdds a Redis cache to the product listing endpoint.\n\n## Why\nThe endpoint was slow under load and hitting the database on every request.',
        },
      ],
      checklist: [
        'Sei a estrutura What / Why / How',
        'Escrevi a descrição de um PR',
        "Uso 'Closes #' para ligar issues",
      ],
    },
    {
      id: 'm7t3',
      title: 'Slack e Teams',
      explanation: "Mensagens de chat são curtas e diretas. Comece pelo ponto principal, sem 'Hi' sozinho esperando resposta. Expressões úteis: quick question, heads up, FYI, ETA.",
      examples: [
        {
          en: 'Quick question: is staging down?',
          pt: 'Pergunta rápida: o staging caiu?',
        },
        {
          en: 'Heads up: staging will be down at 3 p.m.',
          pt: 'Aviso: staging ficará fora do ar às 15h.',
          pronunciation: 'HÉDZ âp',
        },
        {
          en: 'Thanks for the quick fix!',
          pt: 'Valeu pela correção rápida!',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: "'Heads up' é:",
          options: ['Um aviso antecipado', 'Cabeça erguida', 'Uma reclamação'],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: 'Avise o time que o deploy vai atrasar 30 minutos.',
          modelAnswer: "Heads up: today's deploy will be delayed by about 30 minutes. I'll post an update when it's done.",
        },
      ],
      checklist: [
        'Escrevo mensagens diretas',
        'Uso heads up, FYI, ETA',
        "Não mando só 'Hi' e espero",
      ],
    },
    {
      id: 'm7t4',
      title: 'E-mails profissionais',
      explanation: "E-mails têm abertura, pedido claro e fechamento. Expressões fixas resolvem 80% dos casos: 'I hope you're doing well', 'Please find attached', 'Looking forward to hearing from you'.",
      examples: [
        {
          en: "I hope you're doing well.",
          pt: 'Espero que você esteja bem.',
        },
        {
          en: 'Please find attached the report.',
          pt: 'Segue em anexo o relatório.',
          pronunciation: 'a-TÉTCHT',
        },
        {
          en: 'Looking forward to hearing from you.',
          pt: 'Aguardo seu retorno.',
          pronunciation: 'LÚ-kin FÓR-uârd',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: 'Fechamento adequado para e-mail profissional:',
          options: ['Best regards,', 'See ya', 'Bye bye'],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: 'Escreva um e-mail curto pedindo acesso ao repositório do projeto.',
          modelAnswer: "Hi [name],\n\nI hope you're doing well. Could you please give me access to the project repository? My GitHub username is [username].\n\nThanks in advance,\n[your name]",
        },
      ],
      checklist: [
        'Conheço aberturas e fechamentos',
        'Faço um pedido claro',
        'Escrevi um e-mail completo',
      ],
    },
    {
      id: 'm7t5',
      title: 'Documentação e README',
      explanation: "Documentação boa usa voz ativa, frases curtas e o imperativo para instruções ('Run', 'Set', 'Make sure'). Use 'Note:' para avisos.",
      examples: [
        {
          en: 'This service handles user authentication.',
          pt: 'Este serviço cuida da autenticação de usuários.',
        },
        {
          en: 'Make sure Docker is running before you start.',
          pt: 'Certifique-se de que o Docker está rodando antes de começar.',
        },
        {
          en: 'Note: this endpoint is rate-limited.',
          pt: 'Observação: este endpoint tem limite de taxa.',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: 'Instrução mais clara para documentação:',
          options: [
            'Run npm install.',
            'It would be nice if npm install could be run.',
            'Npm install is something to run maybe.',
          ],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: 'Escreva uma seção Usage curta para um projeto seu.',
          modelAnswer: '## Usage\n1. Copy .env.example to .env\n2. Run docker compose up\n3. Open http://localhost:8080',
        },
      ],
      checklist: [
        'Escrevo instruções no imperativo',
        "Uso 'Note:' e 'Make sure'",
        'Escrevi o README de um projeto',
      ],
    },
    {
      id: 'm7t6',
      title: 'Reportando bugs',
      explanation: 'Um bug report útil tem: título claro, passos para reproduzir, resultado esperado, resultado atual e ambiente. Seja específico: versões, navegador, dados de entrada.',
      examples: [
        {
          en: 'Steps to reproduce: 1. Log in 2. Open Settings 3. Click Save',
          pt: 'Passos para reproduzir: 1. Faça login 2. Abra Configurações 3. Clique em Salvar',
        },
        {
          en: 'Expected: settings are saved. Actual: error 500.',
          pt: 'Esperado: configurações salvas. Atual: erro 500.',
          pronunciation: 'ek-SPÉK-tid, ÉK-tchu-al',
        },
        {
          en: 'Environment: Chrome 120, Windows 11',
          pt: 'Ambiente: Chrome 120, Windows 11',
          pronunciation: 'en-VÁI-rân-mânt',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: 'O que NÃO é essencial em um bug report?',
          options: [
            'Sua opinião sobre quem causou o bug',
            'Passos para reproduzir',
            'Resultado esperado vs. atual',
          ],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: 'Escreva um bug report curto sobre um filtro de busca que ignora acentos.',
          modelAnswer: "Title: Search filter ignores accented characters\nSteps: 1. Search for 'José' 2. Check results\nExpected: users named José are listed\nActual: no results\nEnvironment: Chrome 120, production",
        },
      ],
      checklist: [
        'Sei a estrutura de um bug report',
        'Incluo ambiente e versões',
        'Escrevi um report completo',
      ],
    },
  ],
}
