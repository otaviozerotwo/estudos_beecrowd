function solve(input) {
  const [x, y] = input.split(' ').map(Number);

  if (x === 0 && y === 0) {
    return 'Origem';
  } else if (x > 0 && y > 0) {
    return 'Q1';
  } else if (x < 0 && y > 0) {
    return 'Q2';
  } else if (x < 0 && y < 0) {
    return 'Q3';
  } else if (x > 0 && y < 0) {
    return 'Q4'
  } else if (x === 0 && y !== 0) {
    return 'Eixo Y';
  } else if (x !== 0 && y === 0) {
    return 'Eixo X';
  }
}

module.exports = { solve };

const input = require('fs').readFileSync('input.txt', 'utf-8');

console.log(solve(input));