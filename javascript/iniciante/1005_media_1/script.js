/* Leia 2 valores de ponto flutuante de dupla precisão A e B, que correspondem a 2 notas de um aluno. A seguir, calcule a média do aluno, sabendo que a nota A tem peso 3.5 e a nota B tem peso 7.5 (A soma dos pesos portanto é 11). Assuma que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.

* Entrada
O arquivo de entrada contém 2 valores com uma casa decimal cada um.

* Saída
Imprima a mensagem "MEDIA" e a média do aluno conforme exemplo abaixo, com 5 dígitos após o ponto decimal e com um espaço em branco antes e depois da igualdade. Utilize variáveis de dupla precisão (double) e como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error". */

const prompt = require('prompt-sync')();

let A;
let B;

do {
  A = prompt('A: ');

  if (A < 0 || A > 10.0) {
    console.log('O valor de A precisar estar entre 0 e 10.0');
  }

  A = Number(A).toFixed(1);
  console.log(`A = ${A}`);

} while (A < 0 || A > 10.0);

do {
  B = prompt('B: ');

  if (B < 0 || B > 10.0) {
    console.log('O valor de B precisar estar entre 0 e 10.0');
  }

  B = Number(B).toFixed(1);
  console.log(`B = ${B}`);

} while (B < 0 || B > 10.0);

let media = ((A * 3.5) + (B * 7.5)) / 11;

console.log(`MEDIA = ${media.toFixed(5)}`);