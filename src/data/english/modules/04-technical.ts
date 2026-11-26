import type { Module } from '../../../types/content'

export const technicalEnglish: Module = {
  id: 'm4',
  number: '04',
  shortTitle: 'Inglês técnico',
  title: 'Inglês técnico para programação',
  levelId: 'basic',
  topics: [
    {
      id: 'm4t1',
      title: 'Termos de código',
      explanation: "Function, argument, parameter, loop, array, return. Em inglês, uma função 'takes' (recebe) argumentos e 'returns' (retorna) um valor. Usar esse verbo deixa sua explicação natural.",
      examples: [
        {
          en: 'The function takes two arguments.',
          pt: 'A função recebe dois argumentos.',
          pronunciation: 'ÁR-guiu-mânts',
        },
        {
          en: 'Iterate over the array.',
          pt: 'Itere sobre o array.',
          pronunciation: 'Í-tâ-reit',
        },
        {
          en: 'Return early if the input is empty.',
          pt: 'Retorne cedo se a entrada estiver vazia.',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: "'Takes a parameter' significa:",
          options: ['Recebe um parâmetro', 'Remove um parâmetro', 'Testa um parâmetro'],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: 'Descreva em inglês: função que recebe uma lista e retorna a soma.',
          modelAnswer: 'This function takes a list and returns the sum of its elements.',
        },
      ],
      checklist: [
        'Descrevo uma função com takes / returns',
        "Pronuncio 'iterate'",
        'Explico um loop em inglês',
      ],
    },
    {
      id: 'm4t2',
      title: 'Documentação de API',
      explanation: 'Docs de API têm vocabulário fixo: endpoint, request, response, header, query parameter, body, required, optional. Saber esses termos permite usar qualquer API sem tradução.',
      examples: [
        {
          en: 'Send a GET request to /orders.',
          pt: 'Envie uma requisição GET para /orders.',
          pronunciation: 'ri-KUÉST',
        },
        {
          en: 'The response body contains a JSON object.',
          pt: 'O corpo da resposta contém um objeto JSON.',
          pronunciation: 'DJÊI-sân',
        },
        {
          en: 'This field is optional.',
          pt: 'Este campo é opcional.',
          pronunciation: 'ÓP-shâ-nal',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: "'Required header' é:",
          options: ['Cabeçalho obrigatório', 'Cabeçalho recomendado', 'Cabeçalho antigo'],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: 'Descreva o endpoint POST /users em uma frase.',
          modelAnswer: 'POST /users creates a new user and returns it with status 201.',
        },
      ],
      checklist: [
        'Conheço os termos de docs de API',
        'Diferencio required de optional',
        'Descrevo um endpoint',
      ],
    },
    {
      id: 'm4t3',
      title: 'Status HTTP e erros',
      explanation: 'Códigos HTTP têm nomes em inglês que explicam o problema: 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Server Error. Use os nomes ao reportar problemas.',
      examples: [
        {
          en: '404 Not Found',
          pt: 'Não encontrado',
        },
        {
          en: '401 Unauthorized: missing or invalid token',
          pt: 'Não autorizado: token ausente ou inválido',
          pronunciation: 'ân-Ó-thâ-raizd',
        },
        {
          en: '500 Internal Server Error',
          pt: 'Erro interno do servidor',
          pronunciation: 'in-TÂR-nal',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: 'Usuário logado, mas sem permissão, recebe:',
          options: ['403 Forbidden', '404 Not Found', '200 OK'],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: 'Explique em inglês a diferença entre 401 e 403.',
          modelAnswer: '401 means you are not authenticated. 403 means you are authenticated but not allowed to access the resource.',
        },
      ],
      checklist: [
        'Sei os nomes dos principais status',
        'Explico 401 vs 403',
        'Reporto um erro HTTP em inglês',
      ],
    },
    {
      id: 'm4t4',
      title: 'Git e code review',
      explanation: "Code review tem jargão próprio: LGTM, nit, blocking, suggestion, rebase, squash. Comentários educados usam 'Could you...' e 'What do you think about...'.",
      examples: [
        {
          en: 'LGTM, looks good to me.',
          pt: 'Parece bom para mim.',
          pronunciation: 'el-dji-ti-ÉM',
        },
        {
          en: 'Nit: rename this variable.',
          pt: 'Detalhe: renomeie esta variável.',
          pronunciation: 'NÍT',
        },
        {
          en: 'Could you rebase onto main?',
          pt: 'Você pode fazer rebase na main?',
          pronunciation: 'RÍ-beis',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: "'Nit' em code review é:",
          options: ['Sugestão pequena, não bloqueante', 'Erro crítico', 'Aprovação final'],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: 'Escreva um comentário educado pedindo um teste.',
          modelAnswer: 'Could you add a unit test for this edge case?',
        },
      ],
      checklist: [
        'Conheço LGTM, nit e blocking',
        'Escrevo comentários educados',
        'Entendo pedidos de rebase / squash',
      ],
    },
    {
      id: 'm4t5',
      title: 'Nomes e comentários',
      explanation: 'Bons nomes em inglês seguem padrões: booleanos com is/has/can, funções com verbo (getUser, validateInput), coleções no plural. Comentários explicam o porquê, não o quê.',
      examples: [
        {
          en: '// TODO: handle timeout',
          pt: 'A fazer: tratar timeout',
          pronunciation: 'tu-DÚ',
        },
        {
          en: 'isValid, hasPermission, userCount',
          pt: 'éVálido, temPermissão, contagemDeUsuários',
        },
        {
          en: '// Retry up to 3 times before failing',
          pt: 'Tenta até 3 vezes antes de falhar',
          pronunciation: 'ri-TRÁI',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: "Melhor nome para o booleano 'usuário está ativo':",
          options: ['isActive', 'activeUserFlagBool', 'ativo'],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: 'Escreva um comentário explicando por que um cache existe.',
          modelAnswer: '// Cache results for 5 minutes to reduce database load.',
        },
      ],
      checklist: [
        'Nomeio booleanos com is / has',
        'Nomeio funções com verbos',
        'Comento o porquê, não o quê',
      ],
    },
    {
      id: 'm4t6',
      title: 'Verbos técnicos',
      explanation: "Implement, refactor, handle, throw, validate, retrieve, deploy, rollback. São os verbos de tickets, PRs e documentação. 'Handle' (tratar) e 'throw' (lançar) são os mais confundidos.",
      examples: [
        {
          en: 'We need to refactor this class.',
          pt: 'Precisamos refatorar esta classe.',
          pronunciation: 'ri-FÉK-târ',
        },
        {
          en: 'It throws an exception if the ID is invalid.',
          pt: 'Ele lança uma exceção se o ID for inválido.',
          pronunciation: 'ek-SÉP-shân',
        },
        {
          en: 'Retrieve the user by email.',
          pt: 'Recupere o usuário pelo e-mail.',
          pronunciation: 'ri-TRÍV',
        },
      ],
      exercises: [
        {
          kind: 'choice',
          prompt: "'Handle the error' é:",
          options: ['Tratar o erro', 'Ignorar o erro', 'Criar o erro'],
          answer: 0,
        },
        {
          kind: 'writing',
          prompt: "Traduza: 'Valide a entrada antes de salvar no banco.'",
          modelAnswer: 'Validate the input before saving it to the database.',
        },
      ],
      checklist: [
        'Conheço 8 verbos técnicos',
        'Diferencio handle de throw',
        'Escrevo um ticket com esses verbos',
      ],
    },
  ],
  project: {
    id: 'p2',
    title: 'Documentação de uma API real',
    explanation: 'Escolha uma API pública que você já usa ou quer usar. Leia a página de um endpoint sem tradutor automático, anote palavras novas e escreva um README curto em inglês explicando como chamá-lo.',
    examples: [
      {
        en: 'Authenticate with a bearer token in the Authorization header.',
        pt: 'Autentique com um token bearer no cabeçalho Authorization.',
        pronunciation: 'BÉ-râr TÔU-ken',
      },
      {
        en: 'Responses are paginated; use the cursor parameter.',
        pt: 'As respostas são paginadas; use o parâmetro cursor.',
        pronunciation: 'PÉ-dji-nei-tid',
      },
      {
        en: 'Unauthenticated requests are rate-limited.',
        pt: 'Requisições sem autenticação têm limite de taxa.',
        pronunciation: 'RÊIT LÍ-mi-tid',
      },
    ],
    exercises: [
      {
        kind: 'choice',
        prompt: "'Paginated' significa:",
        options: ['Dividido em páginas', 'Pago', 'Autenticado'],
        answer: 0,
      },
      {
        kind: 'writing',
        prompt: 'Escreva a seção Usage do endpoint escolhido em 3 a 5 linhas.',
        modelAnswer: '## Usage\nSend a GET request to /repos/{owner}/{repo} with your token.\nThe response is a JSON object with the repository details.\nNote: unauthenticated requests are rate-limited.',
      },
    ],
    checklist: [
      'Li a documentação sem tradutor',
      'Anotei 10 palavras novas',
      'Escrevi o README em inglês',
    ],
  },
}
