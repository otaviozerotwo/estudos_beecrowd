/*
1. ler 5 valores, um em cada linha
2. verificar quantos são pares
3. retornar a quantidade de pares
*/

const input = require('fs').readFileSync('input.txt', 'utf-8');

function solve(input) {
  const valores = input.trim().split('\n').map(Number);

  const quantidadePares = valores.filter(valor => valor % 2 === 0).length;

  return `${quantidadePares} valores pares`;
}

module.exports = { solve };

console.log(solve(input));