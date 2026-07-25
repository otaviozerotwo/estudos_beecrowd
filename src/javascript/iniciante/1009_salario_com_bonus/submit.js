function solve(input) {
  const lines = input.split('\n');

  const nomeVendedor = lines[0];
  const salarioFixo = Number(lines[1]);
  const valorTotalVendasMes = Number(lines[2]);

  const percentualComissao = 0.15;

  const salarioFinal = (valorTotalVendasMes * percentualComissao) + salarioFixo;

  return `TOTAL = R$ ${salarioFinal.toFixed(2)}`;
}

module.exports = { solve };

const input = require('fs').readFileSync('input.txt', 'utf-8');

console.log(solve(input));