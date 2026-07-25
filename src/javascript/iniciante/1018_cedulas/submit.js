function solve(input) {
  const valorLido = Number(input);
  let result = `${valorLido}\n`;
  
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

  result += `${Math.trunc(qtdNotasDe100)} nota(s) de R$ 100,00\n`;
  result += `${Math.trunc(qtdNotasDe50)}  nota(s) de R$ 50,00\n`;
  result += `${Math.trunc(qtdNotasDe20)}  nota(s) de R$ 20,00\n`;
  result += `${Math.trunc(qtdNotasDe10)}  nota(s) de R$ 10,00\n`;
  result += `${Math.trunc(qtdNotasDe5)}  nota(s) de R$ 5,00\n`;
  result += `${Math.trunc(qtdNotasDe2)}  nota(s) de R$ 2,00\n`;
  result += `${Math.trunc(qtdNotasDe1)}  nota(s) de R$ 1,00\n`;

  return result.trim();
}

module.exports = { solve };

const input = require('fs').readFileSync('input.txt', 'utf-8');

console.log(solve(input));