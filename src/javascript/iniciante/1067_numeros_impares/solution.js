/* Leia um valor inteiro X (1 <= X <= 1000). Em seguida mostre os ímpares de 1 até X, um valor por linha, inclusive o X, se for o caso.

* Entrada
O arquivo de entrada contém 1 valor inteiro qualquer.

* Saída
Imprima todos os valores ímpares de 1 até X, inclusive X, se for o caso. */

function solve(input) {
  const x = Number(input);
  let impares = [];

  for (let i = 1; i <= x; i++) {
    if (i % 2 !== 0) {
      impares.push(i);
    }
  }

  return impares.join('\n');
}

module.exports = { solve };