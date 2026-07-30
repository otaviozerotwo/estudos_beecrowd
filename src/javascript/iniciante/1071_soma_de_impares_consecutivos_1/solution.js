/* Leia 2 valores inteiros X e Y. A seguir, calcule e mostre a soma dos números impares entre eles.

* Entrada
O arquivo de entrada contém dois valores inteiros.

* Saída
O programa deve imprimir um valor inteiro. Este valor é a soma dos valores ímpares que estão entre os valores fornecidos na entrada que deverá caber em um inteiro. */

function solve(input) {
  const [x, y] = input.trim().split('\n').map(Number);
  let maior, menor;
  let proximoValor;
  let intervalo = [];

  if (x === y) {
    return 0;
  } else if (x < y) {
    menor = x;
    maior = y;
  } else {
    menor = y;
    maior = x;
  }

  if ((menor % 2 === 0) && ((maior - menor) > 2)) {
    proximoValor = menor + 1;
  } else if ((menor % 2 !== 0) && ((maior - menor) > 2)) {
    proximoValor = menor + 2;
  } else {
    proximoValor = 0;
  }

  while (proximoValor < maior) {
    intervalo.push(proximoValor);
    proximoValor += 2;
  }

  const soma = intervalo.reduce((acc, cur) => acc + cur, 0);
  
  return soma;
}

module.exports = { solve };