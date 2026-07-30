/*
Faça um programa que leia 5 valores inteiros. Conte quantos destes valores digitados são pares e mostre esta informação.

* Entrada
O arquivo de entrada contém 5 valores inteiros quaisquer.

* Saída
Imprima a mensagem conforme o exemplo fornecido, indicando a quantidade de valores pares lidos.
*/

function solve(input) {
  const valores = input.trim().split('\n').map(Number);

  const quantidadePares = valores.filter(valor => valor % 2 === 0).length;

  return `${quantidadePares} valores pares`;
}

module.exports = { solve };