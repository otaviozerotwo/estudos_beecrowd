/* Leia 3 valores, no caso, variáveis A, B e C, que são as três notas de um aluno. A seguir, calcule a média do aluno, sabendo que a nota A tem peso 2, a nota B tem peso 3 e a nota C tem peso 5. Considere que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.

* Entrada
O arquivo de entrada contém 3 valores com uma casa decimal, de dupla precisão (double).

* Saída
Imprima a mensagem "MEDIA" e a média do aluno conforme exemplo abaixo, com 1 dígito após o ponto decimal e com um espaço em branco antes e depois da igualdade. Assim como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error". */

const prompt = require('prompt-sync')();

let A;
let B;
let C;

const pesoDeA = 2;
const pesoDeB = 3;
const pesoDeC = 5;

do {
  A = prompt('A: ');

  if (A < 0 || A > 10.0) {
    console.log('O valor de A precisa estar entre 0 e 10.0');
  } else {
    A = Number(A).toFixed(1);
  }
  
} while (A < 0 || A > 10.0);

do {
  B = prompt('B: ');

  if (B < 0 || B > 10.0) {
    console.log('O valor de B precisa estar entre 0 e 10.0');
  } else {
    B = Number(B).toFixed(1);
  }

} while (B < 0 || B > 10.0);

do {
  C = prompt('C: ');

  if (C < 0 || C > 10.0) {
    console.log('O valor de C precisa estar entre 0 e 10.0');
  } else {
    C = Number(C).toFixed(1);
  }

} while (C < 0 || C > 10.0);

let media = ((A * pesoDeA) + (B * pesoDeB) + (C * pesoDeC)) / (pesoDeA + pesoDeB + pesoDeC);

console.log(`MEDIA = ${media.toFixed(1)}`);