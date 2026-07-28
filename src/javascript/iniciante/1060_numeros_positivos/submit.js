/*
1. ler 6 valores, um em cada linha
2. verificar se cada um dos valores é positivo ou negativo
3. se for positivo, somar num contador
4. retornar valor final do contador
*/

const input = require('fs').readFileSync('input.txt', 'utf-8');

function solve(input) {
  let count = 0;
  
  input.split('\n').forEach(value => {
    if (value > 0) {
      count++;
    }
  });;

  const message = `${count} valores positivos`;
  
  return message;
}

module.exports = { solve };

console.log(solve(input));