/* Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.

* Entrada
O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).

* Saída
Imprima o valor lido e, em seguida, a quantidade mínima de notas de cada tipo necessárias, conforme o exemplo fornecido. Não esqueça de imprimir o fim de linha após cada linha, caso contrário seu programa apresentará a mensagem: “Presentation Error”. */

const input = require('fs').readFileSync('input.txt', 'utf-8');
let valorLido;

do {
  valorLido = Number(input);

  if (valorLido <= 0 || valorLido >= 1000000) {
    console.log('O valor precisa estar entre 0 e 1000000');
  } else {
    const qtdNotasDe100 = valorLido / 100;
    let restoDaDivisao = valorLido % 100;
  
    const qtdNotasDe50 = restoDaDivisao / 50;
    restoDaDivisao = restoDaDivisao % 50;
  
    const qtdNotasDe20 = restoDaDivisao / 20;
    restoDaDivisao = restoDaDivisao % 20;
  
    const qtdNotasDe10 = restoDaDivisao / 10;
    restoDaDivisao = restoDaDivisao % 10;
  
    const qtdNotasDe5 = restoDaDivisao / 5;
    restoDaDivisao = restoDaDivisao % 5;
  
    const qtdNotasDe2 = restoDaDivisao / 2;
    restoDaDivisao = restoDaDivisao % 2;
  
    const qtdNotasDe1 = restoDaDivisao / 1;
    restoDaDivisao = restoDaDivisao % 1;
  
    console.log(valorLido);
    console.log(Math.trunc(qtdNotasDe100) + ' nota(s) de R$ 100,00');
    console.log(Math.trunc(qtdNotasDe50) + ' nota(s) de R$ 50,00');
    console.log(Math.trunc(qtdNotasDe20) + ' nota(s) de R$ 20,00');
    console.log(Math.trunc(qtdNotasDe10) + ' nota(s) de R$ 10,00');
    console.log(Math.trunc(qtdNotasDe5) + ' nota(s) de R$ 5,00');
    console.log(Math.trunc(qtdNotasDe2) + ' nota(s) de R$ 2,00');
    console.log(Math.trunc(qtdNotasDe1) + ' nota(s) de R$ 1,00');
  }

} while (valorLido <= 0 || valorLido >= 1000000);