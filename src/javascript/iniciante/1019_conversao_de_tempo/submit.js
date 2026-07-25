function solve(input) {
  const tempoEmSegundos = Number(input);

  const horas = tempoEmSegundos / 3600;
  let restoDaDivisao = tempoEmSegundos % 3600;

  const minutos = restoDaDivisao / 60;
  restoDaDivisao = restoDaDivisao % 60;

  const segundos = restoDaDivisao;

  return `${Math.trunc(horas)}:${Math.trunc(minutos)}:${Math.trunc(segundos)}`;
}

module.exports = { solve };

const input = require('fs').readFileSync('input.txt', 'utf-8');

console.log(solve(input));