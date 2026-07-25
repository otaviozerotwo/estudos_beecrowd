function solve(input) {
  const lines = input.split('\n');
  
  const valor1 = Number(lines[0]);
  const valor2 = Number(lines[1]);
  
  const produto = valor1 * valor2;
  
  return `PROD = ${produto}`;
}

module.exports = { solve };

const input = require('fs').readFileSync('input.txt', 'utf-8');

console.log(solve(input));