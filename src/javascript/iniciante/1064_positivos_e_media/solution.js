/* Leia 6 valores. Em seguida, mostre quantos destes valores digitados foram positivos. Na próxima linha, deve-se mostrar a média de todos os valores positivos digitados, com um dígito após o ponto decimal.

* Entrada
A entrada contém 6 números que podem ser valores inteiros ou de ponto flutuante. Pelo menos um destes números será positivo.

* Saída
O primeiro valor de saída é a quantidade de valores positivos. A próxima linha deve mostrar a média dos valores positivos digitados. */

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