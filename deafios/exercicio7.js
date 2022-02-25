// EXERCÍCIO 7:
// usar reduce para montar uma lista com os números pares e impares
// { pares: [2,4,6...], impares: [1,3,5....] }

const arrayEx7 = [10, 50, 1, 2, 6, 8, 9, 11, 33, 41];

const numbers = arrayEx7.reduce((acc , number)=>{
  if(number % 2 === 0 ) acc.pairs.push(number)
  else acc.odd.push(number)

  return acc
}, {pairs:[] , odd:[]})

console.log(numbers)