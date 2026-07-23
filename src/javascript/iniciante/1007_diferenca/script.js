/* Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto de A e B pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).

* Entrada
O arquivo de entrada contém 4 valores inteiros.

* Saída
Imprima a mensagem DIFERENCA com todas as letras maiúsculas, conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade. */

const input = require('fs').readFileSync('input.txt', 'utf-8');
const lines = input.split('\n');

const valorA = Number(lines[0]);
const valorB = Number(lines[1]);
const valorC = Number(lines[2]);
const valorD = Number(lines[3]);

const diferenca = (valorA * valorB - valorC * valorD);

console.log(`DIFERENCA = ${diferenca}`);