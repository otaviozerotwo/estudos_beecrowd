function solve(input) {
  const PI = 3.14159;

  const raio = Number(input);

  const volume = (4/3.0) * PI * (raio ** 3);

  return `VOLUME = ${volume.toFixed(3)}`;
}

module.exports = { solve };

const input = require('fs').readFileSync('input.txt', 'utf-8');

console.log(solve(input));