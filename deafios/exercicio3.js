// EXERCÍCIO 3:
// Realizar a soma de lançamentos de foguetes em um período de 1 ano:
// esse exercício deve retornar um objeto com a quantidade de foguetes lançados e a quantidade de países que lançaram foguetes.
// EXEMPLO: { foguetes: 5, países: 2 }
// deve ser resolvido com reduce.

const rocketsLaunches = [
  { country: "Russia", launches: 32 },
  { country: "US", launches: 23 },
  { country: "China", launches: 16 },
  { country: "Europe(ESA)", launches: 7 },
  { country: "India", launches: 4 },
  { country: "Japan", launches: 3 },
];

let counter = 0 
const quantiti = rocketsLaunches.reduce((acc, launche) => {
  acc.rockets = counter+= launche.launches
  acc.countrys = rocketsLaunches.length

  return acc
  
},{rockets:0 , countrys:0});

console.log(quantiti)
