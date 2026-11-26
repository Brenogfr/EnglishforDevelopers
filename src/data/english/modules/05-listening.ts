import type { Module } from '../../../types/content'

export const listening: Module = {
  id: 'm5',
  number: '05',
  shortTitle: 'Listening',
  title: 'Listening: compreensão auditiva',
  levelId: 'intermediate',
  topics: [
    {
      id: 'm5t1',
      title: 'Sons difíceis',
      explanation: "Três sons travam brasileiros: o 'th' (língua entre os dentes), o -ed final (/t/, /d/ ou /id/) e o 'h' aspirado (nunca som de 'r'). Use o botão de ouvir e repita cada exemplo.",
      examples: [
        {
          en: 'think / this',
          pt: 'pensar / isto',
          pronunciation: 'THINK (língua entre os dentes) / DHIS',
        },
        {
          en: 'worked, fixed, updated',
          pt: 'trabalhou, corrigiu, atualizou',
          pronunciation: 'UÂRKT, FÍKST, âp-DÊI-tid',
        },
        {
          en: 'hash, host, header',
          pt: 'hash, host, cabeçalho',
          pronunciation: 'HÉSH, HÔUST, HÉ-dâr (h soprado)',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: "Como soa o -ed de 'deployed'?",
          options: ['/d/: di-PLÓID', '/id/: di-PLÓI-id', '/t/: di-PLÓIT'],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: 'Ouça os três exemplos e escreva as palavras que você ouviu, sem olhar.',
          modelAnswer: 'think, this, worked, fixed, updated, hash, host, header',
        },
      ],
      checklist: ["Produzo o som de 'th'", 'Sei os 3 sons do -ed', "Não troco 'h' por 'r'"],
    },
    {
      id: 'm5t2',
      title: 'Fala conectada',
      explanation: 'Na fala rápida, palavras se juntam: going to → gonna, want to → wanna, got to → gotta, let me → lemme. Você não precisa falar assim, mas precisa reconhecer.',
      examples: [
        {
          en: "I'm gonna push it now.",
          pt: 'Vou dar push agora.',
          pronunciation: 'aim GÂ-na PÚSH it',
        },
        {
          en: 'Do you wanna pair on this?',
          pt: 'Quer parear nisso?',
          pronunciation: 'du iu UÓ-na PÉR',
        },
        {
          en: 'Lemme check.',
          pt: 'Deixa eu ver.',
          pronunciation: 'LÉ-mi TCHÉK',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: "'Gotta' é a forma falada de:",
          options: ['got to / have to: ter que', 'going to', 'want to'],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: "Escreva a forma completa de 'I gotta fix this before the demo.'",
          modelAnswer: 'I have got to fix this before the demo.',
        },
      ],
      checklist: [
        'Reconheço gonna, wanna, gotta',
        'Entendo frases faladas rápido',
        'Escrevo a forma completa',
      ],
    },
    {
      id: 'm5t3',
      title: 'Daily stand-ups',
      explanation: 'Stand-ups seguem o roteiro ontem / hoje / bloqueios. Ao ouvir, foque nas palavras-chave: yesterday, today, blocked, waiting on, offline.',
      examples: [
        {
          en: "Yesterday I worked on the login. Today I'll write tests. No blockers.",
          pt: 'Ontem trabalhei no login. Hoje vou escrever testes. Sem bloqueios.',
        },
        {
          en: "I'm blocked by the API team.",
          pt: 'Estou bloqueado pelo time da API.',
          pronunciation: 'BLÓKT',
        },
        {
          en: "Let's take this offline.",
          pt: 'Vamos discutir isso fora da reunião.',
          pronunciation: 'óf-LÁIN',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: "'Take it offline' significa:",
          options: [
            'Falar disso depois, fora da reunião',
            'Desligar o servidor',
            'Desconectar da internet',
          ],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: 'Ouça o primeiro exemplo e anote: ontem, hoje e bloqueios.',
          modelAnswer: 'Yesterday: login\nToday: tests\nBlockers: none',
        },
      ],
      checklist: [
        'Sigo um stand-up em inglês',
        "Reconheço 'blocked' e 'waiting on'",
        'Anoto o essencial ao ouvir',
      ],
    },
    {
      id: 'm5t4',
      title: 'Vídeos e tutoriais',
      explanation: 'Tutoriais usam expressões repetidas: go ahead, under the hood, hit enter, spin up. Assista com legenda em inglês (não em português) e pause para repetir frases.',
      examples: [
        {
          en: "Let's go ahead and create a new file.",
          pt: 'Vamos em frente e criar um novo arquivo.',
          pronunciation: 'gôu a-RÉD',
        },
        {
          en: 'Under the hood, it uses a hash map.',
          pt: 'Por baixo dos panos, usa um hash map.',
          pronunciation: 'ÂN-dâr dã HÚD',
        },
        {
          en: 'Spin up a new container.',
          pt: 'Suba um novo container.',
          pronunciation: 'SPÍN ÂP',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: "'Under the hood' significa:",
          options: ['Internamente / por baixo dos panos', 'Debaixo da mesa', 'Em segredo'],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: 'Assista a um vídeo técnico curto com legenda em inglês e escreva 3 frases que entendeu.',
          modelAnswer: 'Exemplo:\nHe explained how Docker images are built in layers.\nEach instruction creates a new layer.\nCached layers make builds faster.',
        },
      ],
      checklist: [
        'Assisti a um vídeo com legenda em inglês',
        'Reconheço expressões de tutorial',
        'Repeti frases em voz alta',
      ],
    },
    {
      id: 'm5t5',
      title: 'Siglas faladas',
      explanation: "Siglas são lidas letra por letra (API, URL, CLI) ou como palavra (JSON, SQL como 'sequel', GUI como 'gooey'). Números decimais usam 'point'.",
      examples: [
        {
          en: 'Call the API and check the URL.',
          pt: 'Chame a API e confira a URL.',
          pronunciation: 'ei-pi-ÁI, iu-ar-ÉL',
        },
        {
          en: 'Store it as JSON in SQL.',
          pt: 'Armazene como JSON no SQL.',
          pronunciation: 'DJÊI-sân, SÍ-kuel',
        },
        {
          en: 'It takes half a second.',
          pt: 'Leva meio segundo.',
          pronunciation: 'HÉF a SÉ-kând',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: "Como se fala '0.5 seconds'?",
          options: ['half a second / point five seconds', 'zero comma five', 'zero five seconds'],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: 'Escreva como se pronunciam: API, URL e CLI.',
          modelAnswer: 'ay-pee-eye, you-ar-el, see-el-eye',
        },
      ],
      checklist: [
        'Leio siglas em voz alta',
        "Reconheço 'sequel' e 'jay-son'",
        'Falo números decimais',
      ],
    },
    {
      id: 'm5t6',
      title: 'Sotaques e velocidade',
      explanation: 'Você vai trabalhar com sotaques diferentes (indiano, britânico, europeu). Não entender é normal: o profissional é pedir para repetir, desacelerar ou confirmar o que entendeu.',
      examples: [
        {
          en: "Sorry, I didn't catch that.",
          pt: 'Desculpe, não entendi.',
          pronunciation: 'KÉTCH',
        },
        {
          en: 'Could you slow down a bit?',
          pt: 'Você pode falar um pouco mais devagar?',
          pronunciation: 'slôu DÁUN',
        },
        {
          en: 'Could you say that again, please?',
          pt: 'Pode repetir, por favor?',
          pronunciation: 'a-GUÉN',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: 'Educado para pedir repetição:',
          options: ['Sorry, could you repeat that?', 'What?', 'Repeat.'],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: "Escreva como confirmar o que entendeu: 'Então você quer que eu atualize o endpoint, certo?'",
          modelAnswer: 'So, you want me to update the endpoint, right?',
        },
      ],
      checklist: [
        'Peço repetição sem constrangimento',
        'Confirmo o que entendi',
        'Ouvi pelo menos 2 sotaques diferentes',
      ],
    },
  ],
}
