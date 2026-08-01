/*
1. ler um valor (n)
2. criar um array vazio
3. criar um loop de 1 até n
4. dentro do loop verificar se o contador é par, caso sim adicionar no array via template literals a linha com a expressão matemática
5. mostrar o array formatado
*/

const input = require('fs').readFileSync('input.txt', 'utf-8');

function solve(input) {
  const n = Number(input);
  const resultado = [];

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      resultado.push(`${i}^2 = ${i**2}`);
    }
  }
  return resultado.join('\n');
}

module.exports = { solve };

console.log(solve(input));