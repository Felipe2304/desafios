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

const categoryProducts = products.reduce((acc , item)=>{
  acc[item.category] = acc[item.category] || []
  acc[item.category].push(item)

  return acc
})

console.log(categoryProducts)