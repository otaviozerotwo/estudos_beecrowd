function solve(input) {
  const lines = input.split('\n');

  const valorA = Number(lines[0]);
  const valorB = Number(lines[1]);
  const valorC = Number(lines[2]);
  const valorD = Number(lines[3]);

  const diferenca = (valorA * valorB - valorC * valorD);

  return `DIFERENCA = ${diferenca}`;
}

module.exports = { solve };

const input = require('fs').readFileSync('input.txt', 'utf-8');

console.log(solve(input));