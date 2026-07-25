function solve(input) {
  const idadeEmDias = Number(input);
  let result;

  const anos = Math.trunc(idadeEmDias / 365);
  let restoDaDivisao = idadeEmDias % 365;

  const meses = Math.trunc(restoDaDivisao / 30);
  restoDaDivisao = restoDaDivisao % 30;

  const dias = Math.trunc(restoDaDivisao);

  result = `${anos} ano(s)\n`;
  result += `${meses} mes(es)\n`;
  result += `${dias} dia(s)`;
  
  return result.trim();
}

module.exports = { solve };

const input = require('fs').readFileSync('input.txt', 'utf-8');

console.log(solve(input));