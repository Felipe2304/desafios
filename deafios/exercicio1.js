// EXERCÍCIO 1:
// Converter temperatura de Fahrenheit para Celsius:
// deve retornar um objeto com a temperatura em graus Celsius e em graus Fahrenheit.
// EXEMPLO: { Fahrenheit: 212, Celsius: 100 }
// deve utilizar map
// nota: 1 grau de Celsius = (Fahrenheit - 32) / ( 5 / 9 )

const fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

const temperatureInCelcius = fahrenheit.map((temperature) => {
  return {
    fahrenheit: temperature,
    celsius: (temperature - 32) * (5 / 9).toFixed(2),
  };
});

console.log(temperatureInCelcius);
