const input = require('fs').readFileSync('input.txt', 'utf-8');

function solve(input) {
  const x = Number(input);
  let impares = [];

  for (let i = 1; i <= x; i++) {
    if (i % 2 !== 0) {
      impares.push(i);
    }
  }

  return impares.join('\n');
}

module.exports = { solve };

console.log(solve(input));