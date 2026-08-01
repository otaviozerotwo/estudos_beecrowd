const input = require('fs').readFileSync('input.txt', 'utf-8');

function solve(input) {
  const n = Number(input);
  const resultado = [];

  for (let i = 1; i <= 10000; i++) {
    if (i % n === 2) {
      resultado.push(i);
    }
  }

  return resultado.join('\n');
}

module.exports = { solve };

console.log(solve(input));