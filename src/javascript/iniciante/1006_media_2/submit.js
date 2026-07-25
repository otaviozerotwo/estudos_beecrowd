function solve(input) {
  const lines = input.split('\n');

  const valorA = Number(lines[0]);
  const valorB = Number(lines[1]);
  const valorC = Number(lines[2]);

  const pesoValorA = 2;
  const pesoValorB = 3;
  const pesoValorC = 5;

  let media = ((valorA * pesoValorA) + (valorB * pesoValorB) + (valorC * pesoValorC)) / (pesoValorA + pesoValorB + pesoValorC);

  return `MEDIA = ${media.toFixed(1)}`;
}

module.exports = { solve };

const input = require('fs').readFileSync('input.txt', 'utf-8');

console.log(solve(input));