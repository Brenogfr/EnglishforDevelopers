import type { Module } from '../../../types/content'

export const speaking: Module = {
  id: 'm6',
  number: '06',
  shortTitle: 'Speaking',
  title: 'Speaking: conversação e pronúncia',
  levelId: 'intermediate',
  topics: [
    {
      id: 'm6t1',
      title: 'Pronúncia de termos',
      explanation: 'Termos técnicos muito falados errado: cache (késh), queue (kiú), width (uídth), sudo (sú-du), Linux (LÍ-nâks), suite (suít). Ouça, repita três vezes e grave-se.',
      examples: [
        {
          en: 'Clear the cache.',
          pt: 'Limpe o cache.',
          pronunciation: 'KLÍR dã KÉSH',
        },
        {
          en: 'The jobs are in the queue.',
          pt: 'Os jobs estão na fila.',
          pronunciation: 'KIÚ',
        },
        {
          en: 'Set the width to 100 percent.',
          pt: 'Defina a largura como 100%.',
          pronunciation: 'UÍDTH',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: "Como se pronuncia 'queue'?",
          options: ['kiú', 'kuê-uê', 'kuéu'],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: "Grave-se dizendo 'Clear the cache, then check the queue.' e anote o que soou diferente do áudio.",
          modelAnswer: 'Dica: compare com o botão de ouvir e repita até a sílaba forte coincidir.',
        },
      ],
      checklist: [
        'Pronuncio cache e queue',
        'Gravei minha voz e comparei',
        'Sei a sílaba forte de 10 termos',
      ],
    },
    {
      id: 'm6t2',
      title: 'Apresentação pessoal',
      explanation: "Tenha uma apresentação de 30 segundos pronta: quem você é, o que faz, há quanto tempo e o que está aprendendo. 'I've been ... for' expressa tempo até agora.",
      examples: [
        {
          en: "I'm a backend developer focused on Java and Spring.",
          pt: 'Sou desenvolvedor backend focado em Java e Spring.',
        },
        {
          en: "I've been coding for two years.",
          pt: 'Programo há dois anos.',
          pronunciation: 'aiv bin KÔU-din',
        },
        {
          en: "I'm currently learning cloud architecture.",
          pt: 'Atualmente estou aprendendo arquitetura em nuvem.',
          pronunciation: 'KÂ-rânt-li, ÁR-ki-tek-tchâr',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: "'I've been coding for 2 years' significa:",
          options: ['Programo há 2 anos', 'Programei 2 anos atrás', 'Vou programar por 2 anos'],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: 'Escreva sua apresentação em 3 frases e leia em voz alta.',
          modelAnswer: "Hi, I'm [name]. I'm a backend developer working with Java and Spring. I enjoy building APIs and I'm currently learning cloud.",
        },
      ],
      checklist: [
        'Tenho uma apresentação de 30s',
        "Uso 'I've been ... for'",
        'Falei em voz alta sem ler',
      ],
    },
    {
      id: 'm6t3',
      title: 'Seu stand-up',
      explanation: "Fale em frases curtas, com um verbo por frase. Ontem: past simple. Hoje: going to ou present continuous. Bloqueios: 'I'm blocked on' ou 'No blockers'.",
      examples: [
        {
          en: 'Yesterday I finished the user endpoint.',
          pt: 'Ontem terminei o endpoint de usuários.',
        },
        {
          en: "Today I'm going to work on validation.",
          pt: 'Hoje vou trabalhar na validação.',
          pronunciation: 'va-li-DÊI-shân',
        },
        {
          en: "I'm blocked on database access.",
          pt: 'Estou bloqueado no acesso ao banco.',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: 'Melhor forma de dizer que não há impedimentos:',
          options: ['No blockers.', 'No problem blocks.', 'Nothing blocked me never.'],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: 'Escreva seu stand-up de hoje (ontem / hoje / bloqueios).',
          modelAnswer: "Yesterday I...\nToday I'm going to...\nNo blockers. / I'm blocked on...",
        },
      ],
      checklist: [
        'Falo meu stand-up em menos de 1 minuto',
        'Uso passado e futuro corretamente',
        'Sei reportar um bloqueio',
      ],
    },
    {
      id: 'm6t4',
      title: 'Explicando um problema',
      explanation: "Estrutura simples: o que acontece, quando acontece, o que você já tentou, qual sua hipótese. 'I think the root cause is...' é a frase-chave.",
      examples: [
        {
          en: 'The issue happens when two users update the same record.',
          pt: 'O problema acontece quando dois usuários atualizam o mesmo registro.',
          pronunciation: 'Í-shu',
        },
        {
          en: 'I think the root cause is a missing index.',
          pt: 'Acho que a causa raiz é um índice faltando.',
          pronunciation: 'RÚT KÓZ',
        },
        {
          en: "I've tried restarting, but it didn't work.",
          pt: 'Já tentei reiniciar, mas não funcionou.',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: "'Root cause' é:",
          options: ['Causa raiz', 'Usuário root', 'Primeira causa'],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: 'Explique um bug que você já resolveu em 3 frases.',
          modelAnswer: 'The app crashed when the list was empty.\nThe root cause was a missing null check.\nI added a validation and a test for that case.',
        },
      ],
      checklist: [
        'Explico o quê, quando e hipótese',
        "Uso 'I've tried ... but'",
        'Expliquei um bug real em voz alta',
      ],
    },
    {
      id: 'm6t5',
      title: 'Pedindo ajuda',
      explanation: "Pedir ajuda bem é uma habilidade sênior: peça licença, contextualize e confirme o que entendeu. 'Walk me through' e 'Just to make sure' são muito usados.",
      examples: [
        {
          en: 'Do you have a minute?',
          pt: 'Você tem um minuto?',
        },
        {
          en: 'Could you walk me through this code?',
          pt: 'Pode me explicar este código passo a passo?',
          pronunciation: 'UÓK mi THRÚ',
        },
        {
          en: 'Just to make sure I understand...',
          pt: 'Só para garantir que entendi...',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: "'Walk me through' significa:",
          options: ['Me explique passo a passo', 'Ande comigo', 'Me acompanhe até a saída'],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: 'Peça ajuda para entender um erro de deploy.',
          modelAnswer: 'Hey, do you have a minute? Could you help me understand this deploy error?',
        },
      ],
      checklist: ['Peço ajuda com contexto', "Uso 'walk me through'", 'Confirmo o que entendi'],
    },
    {
      id: 'm6t6',
      title: 'Reuniões e opiniões',
      explanation: "Concordar, discordar e propor com educação: 'I agree', 'I see your point, but...', 'What if we...?'. Evite 'You're wrong': prefira falar da solução, não da pessoa.",
      examples: [
        {
          en: 'I agree with you.',
          pt: 'Concordo com você.',
          pronunciation: 'a-GRÍ',
        },
        {
          en: "I see your point, but I'm worried about performance.",
          pt: 'Entendo seu ponto, mas me preocupa a performance.',
          pronunciation: 'UÂ-rid',
        },
        {
          en: 'What if we used a queue instead?',
          pt: 'E se usássemos uma fila?',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: 'Discordar com educação:',
          options: ['I see your point, but I think...', "You're wrong.", 'No.'],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: 'Proponha uma alternativa a usar polling.',
          modelAnswer: 'What if we used webhooks instead of polling?',
        },
      ],
      checklist: [
        'Concordo e discordo com educação',
        "Proponho com 'What if...'",
        'Participei de uma conversa em inglês',
      ],
    },
  ],
  project: {
    id: 'p3',
    title: 'Stand-up gravado',
    explanation: 'Grave um áudio de 1 minuto com seu stand-up em inglês. Ouça, anote palavras que travaram ou soaram estranhas e grave de novo. Repita até soar natural: é o treino de speaking com o melhor custo-benefício.',
    examples: [
      {
        en: 'Yesterday I finished the integration with the payment API.',
        pt: 'Ontem terminei a integração com a API de pagamento.',
        pronunciation: 'in-te-GRÊI-shân',
      },
      {
        en: "Today I'm going to fix the failing tests.",
        pt: 'Hoje vou corrigir os testes que estão falhando.',
        pronunciation: 'FÊI-lin',
      },
      {
        en: 'No blockers for now.',
        pt: 'Sem bloqueios por enquanto.',
      },
    ],
    exercises: [
      {
        kind: 'writing',
        prompt: 'Escreva o roteiro do seu stand-up.',
        modelAnswer: "Yesterday I...\nToday I'm going to...\nI'm blocked by... / No blockers.",
      },
      {
        kind: 'choice',
        prompt: 'O que fazer ao ouvir a gravação?',
        options: [
          'Anotar palavras que travaram e regravar',
          'Apagar e desistir',
          'Traduzir para o português',
        ],
        answer: 0,
      },
    ],
    checklist: [
      'Gravei a primeira versão',
      'Identifiquei 3 pontos de pronúncia',
      'Gravei a versão final',
    ],
  },
}
