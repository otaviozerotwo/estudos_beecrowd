/* Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.

* Entrada
O arquivo de entrada contém um valor inteiro N.

* Saída
Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, conforme exemplo fornecido. */

const input = require('fs').readFileSync('input.txt', 'utf-8');

const tempoEmSegundos = Number(input);

const horas = tempoEmSegundos / 3600;
let restoDaDivisao = tempoEmSegundos % 3600;

const minutos = restoDaDivisao / 60;
restoDaDivisao = restoDaDivisao % 60;

const segundos = restoDaDivisao;

console.log(`${Math.trunc(horas)}:${Math.trunc(minutos)}:${Math.trunc(segundos)}`);