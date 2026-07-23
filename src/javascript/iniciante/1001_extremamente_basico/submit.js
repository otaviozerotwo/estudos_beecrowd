function solve(input) {
  const lines = input.split('\n');
  const a = Number(lines[0]);
  const b = Number(lines[1]);

  const x = a + b;

  return `X = ${x}`;
}

module.exports = { solve };

const input = require('fs').readFileSync('input.txt', 'utf-8');

console.log(solve(input));