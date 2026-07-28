/*
1. ler 6 valores, um em cada linha e armazenar em um array
2. percorrer o array, verificar quais são positivos e armazenar em outro array os valores positivos
3. armazenar tamanho do array de positivos em uma variável
4. somar os valores do array de positivos e armazenar em uma variável
5. calcular a média dos valores positivos (soma / quantidade)
6. mostrar quantidade de positivos e a média em linhas separadas
*/

const input = require('fs').readFileSync('input.txt', 'utf-8');

function solve(input) {
  let mensagem;

  const valores = input.split('\n').map(Number);
  
  const positivos = valores.filter(valor => {
    if (valor > 0) {
      return valor;
    }
  })

  const quantidadePositivos = positivos.length;
  const soma = positivos.reduce((acc, cur) => acc + cur, 0);
  const media = soma / quantidadePositivos;
  
  mensagem = `${quantidadePositivos} valores positivos\n`;
  mensagem += media.toFixed(1);

  return mensagem;
}

module.exports = { solve };

console.log(solve(input));