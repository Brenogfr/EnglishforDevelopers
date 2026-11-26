import type { Module } from '../../../types/content'

export const reading: Module = {
  id: 'm3',
  number: '03',
  shortTitle: 'Leitura',
  title: 'Leitura e interpretação de textos',
  levelId: 'basic',
  topics: [
    {
      id: 'm3t1',
      title: 'Skimming e scanning',
      explanation: 'Skimming é passar o olho para entender a ideia geral. Scanning é procurar uma informação específica (um comando, um parâmetro). Em documentação, quase nunca você lê tudo do começo ao fim.',
      examples: [
        {
          en: 'Getting Started',
          pt: 'Primeiros passos',
        },
        {
          en: 'Prerequisites',
          pt: 'Pré-requisitos',
          pronunciation: 'pri-RÉ-kwi-zits',
        },
        {
          en: 'See also',
          pt: 'Veja também',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: 'Você quer só o comando de instalação. Qual técnica?',
          options: [
            'Scanning: procurar a informação específica',
            'Ler tudo palavra por palavra',
            'Traduzir a página inteira',
          ],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: 'Liste 3 seções que quase todo README tem (em inglês).',
          modelAnswer: 'Installation, Usage, License\n(also common: Getting Started, Contributing)',
        },
      ],
      checklist: [
        'Sei a diferença entre skimming e scanning',
        'Encontro um comando sem ler tudo',
        'Reconheço as seções padrão de docs',
      ],
    },
    {
      id: 'm3t2',
      title: 'Palavras de ligação',
      explanation: 'Conectores mudam o sentido da frase: however (porém), therefore (portanto), although (embora), instead (em vez disso), otherwise (caso contrário). Perder um conector pode inverter a instrução.',
      examples: [
        {
          en: 'However, this method is deprecated.',
          pt: 'No entanto, este método está obsoleto.',
          pronunciation: 'DÉ-pre-kei-tid',
        },
        {
          en: 'Use streams instead of loops.',
          pt: 'Use streams em vez de loops.',
          pronunciation: 'in-STÉD',
        },
        {
          en: 'Set a timeout; otherwise, the request may hang.',
          pt: 'Defina um timeout; caso contrário, a requisição pode travar.',
          pronunciation: 'Â-dhâr-uaiz',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: "'Therefore' indica:",
          options: ['Consequência', 'Contraste', 'Exemplo'],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: "Traduza: 'Embora seja rápido, consome muita memória.'",
          modelAnswer: "Although it's fast, it uses a lot of memory.",
        },
      ],
      checklist: [
        'Reconheço 5 conectores',
        'Sei quais indicam contraste',
        "Não perco avisos com 'otherwise'",
      ],
    },
    {
      id: 'm3t3',
      title: 'Lendo um README',
      explanation: "Um README responde: o que é, como instalar, como usar e como contribuir. Preste atenção em requisitos de versão ('or later', 'at least') e em comandos que vêm depois de 'Run the following'.",
      examples: [
        {
          en: 'This project requires Node 20 or later.',
          pt: 'Este projeto requer Node 20 ou superior.',
          pronunciation: 'ri-KUÁI-ârz',
        },
        {
          en: 'Run the following command:',
          pt: 'Execute o comando a seguir:',
          pronunciation: 'FÓ-lou-in',
        },
        {
          en: 'Contributions are welcome.',
          pt: 'Contribuições são bem-vindas.',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: "'Node 20 or later' significa:",
          options: ['Node 20 ou mais novo', 'Node 20 ou mais antigo', 'Apenas Node 20'],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: 'Escreva a frase de instalação do README de um projeto seu.',
          modelAnswer: 'To install, clone the repository and run:\nnpm install',
        },
      ],
      checklist: [
        'Encontro requisitos de versão',
        'Entendo a seção Usage',
        'Leio um README inteiro sem tradutor',
      ],
    },
    {
      id: 'm3t4',
      title: 'Changelogs e release notes',
      explanation: "Notas de versão usam categorias fixas: Added, Changed, Fixed, Deprecated, Removed e Breaking changes. 'Breaking change' significa que a atualização pode quebrar o seu código.",
      examples: [
        {
          en: 'Breaking change: /users now requires authentication.',
          pt: 'Mudança incompatível: /users agora exige autenticação.',
          pronunciation: 'BRÊI-kin TCHÊINDJ',
        },
        {
          en: 'Fixed a race condition in the scheduler.',
          pt: 'Corrigida uma condição de corrida no agendador.',
          pronunciation: 'RÊIS kân-DÍ-shân',
        },
        {
          en: 'Deprecated: will be removed in v3.',
          pt: 'Obsoleto: será removido na v3.',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: 'O que exige atenção antes de atualizar?',
          options: ['Breaking changes', 'Added', 'Docs'],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: "Escreva uma linha de changelog: 'corrigido erro de login com e-mail em maiúsculas'.",
          modelAnswer: 'Fixed: login failing when the email contains uppercase letters.',
        },
      ],
      checklist: [
        'Conheço as categorias de changelog',
        'Identifico breaking changes',
        'Escrevo uma linha de changelog',
      ],
    },
    {
      id: 'm3t5',
      title: 'Mensagens de erro',
      explanation: 'Mensagens de erro seguem padrões curtos: o tipo do erro, depois uma descrição. Palavras-chave: refused, denied, not found, unexpected, invalid, timeout. Entendê-las economiza buscas no Google.',
      examples: [
        {
          en: 'Connection refused',
          pt: 'Conexão recusada',
          pronunciation: 'ri-FIÚZD',
        },
        {
          en: 'Permission denied',
          pt: 'Permissão negada',
          pronunciation: 'pâr-MÍ-shân di-NÁID',
        },
        {
          en: 'Cannot read properties of undefined',
          pt: 'Não é possível ler propriedades de undefined',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: "'Unexpected token' geralmente indica:",
          options: ['Erro de sintaxe', 'Falta de memória', 'Rede lenta'],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: "Explique em inglês simples o que significa 'File not found'.",
          modelAnswer: "The program can't find the file at the given path.",
        },
      ],
      checklist: [
        'Conheço 6 palavras-chave de erros',
        'Explico um erro em inglês simples',
        'Leio stack traces sem pânico',
      ],
    },
    {
      id: 'm3t6',
      title: 'Issues e Stack Overflow',
      explanation: 'Issues e respostas de fórum têm estrutura previsível: steps to reproduce, expected behavior, actual behavior, workaround. Ler isso rápido ajuda a decidir se o problema é o mesmo que o seu.',
      examples: [
        {
          en: 'Steps to reproduce',
          pt: 'Passos para reproduzir',
          pronunciation: 'ri-pro-DÚS',
        },
        {
          en: 'Expected behavior vs. actual behavior',
          pt: 'Comportamento esperado vs. real',
          pronunciation: 'bi-RÊI-viâr',
        },
        {
          en: 'This worked for me.',
          pt: 'Isso funcionou para mim.',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: "'Workaround' significa:",
          options: ['Solução alternativa temporária', 'Correção definitiva', 'Ambiente de trabalho'],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: 'Escreva o título de uma issue: o botão Salvar não envia o formulário.',
          modelAnswer: 'Save button does not submit the form on Firefox',
        },
      ],
      checklist: [
        'Entendo a estrutura de uma issue',
        'Sei o que é workaround',
        'Decido rápido se a resposta serve',
      ],
    },
  ],
}
