function solve(input) {
  const lines = input.split('\n');
  
  const distancia = Number(lines[0]);
  const combustivelGasto = Number(lines[1]);
  
  const consumoMedio = Number(distancia) / Number(combustivelGasto);
  
  return `${consumoMedio.toFixed(3)} km/l`;
}

module.exports = { solve };

const input = require('fs').readFileSync('input.txt', 'utf-8');

console.log(solve(input));