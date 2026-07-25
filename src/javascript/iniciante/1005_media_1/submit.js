function solve(input) {
  const lines = input.split('\n');
  
  const valorA = Number(lines[0]);
  const valorB = Number(lines[1]);
  
  const pesoValorA = 3.5;
  const pesoValorB = 7.5;
  
  const media = ((valorA * pesoValorA) + (valorB * pesoValorB)) / (pesoValorA + pesoValorB);
  
  return `MEDIA = ${media.toFixed(5)}`;
}

module.exports = { solve };

const input = require('fs').readFileSync('input.txt', 'utf-8');

console.log(solve(input));