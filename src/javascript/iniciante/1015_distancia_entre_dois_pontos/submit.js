function solve(input) {
  const lines = input.split('\n');

  const [x1, y1] = lines[0].split(' ').map(Number);
  const [x2, y2] = lines[1].split(' ').map(Number);

  const distancia = Math.sqrt(((x2 - x1)**2) + ((y2 - y1)**2));

  return distancia.toFixed(4);
}

module.exports = { solve };

const input = require('fs').readFileSync('input.txt', 'utf-8');

console.log(solve(input));