/* Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. Utilize a fórmula:

MaiorAB = (a+b+abs(a-b)) / 2

Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo, portanto é necessário para chegar no resultado esperado.

* Entrada
O arquivo de entrada contém três valores inteiros.

* Saída
Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior". */

const prompt = require('prompt-sync')();

console.log('Digite três valores separados por espaço (ex: 7 14 106): ');
const entrada = prompt();

const valores = entrada.split(' ');
const valorA = Number(valores[0]);
const valorB = Number(valores[1]);
const valorC = Number(valores[2]);

const maiorAB = (valorA + valorB + Math.abs(valorA - valorB)) / 2;
const maior = (maiorAB + valorC + Math.abs(maiorAB - valorC)) / 2;

console.log(`${maior} eh o maior`);