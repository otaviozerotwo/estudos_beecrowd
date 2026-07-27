/* A empresa ABC resolveu conceder um aumento de salários a seus funcionários de acordo com a tabela abaixo:

Salário	              Percentual de Reajuste
0 - 400.00                    15%
400.01 - 800.00               12%
800.01 - 1200.00              10%
1200.01 - 2000.00             7%
Acima de 2000.00              4%

Leia o salário do funcionário e calcule e mostre o novo salário, bem como o valor de reajuste ganho e o índice reajustado, em percentual.

* Entrada
A entrada contém apenas um valor de ponto flutuante, com duas casas decimais.

* Saída
Imprima 3 linhas na saída: o novo salário, o valor ganho de reajuste (ambos devem ser apresentados com 2 casas decimais) e o percentual de reajuste ganho. */

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