/*
1. ler 2 valores e armazená-los em variáveis (x, y)
2. criar variáveis: menor, maior, proximoValor e o array de ímpares (intervalo)
3. verificar se x === y, caso sim, return 0
4. se x < y, menor = x e maior = y
5. se x > y, menor = y e maior = x
6. caso menor seja par e a diferença entre maior e menor seja < 2, atribuir proximoValor = menor + 1
7. caso menor seja ímpar e a diferença entre maior e menor seja < 2, atribuir proximoValor = menor + 2
8. caso não atenda nenhuma das condicões acima, proximoValor = 0
9. criar loop para iterar enquanto proximoValor < maior
10. a cada iteração adicionar proximoValor ao array intervalo e incrementar proximoValor em 2
11. percorrer o array de intervalo e somar cada item (com reduce)
12. retornar o resultado do reduce
*/

const input = require('fs').readFileSync('input.txt', 'utf-8');

function solve(input) {
  const [x, y] = input.trim().split('\n').map(Number);
  let maior, menor;
  let proximoValor;
  let intervalo = [];

  if (x === y) {
    return 0;
  } else if (x < y) {
    menor = x;
    maior = y;
  } else {
    menor = y;
    maior = x;
  }

  if ((menor % 2 === 0) && ((maior - menor) > 2)) {
    proximoValor = menor + 1;
  } else if ((menor % 2 !== 0) && ((maior - menor) > 2)) {
    proximoValor = menor + 2;
  } else {
    proximoValor = 0;
  }

  while (proximoValor < maior) {
    intervalo.push(proximoValor);
    proximoValor += 2;
  }

  const soma = intervalo.reduce((acc, cur) => acc + cur, 0);
  
  return soma;
}

module.exports = { solve };

console.log(solve(input));