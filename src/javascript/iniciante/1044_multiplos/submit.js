const input = require('fs').readFileSync('input.txt', 'utf-8');

function solve(input) {
  const [a, b] = input.split(' ').map(Number);

  if (a > b) {
    if (a % b === 0) {
      return 'Sao Multiplos';
    } else {
      return 'Nao sao Multiplos';
    }
  } else {
    if (b % a === 0) {
      return 'Sao Multiplos';
    } else {
      return 'Nao sao Multiplos';
    }
  }
}

module.exports = { solve };

console.log(solve(input));