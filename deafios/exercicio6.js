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
  "Harry Potter e a Pedra Filosofal": { livro: true, filme: true, ano: "2001" },
  "Harry Potter e a Câmara Secreta": { livro: true, filme: true, ano: "2002" },
  "Harry Potter e o Prisioneiro de Azkaban": {
    livro: true,
    filme: true,
    ano: "2004",
  },
  "Harry Potter e o Cálice de Fogo": { livro: true, filme: true, ano: "2005" },
  "Harry Potter e a Ordem da Fênix": { livro: true, filme: true, ano: "2007" },
  "Os Contos de Beedle, o Bardo": { livro: true, filme: false, ano: "2008" },
  "Harry Potter e o Enigma do Príncipe": {
    livro: true,
    filme: true,
    ano: "2009",
  },
  "Harry Potter e as Relíquias da Morte: Parte 1": {
    livro: true,
    filme: true,
    ano: "2010",
  },
  "Animais Fantásticos e Onde Habitam": {
    livro: false,
    filme: true,
    ano: "2016",
  },
  "Animais Fantásticos: Os Crimes de Grindelwald": {
    livro: false,
    filme: true,
    ano: "2018",
  },
  "Harry Potter e as Relíquias da Morte: Parte 2": {
    livro: true,
    filme: true,
    ano: "2011",
  },
};

const resulted = Object.keys(harryPotterContent).reduce((acc , item)=>{
  const itens = harryPotterContent[item]

  if(itens.filme && itens.livro ) acc.livroFilme.push(item)

  if(!itens.filme && itens.livro){
    acc.apenasLivro.push(item)
    acc.temLivro.push(item)
  }

  if(itens.filme && !itens.livro){
    acc.apenasFilme.push(item)
    acc.temFilme.push(item)
  }

  return acc
}, {livroFilme: [], apenasLivro: [], apenasFilme: [], temLivro: [], temFilme: []})

console.log(resulted)