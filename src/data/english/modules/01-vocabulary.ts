import type { Module } from '../../../types/content'

export const vocabulary: Module = {
  id: 'm1',
  number: '01',
  shortTitle: 'Vocabulário',
  title: 'Vocabulário básico e cotidiano',
  levelId: 'beginner',
  topics: [
    {
      id: 'm1t1',
      title: 'Saudações no trabalho',
      explanation: "Cumprimentos curtos abrem reuniões, mensagens e calls. Em ambiente profissional o inglês é direto e informal: 'Hi' e 'Hey' são comuns até com gestores. Responda sempre devolvendo a pergunta ou com uma frase curta.",
      examples: [
        {
          en: 'Good morning, team!',
          pt: 'Bom dia, time!',
          pronunciation: 'gud MÓR-nin, tím',
        },
        {
          en: "How's it going?",
          pt: 'Como vão as coisas?',
          pronunciation: 'ráuz it GÔU-in',
        },
        {
          en: 'Nice to meet you.',
          pt: 'Prazer em conhecer você.',
          pronunciation: 'náis tu MÍT iú',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: "Qual é a resposta natural para 'How's it going?'",
          options: ['Pretty good, thanks! You?', 'I am 25 years old.', 'Yes, I go.'],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: 'Escreva como você se apresentaria no primeiro dia: nome e função.',
          modelAnswer: "Hi everyone, I'm [name]. I'm the new backend developer. Nice to meet you all!",
        },
      ],
      checklist: [
        'Sei cumprimentar em mensagens e calls',
        "Sei responder 'How's it going?'",
        'Consigo me apresentar em uma frase',
      ],
    },
    {
      id: 'm1t2',
      title: 'Números e datas',
      explanation: "Versões, datas de release e quantidades aparecem o tempo todo. Em datas, o inglês americano usa mês antes do dia (March 3rd). Em versões, o ponto é lido como 'point' ou 'dot', e o zero muitas vezes vira 'oh'.",
      examples: [
        {
          en: 'The release is on March 3rd.',
          pt: 'O lançamento é em 3 de março.',
          pronunciation: 'dã ri-LÍS iz on MARTCH THÂRD',
        },
        {
          en: "We're on version 2.10.",
          pt: 'Estamos na versão 2.10.',
          pronunciation: 'VÂR-jân tchú point TÉN',
        },
        {
          en: 'We have 15 open tickets.',
          pt: 'Temos 15 tickets abertos.',
          pronunciation: 'fif-TÍN ÔU-pen TÍ-kits',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: "Como se lê 'v1.0.3'?",
          options: [
            'version one point oh point three',
            'version first zero third',
            'version one comma zero comma three',
          ],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: "Escreva em inglês: 'O deploy é no dia 21 de junho às 14h.'",
          modelAnswer: 'The deploy is on June 21st at 2 p.m.',
        },
      ],
      checklist: [
        'Leio versões em voz alta',
        'Escrevo datas no formato americano',
        'Diferencio fifteen e fifty pela sílaba forte',
      ],
    },
    {
      id: 'm1t3',
      title: 'Verbos do dia a dia dev',
      explanation: 'Alguns verbos aparecem em quase toda conversa técnica: run, build, fix, push, merge, deploy. Muitos já são usados em português como estrangeirismo, então foque em conjugá-los e pronunciá-los corretamente.',
      examples: [
        {
          en: 'Run the tests before you push.',
          pt: 'Rode os testes antes de fazer push.',
          pronunciation: 'rân dã TÉSTS bi-FÓR iú PÚSH',
        },
        {
          en: 'I fixed the bug yesterday.',
          pt: 'Eu corrigi o bug ontem.',
          pronunciation: 'ai FÍKST dã BÂG',
        },
        {
          en: "Let's merge it after the review.",
          pt: 'Vamos fazer merge depois da revisão.',
          pronunciation: 'léts MÂRDJ it',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: "'Merge the branch' significa:",
          options: ['Mesclar a branch', 'Apagar a branch', 'Criar a branch'],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: "Traduza: 'Eu vou fazer o build e depois rodar os testes.'",
          modelAnswer: "I'm going to build it and then run the tests.",
        },
      ],
      checklist: [
        'Conheço 6 verbos essenciais',
        'Uso esses verbos no passado',
        "Pronuncio 'fixed' com som de /t/ no final",
      ],
    },
    {
      id: 'm1t4',
      title: 'Objetos e ferramentas',
      explanation: 'Vocabulário do ambiente de trabalho: terminal, folder, file, repository, screen, keyboard. Ajuda a seguir tutoriais e a pedir coisas simples durante uma call.',
      examples: [
        {
          en: 'Open the terminal and go to the project folder.',
          pt: 'Abra o terminal e vá para a pasta do projeto.',
          pronunciation: 'ÔU-pen dã TÂR-mi-nal',
        },
        {
          en: 'Clone the repository.',
          pt: 'Clone o repositório.',
          pronunciation: 'ri-PÓ-zi-tó-ri',
        },
        {
          en: 'Could you share your screen, please?',
          pt: 'Você pode compartilhar sua tela, por favor?',
          pronunciation: 'shér iór SCRÍN',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: "'Folder' é:",
          options: ['Pasta', 'Arquivo', 'Tela'],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: 'Peça para alguém aumentar a fonte do editor.',
          modelAnswer: 'Could you increase the font size, please?',
        },
      ],
      checklist: [
        'Nomeio as ferramentas do meu setup em inglês',
        'Sei pedir para compartilhar a tela',
        "Pronuncio 'repository' com a sílaba forte certa",
      ],
    },
    {
      id: 'm1t5',
      title: 'Tempo e frequência',
      explanation: 'Advérbios como always, usually, sometimes e never vêm antes do verbo principal (mas depois do verbo to be). São essenciais para descrever rotinas, pipelines e comportamentos de sistemas.',
      examples: [
        {
          en: 'The pipeline usually takes ten minutes.',
          pt: 'O pipeline geralmente leva dez minutos.',
          pronunciation: 'IÚ-ju-a-li',
        },
        {
          en: 'I never commit directly to main.',
          pt: 'Eu nunca faço commit direto na main.',
          pronunciation: 'NÉ-vâr',
        },
        {
          en: 'The meeting is tomorrow morning.',
          pt: 'A reunião é amanhã de manhã.',
          pronunciation: 'tu-MÓ-rou MÓR-nin',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: "Complete: 'The build ___ fails on Mondays.' (às vezes)",
          options: ['sometimes', 'always', 'never'],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: "Descreva sua rotina de estudo usando 'usually' e 'sometimes'.",
          modelAnswer: 'I usually study in the morning, and sometimes I practice English at night.',
        },
      ],
      checklist: [
        'Sei a posição do advérbio na frase',
        'Descrevo minha rotina',
        'Uso today, tomorrow e yesterday sem confundir',
      ],
    },
    {
      id: 'm1t6',
      title: 'Falsos cognatos',
      explanation: "Palavras parecidas com o português, mas com outro significado. Em textos técnicos, 'actually', 'eventually' e 'assume' causam muitos erros de interpretação.",
      examples: [
        {
          en: 'Actually, the bug is in the frontend.',
          pt: 'Na verdade, o bug está no frontend.',
          pronunciation: 'ÉK-tchu-a-li',
        },
        {
          en: 'Eventually, the job finished.',
          pt: 'Por fim, o job terminou.',
          pronunciation: 'i-VÉN-tchu-a-li',
        },
        {
          en: 'I assume the API is down.',
          pt: 'Suponho que a API esteja fora do ar.',
          pronunciation: 'a-SÚM',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: "'Eventually' significa:",
          options: ['Por fim / com o tempo', 'Eventualmente / às vezes', 'Imediatamente'],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: "Use 'actually' para corrigir: 'O problema não é o banco, é o cache.'",
          modelAnswer: "Actually, the problem isn't the database, it's the cache.",
        },
      ],
      checklist: [
        'Sei o sentido real de actually e eventually',
        "Não traduzo 'pretend' como pretender",
        'Reconheço falsos cognatos ao ler docs',
      ],
    },
  ],
  project: {
    id: 'p1',
    title: 'Diário de dev em inglês',
    explanation: 'Durante 7 dias, escreva 5 frases sobre seu dia de estudo ou trabalho usando presente, passado e futuro. O objetivo é transformar vocabulário e gramática em hábito antes de partir para a leitura técnica.',
    examples: [
      {
        en: 'Today I studied Spring Boot for two hours.',
        pt: 'Hoje estudei Spring Boot por duas horas.',
      },
      {
        en: "Yesterday I couldn't fix the CORS error.",
        pt: 'Ontem não consegui corrigir o erro de CORS.',
        pronunciation: 'KÓRS',
      },
      {
        en: "Tomorrow I'm going to write unit tests.",
        pt: 'Amanhã vou escrever testes unitários.',
        pronunciation: 'IÚ-nit TÉSTS',
      },
    ],
    exercises: [
      {
        kind: 'writing',
        prompt: 'Escreva sua entrada do dia 1 (5 frases).',
        modelAnswer: "Today I worked on...\nI learned...\nI had a problem with...\nI fixed it by...\nTomorrow I'm going to...",
      },
      {
        kind: 'choice',
        prompt: "Qual estrutura usar para 'Amanhã vou revisar o PR'?",
        options: ['going to / will', 'simple past', 'verbo to be sozinho'],
        answer: 0,
      },
    ],
    checklist: [
      'Escrevi 7 entradas, uma por dia',
      'Usei presente, passado e futuro',
      'Reli as entradas e corrigi erros',
    ],
  },
}
