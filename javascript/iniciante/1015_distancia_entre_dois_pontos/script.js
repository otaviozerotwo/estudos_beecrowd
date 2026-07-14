/* Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, mostrando 4 casas decimais, segundo a fórmula:

Distancia = Math.sqrt(((x2 - x1)**2) + ((y2 - y1)**2))

* Entrada
O arquivo de entrada contém duas linhas de dados. A primeira linha contém dois valores de ponto flutuante: x1 y1 e a segunda linha contém dois valores de ponto flutuante x2 y2.

* Saída
Calcule e imprima o valor da distância segundo a fórmula fornecida, considerando 4 casas decimais. */

const prompt = require('prompt-sync')();

let entrada = prompt('Digite dois valores separados por espaço (ex: 1.0 7.0): ');
const p1 = entrada.split(' ');

const x1 = Number(p1[0]);
const y1 = Number(p1[1]);

entrada = prompt('Digite dois valores separados por espaço (ex: 5.0 9.0): ');
const p2 = entrada.split(' ');

const x2 = Number(p2[0]);
const y2 = Number(p2[1]);

const distancia = Math.sqrt(((x2 - x1)**2) + ((y2 - y1)**2));

console.log(distancia.toFixed(4));