import type { Module } from '../../../types/content'

export const interviews: Module = {
  id: 'm8',
  number: '08',
  shortTitle: 'Entrevistas',
  title: 'Entrevistas técnicas em inglês',
  levelId: 'advanced',
  topics: [
    {
      id: 'm8t1',
      title: 'Tell me about yourself',
      explanation: 'A primeira pergunta de quase toda entrevista. Estrutura: presente (quem você é hoje), passado (experiência relevante), futuro (o que busca). De 60 a 90 segundos.',
      examples: [
        {
          en: "I'm a backend developer with two years of experience in Java.",
          pt: 'Sou desenvolvedor backend com dois anos de experiência em Java.',
          pronunciation: 'ek-SPÍ-ri-âns',
        },
        {
          en: 'Recently, I built a REST API for an inventory system.',
          pt: 'Recentemente, construí uma API REST para um sistema de estoque.',
          pronunciation: 'ÍN-vân-tó-ri',
        },
        {
          en: "I'm looking for a role where I can grow technically.",
          pt: 'Busco uma vaga onde eu possa crescer tecnicamente.',
          pronunciation: 'RÔUL',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: 'Ordem recomendada para a resposta:',
          options: [
            'Presente → passado → futuro',
            'Infância → escola → hobbies',
            'Salário → benefícios → cargo',
          ],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: 'Escreva sua resposta em 4 frases.',
          modelAnswer: "I'm a backend developer focused on Java and Spring.\nI've worked on REST APIs and relational databases.\nRecently, I built [project], where I [result].\nNow I'm looking for a team where I can keep growing.",
        },
      ],
      checklist: [
        'Tenho uma resposta de 60 a 90s',
        'Sigo presente → passado → futuro',
        'Pratiquei em voz alta',
      ],
    },
    {
      id: 'm8t2',
      title: 'Falando de projetos',
      explanation: "Use o método STAR: Situation (contexto), Task (seu papel), Action (o que você fez) e Result (resultado). Fale 'I', não só 'we': o entrevistador quer saber sua parte.",
      examples: [
        {
          en: 'I was responsible for designing the database schema.',
          pt: 'Eu era responsável por modelar o esquema do banco.',
          pronunciation: 'ris-PÓN-si-bâl, SKÍ-ma',
        },
        {
          en: 'The main challenge was performance.',
          pt: 'O principal desafio era a performance.',
          pronunciation: 'TCHÉ-lândj',
        },
        {
          en: 'As a result, the response time dropped significantly.',
          pt: 'Como resultado, o tempo de resposta caiu bastante.',
          pronunciation: 'sig-NÍ-fi-kânt-li',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: 'O que significa STAR?',
          options: [
            'Situation, Task, Action, Result',
            'Start, Test, Apply, Review',
            'Skills, Tools, Achievements, Roles',
          ],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: 'Descreva um projeto seu usando STAR em 4 frases.',
          modelAnswer: 'Situation: Our API was slow during peak hours.\nTask: I had to find the bottleneck.\nAction: I added indexes and a cache layer.\nResult: Response time improved and timeouts stopped.',
        },
      ],
      checklist: [
        'Conheço o método STAR',
        "Falo 'I' para mostrar minha parte",
        'Preparei 2 histórias de projeto',
      ],
    },
    {
      id: 'm8t3',
      title: 'Live coding em voz alta',
      explanation: 'Em live coding, pensar em voz alta vale tanto quanto o código. Confirme o problema, proponha uma abordagem simples, depois otimize e fale da complexidade.',
      examples: [
        {
          en: 'Let me make sure I understand the problem.',
          pt: 'Deixe-me confirmar que entendi o problema.',
        },
        {
          en: 'My first approach would be a brute-force solution.',
          pt: 'Minha primeira abordagem seria força bruta.',
          pronunciation: 'BRÚT FÓRS',
        },
        {
          en: 'The time complexity is O(n log n).',
          pt: 'A complexidade de tempo é O(n log n).',
          pronunciation: 'ôu âv EN LÓG EN',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: 'Como se fala O(n²)?',
          options: ['O of n squared', 'O n two', 'zero n square'],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: "Escreva como você começaria a resolver 'encontrar duplicados em uma lista'.",
          modelAnswer: "Let me make sure I understand: I need to return the values that appear more than once, right?\nA simple approach is to use a HashSet to track what I've seen.\nThat would be O(n) time and O(n) space.",
        },
      ],
      checklist: [
        'Confirmo o problema antes de codar',
        'Falo complexidade em inglês',
        'Pratiquei um exercício narrando',
      ],
    },
    {
      id: 'm8t4',
      title: 'Perguntas comportamentais',
      explanation: "'Tell me about a time when...' pede uma história real. Mostre maturidade: conflito resolvido com conversa, erro admitido com aprendizado, prioridade definida por impacto.",
      examples: [
        {
          en: 'Tell me about a time you disagreed with a teammate.',
          pt: 'Conte sobre uma vez em que discordou de um colega.',
          pronunciation: 'dis-a-GRÍD',
        },
        {
          en: "I made a mistake, and here's what I learned.",
          pt: 'Cometi um erro, e foi isso que aprendi.',
          pronunciation: 'mis-TÊIK',
        },
        {
          en: 'I prioritized the tasks by impact.',
          pt: 'Priorizei as tarefas por impacto.',
          pronunciation: 'prai-Ó-ri-taizd',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: 'Melhor atitude ao falar de um erro:',
          options: ['Admitir e mostrar o que aprendeu', 'Culpar o time', 'Dizer que nunca erra'],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: "Responda: 'Tell me about a time you had a tight deadline.'",
          modelAnswer: 'We had to deliver a feature in one week.\nI split it into small tasks and focused on the core flow first.\nWe delivered on time and improved the rest in the next sprint.',
        },
      ],
      checklist: [
        'Preparei 3 histórias comportamentais',
        'Mostro aprendizado com erros',
        'Respondo sem culpar ninguém',
      ],
    },
    {
      id: 'm8t5',
      title: 'Quando você não sabe',
      explanation: 'Não saber algo é normal. O que conta é como você reage: seja honesto, conecte com algo parecido que você conhece e mostre como descobriria a resposta.',
      examples: [
        {
          en: "I'm not sure, but my guess would be...",
          pt: 'Não tenho certeza, mas meu palpite seria...',
          pronunciation: 'GUÉS',
        },
        {
          en: "I haven't used that, but I've worked with something similar.",
          pt: 'Não usei isso, mas trabalhei com algo parecido.',
          pronunciation: 'SÍ-mi-lâr',
        },
        {
          en: 'Could you give me a hint?',
          pt: 'Você pode me dar uma dica?',
          pronunciation: 'HÍNT',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: 'Pergunta sobre uma ferramenta que você nunca usou. Melhor resposta:',
          options: [
            "I haven't used it, but I've used X, which is similar...",
            'Yes, I know it very well.',
            'Next question.',
          ],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: "Responda: 'Have you worked with Kafka?' (você só usou RabbitMQ)",
          modelAnswer: "Not directly, but I've used RabbitMQ for messaging, so I'm familiar with queues, producers and consumers. I'd be glad to learn Kafka.",
        },
      ],
      checklist: [
        'Admito não saber com confiança',
        'Conecto com experiência parecida',
        'Peço dicas sem constrangimento',
      ],
    },
    {
      id: 'm8t6',
      title: 'Perguntas ao entrevistador',
      explanation: 'No fim, sempre tenha 2 ou 3 perguntas. Elas mostram interesse e ajudam você a avaliar a empresa: rotina, time, processos e próximos passos.',
      examples: [
        {
          en: 'What does a typical day look like for this role?',
          pt: 'Como é um dia típico nesta função?',
          pronunciation: 'TÍ-pi-kal',
        },
        {
          en: 'How does the team handle code reviews?',
          pt: 'Como o time faz code review?',
        },
        {
          en: 'What are the next steps in the process?',
          pt: 'Quais são os próximos passos do processo?',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: 'Qual pergunta é melhor no fim da entrevista?',
          options: [
            'How does the team handle code reviews?',
            'How many vacation days do I get on day one?',
            'No questions.',
          ],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: 'Escreva 2 perguntas que você faria ao entrevistador.',
          modelAnswer: 'What does onboarding look like for new developers?\nWhat are the biggest technical challenges the team is facing?',
        },
      ],
      checklist: [
        'Tenho 3 perguntas prontas',
        'Sei perguntar sobre próximos passos',
        'Pratiquei o fechamento da entrevista',
      ],
    },
  ],
  project: {
    id: 'p4',
    title: 'Entrevista simulada',
    explanation: 'Simule uma entrevista completa de 30 minutos: apresentação, um projeto com STAR, um problema de código pensando em voz alta e perguntas finais. Use um colega, um tutor ou o Claude como entrevistador e peça feedback.',
    examples: [
      {
        en: 'Thanks for having me.',
        pt: 'Obrigado por me receber.',
      },
      {
        en: 'Can I take a moment to think?',
        pt: 'Posso pensar um instante?',
        pronunciation: 'MÔU-mânt',
      },
      {
        en: 'Thank you for your time. I look forward to hearing from you.',
        pt: 'Obrigado pelo seu tempo. Aguardo seu retorno.',
      },
    ],
    exercises: [
      {
        kind: 'writing',
        prompt: "Escreva sua resposta para 'Why do you want to work here?'",
        modelAnswer: "I'm interested in this role because [reason about the company].\nI'd like to grow in [area], and I believe my experience with [skill] can help the team.",
      },
      {
        kind: 'choice',
        prompt: 'Se não entendeu a pergunta, o melhor é:',
        options: ['Pedir para reformular', 'Responder qualquer coisa', 'Ficar em silêncio'],
        answer: 0,
      },
    ],
    checklist: ['Fiz a simulação completa', 'Recebi feedback', 'Listei 3 pontos para melhorar'],
  },
}
