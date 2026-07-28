/* Leia um valor inteiro entre 1 e 12, inclusive. Correspondente a este valor, deve ser apresentado como resposta o mês do ano por extenso, em inglês, com a primeira letra maiúscula.

* Entrada
A entrada contém um único valor inteiro.

* Saída
Imprima por extenso o nome do mês correspondente ao número existente na entrada, com a primeira letra em maiúscula. */

function solve(input) {
  const mes = Number(input);

  switch (mes) {
    case 1:
      return 'January';
    case 2:
      return 'February';
    case 3:
      return 'March';
    case 4:
      return 'April';
    case 5:
      return 'May';
    case 6:
      return 'June';
    case 7:
      return 'July';
    case 8:
      return 'August';
    case 9:
      return 'September';
    case 10:
      return 'October';
    case 11:
      return 'November';
    case 12:
      return 'December';
    default:
      return;
  }
}

module.exports = { solve };