import type { Module } from '../../../types/content'

export const grammar: Module = {
  id: 'm2',
  number: '02',
  shortTitle: 'Gramática',
  title: 'Gramática essencial',
  levelId: 'beginner',
  topics: [
    {
      id: 'm2t1',
      title: 'Verbo to be',
      explanation: "'To be' significa ser ou estar: am, is, are no presente; was, were no passado. É o verbo mais usado para descrever estado de sistemas: online, down, ready, broken.",
      examples: [
        {
          en: 'The server is down.',
          pt: 'O servidor está fora do ar.',
          pronunciation: 'SÂR-vâr iz DÁUN',
        },
        {
          en: 'The tests are green.',
          pt: 'Os testes estão passando.',
        },
        {
          en: 'Is the API ready?',
          pt: 'A API está pronta?',
          pronunciation: 'iz dã ei-pi-ÁI RÉ-di',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: "Complete: 'The logs ___ empty.'",
          options: ['are', 'is', 'am'],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: "Escreva a pergunta: 'O banco de dados está online?'",
          modelAnswer: 'Is the database online?',
        },
      ],
      checklist: [
        'Conjugo am / is / are',
        'Faço perguntas invertendo o verbo',
        'Uso was / were para falar de ontem',
      ],
    },
    {
      id: 'm2t2',
      title: 'Simple present',
      explanation: 'Usado para fatos, rotinas e para descrever o que um código faz. Na 3ª pessoa do singular (he, she, it) o verbo ganha -s. Negativa e pergunta usam do/does.',
      examples: [
        {
          en: 'This function returns a string.',
          pt: 'Esta função retorna uma string.',
          pronunciation: 'ri-TÂRNZ',
        },
        {
          en: 'The cache expires every hour.',
          pt: 'O cache expira a cada hora.',
          pronunciation: 'ek-SPÁI-ârz',
        },
        {
          en: "It doesn't support Java 8.",
          pt: 'Ele não suporta Java 8.',
          pronunciation: 'DÂ-zânt sâ-PÓRT',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: "Complete: 'The method ___ null if nothing is found.'",
          options: ['returns', 'return', 'returning'],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: "Traduza: 'O serviço não aceita requisições sem token.'",
          modelAnswer: "The service doesn't accept requests without a token.",
        },
      ],
      checklist: [
        'Lembro do -s na 3ª pessoa',
        "Uso does / doesn't corretamente",
        'Descrevo o que uma função faz',
      ],
    },
    {
      id: 'm2t3',
      title: 'Simple past',
      explanation: 'Para ações terminadas: verbos regulares ganham -ed (updated, fixed), irregulares mudam de forma (write → wrote, break → broke). Em pergunta e negativa, use did + verbo na forma base.',
      examples: [
        {
          en: 'I updated the dependencies.',
          pt: 'Eu atualizei as dependências.',
          pronunciation: 'âp-DÊI-tid',
        },
        {
          en: 'The deploy failed last night.',
          pt: 'O deploy falhou ontem à noite.',
          pronunciation: 'FÊILD',
        },
        {
          en: 'Did you check the logs?',
          pt: 'Você checou os logs?',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: "Passado de 'write' (ex.: 'I ___ the tests')",
          options: ['wrote', 'writed', 'written'],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: 'Conte em uma frase o que você fez ontem no projeto.',
          modelAnswer: 'Yesterday I fixed a bug in the login and wrote two unit tests.',
        },
      ],
      checklist: [
        'Conheço os 3 sons do -ed',
        'Sei 10 verbos irregulares comuns',
        'Pergunto com did + verbo base',
      ],
    },
    {
      id: 'm2t4',
      title: 'Present continuous',
      explanation: 'Am/is/are + verbo com -ing: o que está acontecendo agora ou neste período. Muito usado em stand-ups e para descrever processos em execução.',
      examples: [
        {
          en: "I'm working on the payment API.",
          pt: 'Estou trabalhando na API de pagamento.',
        },
        {
          en: 'The build is running.',
          pt: 'O build está rodando.',
          pronunciation: 'RÂ-nin',
        },
        {
          en: "We're migrating to Postgres.",
          pt: 'Estamos migrando para o Postgres.',
          pronunciation: 'MÁI-grei-tin',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: "'What are you working on?' — melhor resposta:",
          options: ["I'm working on the auth module.", 'I work yesterday.', 'I am work auth.'],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: "Traduza: 'Estamos investigando o problema.'",
          modelAnswer: "We're investigating the issue.",
        },
      ],
      checklist: [
        'Monto frases com am/is/are + -ing',
        'Diferencio rotina de ação em andamento',
        "Respondo 'What are you working on?'",
      ],
    },
    {
      id: 'm2t5',
      title: 'Futuro: will e going to',
      explanation: "'Will' para decisões na hora, promessas e previsões. 'Going to' para planos já decididos. Ambos aparecem em planejamento de sprint e releases.",
      examples: [
        {
          en: "I'll fix it after lunch.",
          pt: 'Vou corrigir depois do almoço.',
          pronunciation: 'ail FÍKS it',
        },
        {
          en: "We're going to release v2 next week.",
          pt: 'Vamos lançar a v2 na semana que vem.',
          pronunciation: 'GÔU-in tu',
        },
        {
          en: 'Will it break the API?',
          pt: 'Isso vai quebrar a API?',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: "Plano já decidido: 'We ___ migrate the database on Monday.'",
          options: ['are going to', 'will to', 'going'],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: 'Prometa revisar o PR de um colega hoje.',
          modelAnswer: "I'll review your PR today.",
        },
      ],
      checklist: [
        'Sei quando usar will',
        'Sei quando usar going to',
        "Uso contrações I'll / we're",
      ],
    },
    {
      id: 'm2t6',
      title: 'Modais',
      explanation: 'Can (poder/conseguir), should (deveria), must (deve, obrigatório), might (talvez). Aparecem em docs, code reviews e recomendações de segurança.',
      examples: [
        {
          en: 'You should add a test for this.',
          pt: 'Você deveria adicionar um teste para isso.',
          pronunciation: 'shud',
        },
        {
          en: 'This might cause a memory leak.',
          pt: 'Isso pode causar um vazamento de memória.',
          pronunciation: 'MÉ-mo-ri LÍK',
        },
        {
          en: 'Passwords must be hashed.',
          pt: 'Senhas devem ser armazenadas com hash.',
          pronunciation: 'mâst bi HÉSHT',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: 'Qual expressa possibilidade incerta?',
          options: ['might', 'must', 'should'],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: 'Sugira educadamente usar uma variável de ambiente.',
          modelAnswer: 'You should use an environment variable for this.',
        },
      ],
      checklist: [
        'Diferencio should de must',
        'Uso might para incerteza',
        "Leio 'MUST / SHOULD' em especificações",
      ],
    },
  ],
}
