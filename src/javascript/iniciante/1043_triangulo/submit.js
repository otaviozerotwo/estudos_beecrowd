/* 
para 3 valores formarem um triângulo, a soma dos comprimentos de quaisquer 2 lados deve ser sempre maior que o comprimento do terceiro lado

FÓRMULA: (A + B > C) && (A + C > B) && (B + C > A) 
*/
const input = require('fs').readFileSync('input.txt', 'utf-8');

function solve(input) {
  const [a, b, c] = input.split(' ').map(Number);

  if ((a + b > c) && (a + c > b) && (b + c > a)) {
    const perimetro = a + b + c;

    return `Perimetro = ${perimetro.toFixed(1)}`;
  } else {
    const areaTrapezio = (a + b) * c / 2;

    return `Area = ${areaTrapezio.toFixed(1)}`;
  }
}

module.exports = { solve };

console.log(solve(input));