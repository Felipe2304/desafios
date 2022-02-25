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

const goodMovies1 = films.reduce((acc , movie)=>{
  if(movie.grade >= 8 ) acc.goodMovies.push(movie)
  else acc.badMovies.push(movie)

  return acc
}, {badMovies:[] , goodMovies:[]})

console.log(goodMovies1)