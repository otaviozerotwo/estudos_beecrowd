/*
1. ler um valor (x)
2. ler mais a quantidade de valores recebidos em x (um em cada linha)
3. verificar se os valores lidos são maiores que 10 e menores que 20 (com filter)
4. caso sim, armazená-los em um array (dentroIntervalo)
5. caso não, armazená-los em outro array (foraIntervalo)
6. usar length para contar os itens de cada array
7. montar mensagem com a resposta
*/

const input = require('fs').readFileSync('input.txt', 'utf-8');

function solve(input) {
  const valores = input.trim().split('\n').map(Number);
  const x = valores.shift();

  const dentroIntervalo = valores.filter(valor => {
    if ((valor >= 10) && (valor <= 20)) {
      return valor;
    }
  });

  const foraIntervalo = valores.filter(valor => {
    if ((valor < 10) || (valor > 20)) {
      return valor;
    }
  });

  let mensagem;
  mensagem = `${dentroIntervalo.length} in\n`;
  mensagem += `${foraIntervalo.length} out`;

  return mensagem;
}

module.exports = { solve };

console.log(solve(input));