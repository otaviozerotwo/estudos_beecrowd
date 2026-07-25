function solve(input) {
  const PI = 3.14159;
  
  const raio = Number(input);
  
  const area = PI * (raio**2);
  
  return `A=${area.toFixed(4)}`;
}

module.exports = { solve };

const input = require('fs').readFileSync('input.txt', 'utf-8');

console.log(solve(input));