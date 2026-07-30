/*
1. ler 5 valores, um em cada linha
2. utilizar filter para percorrer e contar quantos valores são pares
3. utilizar filter para percorrer e contar quantos valores são ímpares
4. utilizar filter para percorrer e contar quantos valores são positivos
5. utilizar filter para percorrer e contar quantos valores são negativos
6. montar mensagem com valores das variáveis geradas pelos filters (com formatação especificada)
7. mostrar mensagem
*/

const input = require('fs').readFileSync('input.txt', 'utf-8');

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

console.log(solve(input));