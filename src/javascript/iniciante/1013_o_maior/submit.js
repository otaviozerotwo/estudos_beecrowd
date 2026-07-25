function solve(input) {
  const [valorA, valorB, valorC] = input.split(' ').map(Number);

  const maiorAB = (valorA + valorB + Math.abs(valorA - valorB)) / 2;
  const maior = (maiorAB + valorC + Math.abs(maiorAB - valorC)) / 2;

  return `${maior} eh o maior`;
}

module.exports = { solve };

const input = require('fs').readFileSync('input.txt', 'utf-8');

console.log(solve(input));