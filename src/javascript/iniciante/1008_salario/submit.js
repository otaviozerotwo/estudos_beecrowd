function solve(input) {
  const lines = input.split('\n');

  const numeroFuncionario = Number(lines[0]);
  const horasTrabalhadas = Number(lines[1]);
  const valorHora = Number(lines[2]);

  const salario = horasTrabalhadas * valorHora;

  return `NUMBER = ${numeroFuncionario}\nSALARY = R$ ${salario.toFixed(2)}`;
}

module.exports = { solve };

const input = require('fs').readFileSync('input.txt', 'utf-8');

console.log(solve(input));