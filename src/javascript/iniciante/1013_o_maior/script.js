/* Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. Utilize a fórmula:

MaiorAB = (a+b+abs(a-b)) / 2

Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo, portanto é necessário para chegar no resultado esperado.

* Entrada
O arquivo de entrada contém três valores inteiros.

* Saída
Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior". */

const input = require('fs').readFileSync('input.txt', 'utf-8');

const [valorA, valorB, valorC] = input.split(' ').map(Number);

const maiorAB = (valorA + valorB + Math.abs(valorA - valorB)) / 2;
const maior = (maiorAB + valorC + Math.abs(maiorAB - valorC)) / 2;

console.log(`${maior} eh o maior`);