function solve(input) {
  const lines = input.split('\n');

  const tempoEmHoras = Number(lines[0]);
  const velocidadeMedia = Number(lines[1]);

  const distancia = velocidadeMedia * tempoEmHoras;

  const consumoCombustivel = distancia / 12;

  return consumoCombustivel.toFixed(3);
}

module.exports = { solve };

const input = require('fs').readFileSync('input.txt', 'utf-8');

console.log(solve(input));