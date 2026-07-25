function solve(input) {
  const lines = input.split('\n');

  const [codigoP1, quantidadeP1, valorUnitarioP1] = lines[0].split(' ').map(Number);
  const [codigoP2, quantidadeP2, valorUnitarioP2] = lines[1].split(' ').map(Number);

  const valorDaCompra = (quantidadeP1 * valorUnitarioP1) + (quantidadeP2 * valorUnitarioP2);

  return `VALOR A PAGAR: R$ ${valorDaCompra.toFixed(2)}`;
}

module.exports = { solve };

const input = require('fs').readFileSync('input.txt', 'utf-8');

console.log(solve(input));