// EXERCÍCIO 1:
// Converter temperatura de Fahrenheit para Celsius:
// deve retornar um objeto com a temperatura em graus Celsius e em graus Fahrenheit.
// EXEMPLO: { Fahrenheit: 212, Celsius: 100 }
// deve utilizar map
// nota: 1 grau de Celsius = (Fahrenheit - 32) / ( 5 / 9 )

const fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

// EXERCÍCIO 2:
// Remover elementos duplicados de um array:
// esse exercício deve ser resolvido de 2 formas com filter e posteriormente com  reduce.
// EXEMPLO: [ 1, 2, 3, 4, 5...]

const duplicated = [5, 7, 8, 9, 10, 5, 7, 6, 3, 2, 8, 6, 1, 10, 50, 20, 30, 0];

// EXERCÍCIO 3:
// Realizar a soma de lançamentos de foguetes em um período de 1 ano:
// esse exercício deve retornar um objeto com a quantidade de foguetes lançados e a quantidade de países que lançaram foguetes.
// EXEMPLO: { foguetes: 5, países: 2 }
// deve ser resolvido com reduce.

const rocketsLaunches = [
  { country: 'Russia', launches: 32 },
  { country: 'US', launches: 23 },
  { country: 'China', launches: 16 },
  { country: 'Europe(ESA)', launches: 7 },
  { country: 'India', launches: 4 },
  { country: 'Japan', launches: 3 },
];

// EXERCÍCIO 4:
// Formatação de dados:
// esse exercício deve retornar um objeto com os itens separados por categoria.
// EXEMPLO: { Vestuário: [ { id: 123, name: "Blusa", color: "preto", size: "G", category: "Vestuário" }... ], Esporte: [ { id: 123, name: "Rede", color: "preto", size: "100m", category: "Esporte" } ] }
// deve ser resolvido com reduce.

const products = [
  {
    id: 123,
    name: 'Camiseta',
    color: 'preto',
    size: 'G',
    category: 'Vestuário',
  },
  {
    id: 125,
    name: 'Shorts',
    color: 'preto',
    size: 'G',
    category: 'Vestuário',
  },
  {
    id: 456,
    name: 'Tênis',
    color: 'preto',
    size: '41',
    category: 'Vestuário',
  },
  {
    id: 789,
    name: 'Bola',
    color: 'verde',
    size: 'Único',
    category: 'Esporte',
  },
];

// EXERCÍCIO 5:
// Filtro de filmes pela classificação
// esse exercício deve retornar um objeto com os filmes classificados por classificação.
// EXEMPLO: { badMovies: [ { title: "Bad Movie", grade: "7.7" }... ], goodMovies: [ { title: "Good Movie", grade: "8.7" } ] }
// deve ser resolvido com reduce.
// nota: goodMovies deve ser um array de filmes com classificação maior ou igual a 8

const films = [
  { title: 'Titanic', time: 195, grade: 7.5 },
  { title: 'The Avengers', time: 203, grade: 9.5 },
  { title: 'Bean', time: 90, grade: 6.5 },
  { title: 'Harry Potter Deathly Hallows', time: 130, grade: 8.1 },
  { title: 'The Shawshank Redemption', time: 142, grade: 9.3 },
];

// EXERCÍCIO 6:
// agrupamento de filmes por tipo de conteúdo
// esse exercício deve retornar um objeto com os filmes agrupados por tipo de conteúdo.
// EXEMPLO: { livroFilme: [], apenasLivro: [], apenasFilme: [], temLivro: [], temFilme: [] }
// deve ser resolvido com reduce.
// nota: apenasLivro deve ser um array de livros que não tem conteúdo de filme
// nota: apenasFilme deve ser um array de filmes que não tem conteúdo de livro
// nota: temLivro deve ser um array que tem conteúdo de livro
// nota: temFilme deve ser um array que tem conteúdo de filme
// nota: livroFilme deve ser um array que tem conteúdo de livro e de filme
// nota: para facilitar iterar o objeto, utilize o método keys do objeto Object

const harryPotterContent = {
  'Harry Potter e a Pedra Filosofal': { livro: true, filme: true, ano: '2001' },
  'Harry Potter e a Câmara Secreta': { livro: true, filme: true, ano: '2002' },
  'Harry Potter e o Prisioneiro de Azkaban': { livro: true, filme: true, ano: '2004' },
  'Harry Potter e o Cálice de Fogo': { livro: true, filme: true, ano: '2005' },
  'Harry Potter e a Ordem da Fênix': { livro: true, filme: true, ano: '2007' },
  'Os Contos de Beedle, o Bardo': { livro: true, filme: false, ano: '2008' },
  'Harry Potter e o Enigma do Príncipe': {
    livro: true,
    filme: true,
    ano: '2009',
  },
  'Harry Potter e as Relíquias da Morte: Parte 1': {
    livro: true,
    filme: true,
    ano: '2010',
  },
  'Animais Fantásticos e Onde Habitam': {
    livro: false,
    filme: true,
    ano: '2016',
  },
  'Animais Fantásticos: Os Crimes de Grindelwald': {
    livro: false,
    filme: true,
    ano: '2018',
  },
  'Harry Potter e as Relíquias da Morte: Parte 2': {
    livro: true,
    filme: true,
    ano: '2011',
  },
};

// EXERCÍCIO 7:
// usar reduce para montar uma lista com os números pares e impares
// { pares: [2,4,6...], impares: [1,3,5....] }

const arrayEx7 = [10, 50, 1, 2, 6, 8, 9, 11, 33, 41];