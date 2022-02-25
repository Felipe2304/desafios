// EXERCÍCIO 2:
// Remover elementos duplicados de um array:
// esse exercício deve ser resolvido de 2 formas com filter e posteriormente com  reduce.
// EXEMPLO: [ 1, 2, 3, 4, 5...]

const duplicated = [5, 7, 8, 9, 10, 5, 7, 6, 3, 2, 8, 6, 1, 10, 50, 20, 30, 0];

// filter

const filteredNumbers = duplicated.filter((number , index , arr)=> arr.indexOf(number) === index)

// reduce

const numbers = duplicated.reduce((acc , number)=>{
  return acc.includes(number)? acc : [...acc,number]
},[])
