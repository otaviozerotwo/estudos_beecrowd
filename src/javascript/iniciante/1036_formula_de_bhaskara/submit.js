function solve(input) {
  const [a, b, c] = input.split(' ').map(Number);
  let result;
  const delta = (b**2) - (4 * a * c);

  if (delta < 0 || a === 0) {
    result = 'Impossivel calcular';

    return result;
  } else {
    const r1 = (-b + Math.sqrt(delta)) / (2 * a);

    const r2 = (-b - Math.sqrt(delta)) / (2 * a);

    result = `R1 = ${r1.toFixed(5)}\n`;
    result += `R2 = ${r2.toFixed(5)}`;

    return result;
  }
}

module.exports = { solve };

const input = require('fs').readFileSync('input.txt', 'utf-8');

console.log(solve(input));