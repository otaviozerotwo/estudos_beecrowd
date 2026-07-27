/*
1. ler os valores
2. verificar em qual intervalo o valor de salario lido se encontra
3. calcular o aumento usando o percentual correspondente
4. retornar os resultados formatados 
*/

const input = require('fs').readFileSync('input.txt', 'utf-8');

function solve(input) {
  const salario = Number(input);
  let valorReajuste, novoSalario, percentualGanho, mensagem;

  if (salario >= 0 && salario <= 400.00) {
    percentualGanho = 15;
    valorReajuste = salario * percentualGanho / 100;
  } else if (salario >= 400.01 && salario <= 800.00) {
    percentualGanho = 12;
    valorReajuste = salario * percentualGanho / 100;
  } else if (salario >= 800.01 && salario <= 1200.00) {
    percentualGanho = 10;
    valorReajuste = salario * percentualGanho / 100;
  } else if (salario >= 1200.01 && salario <= 2000.00) {
    percentualGanho = 7;
    valorReajuste = salario * percentualGanho / 100;
  } else {
    percentualGanho = 4;
    valorReajuste = salario * percentualGanho / 100;
  }

  novoSalario = salario + valorReajuste;
  mensagem = `Novo salario: ${novoSalario.toFixed(2)}\n`;
  mensagem += `Reajuste ganho: ${valorReajuste.toFixed(2)}\n`;
  mensagem += `Em percentual: ${percentualGanho} %`;
  
  return mensagem;
}

module.exports = { solve };

console.log(solve(input));