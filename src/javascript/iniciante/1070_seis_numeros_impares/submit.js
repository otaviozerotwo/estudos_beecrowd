/*
1. ler um valor e converter para type number
2. instanciar array vazio
3. criar variável para armazenar o próximo valor do array
4. verificar se o valor lido é par ou impar
5. se for par, adicionar o valor lido + 1 no array
6. se for impart, adicionar o valor lido no array
7. atribuir a variável que armazena o próximo valor o index 0 do array
8. criar loop de 1 até 5 para incrementar a variável do próximo valor de 2 em 2 e adicioná-la ao array
9. mostrar array formatado (1 valor por linha)
*/

const input = require('fs').readFileSync('input.txt', 'utf-8');

function solve(input) {
  const x = Number(input);
  let impares = [];
  let proximoValor;

  if (x % 2 === 0) {
    impares.push(x + 1);
  } else {
    impares.push(x);
  }

  proximoValor = impares[0];

  for (let i = 1; i < 6; i++) {
    proximoValor += 2;
    impares.push(proximoValor);
  }
  
  return impares.join('\n');
}

module.exports = { solve };

console.log(solve(input));