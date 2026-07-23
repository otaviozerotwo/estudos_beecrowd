/* Leia 3 valores, no caso, variáveis A, B e C, que são as três notas de um aluno. A seguir, calcule a média do aluno, sabendo que a nota A tem peso 2, a nota B tem peso 3 e a nota C tem peso 5. Considere que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.

* Entrada
O arquivo de entrada contém 3 valores com uma casa decimal, de dupla precisão (double).

* Saída
Imprima a mensagem "MEDIA" e a média do aluno conforme exemplo abaixo, com 1 dígito após o ponto decimal e com um espaço em branco antes e depois da igualdade. Assim como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error". */

const input = require('fs').readFileSync('input.txt', 'utf-8');
const lines = input.split('\n');

const valorA = Number(lines[0]);
const valorB = Number(lines[1]);
const valorC = Number(lines[2]);

const pesoValorA = 2;
const pesoValorB = 3;
const pesoValorC = 5;

let media = ((valorA * pesoValorA) + (valorB * pesoValorB) + (valorC * pesoValorC)) / (pesoValorA + pesoValorB + pesoValorC);

console.log(`MEDIA = ${media.toFixed(1)}`);