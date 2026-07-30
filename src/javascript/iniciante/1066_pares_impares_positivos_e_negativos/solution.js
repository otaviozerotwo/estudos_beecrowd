/* Leia 5 valores Inteiros. A seguir mostre quantos valores digitados foram pares, quantos valores digitados foram ímpares, quantos valores digitados foram positivos e quantos valores digitados foram negativos.

* Entrada
O arquivo de entrada contém 5 valores inteiros quaisquer.

* Saída
Imprima a mensagem conforme o exemplo fornecido, uma mensagem por linha, não esquecendo o final de linha após cada uma. */

function solve(input) {
  const valores = input.trim().split('\n').map(Number);
  let mensagem;

  const pares = valores.filter(valor => valor % 2 === 0).length;
  const impares = valores.filter(valor => valor % 2 !== 0).length;
  const positivos = valores.filter(valor => valor > 0).length;
  const negativos = valores.filter(valor => valor < 0).length;
  
  mensagem = `${pares} valor(es) par(es)\n`;
  mensagem += `${impares} valor(es) impar(es)\n`;
  mensagem += `${positivos} valor(es) positivo(s)\n`;
  mensagem += `${negativos} valor(es) negativo(s)`;

  return mensagem;
}

module.exports = { solve };