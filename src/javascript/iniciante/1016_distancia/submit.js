function solve(input) {
  const distancia = Number(input);
  
  const tempo = distancia * 2;
  
  return `${tempo} minutos`;
}

module.exports = { solve };

const input = require('fs').readFileSync('input.txt', 'utf-8');

console.log(solve(input));