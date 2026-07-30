/* Leia um valor inteiro X. Em seguida apresente os 6 valores ímpares consecutivos a partir de X, um valor por linha, inclusive o X ser for o caso.

* Entrada
A entrada será um valor inteiro positivo.

* Saída
A saída será uma sequência de seis números ímpares. */

function solve(input) {
  const x = Number(input);
  let impares = [];
  let proximoValor;

  if (x % 2 === 0) {
    impares.push(x + 1);
  } else {
    impares.push(x);
  }

  proximoValor = impares[0];

  for (let i = 1; i < 6; i++) {
    proximoValor += 2;
    impares.push(proximoValor);
  }
  
  return impares.join('\n');
}

module.exports = { solve };