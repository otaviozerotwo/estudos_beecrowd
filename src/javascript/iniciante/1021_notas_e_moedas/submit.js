function solve(input) {
  let valor = Math.round(Number(input) * 100);
  let result;

  const notasDe100 = Math.floor(valor / 10000);
  valor %= 10000

  const notasDe50 = Math.floor(valor / 5000);
  valor %= 5000;

  const notasDe20 = Math.floor(valor / 2000);
  valor %= 2000;

  const notasDe10 = Math.floor(valor / 1000);
  valor %= 1000;

  const notasDe5 = Math.floor(valor / 500);
  valor %= 500;

  const notasDe2 = Math.floor(valor / 200);
  valor %= 200;

  const moedasDe1 = Math.floor(valor / 100);
  valor %= 100;

  const moedasDe050 = Math.floor(valor / 50);
  valor %= 50;

  const moedasDe025 = Math.floor(valor / 25);
  valor %= 25;

  const moedasDe010 = Math.floor(valor / 10);
  valor %= 10;

  const moedasDe005 = Math.floor(valor / 5);
  valor %= 5;

  const moedasDe001 = valor;

  result = `NOTAS:\n`;
  result += `${Math.trunc(notasDe100)} nota(s) de R$ 100.00\n`;
  result += `${Math.trunc(notasDe50)} nota(s) de R$ 50.00\n`;
  result += `${Math.trunc(notasDe20)} nota(s) de R$ 20.00\n`;
  result += `${Math.trunc(notasDe10)} nota(s) de R$ 10.00\n`;
  result += `${Math.trunc(notasDe5)} nota(s) de R$ 5.00\n`;
  result += `${Math.trunc(notasDe2)} nota(s) de R$ 2.00\n`;
  result += `MOEDAS:\n`;
  result += `${Math.trunc(moedasDe1)} moeda(s) de R$ 1.00\n`;
  result += `${Math.trunc(moedasDe050)} moeda(s) de R$ 0.50\n`;
  result += `${Math.trunc(moedasDe025)} moeda(s) de R$ 0.25\n`;
  result += `${Math.trunc(moedasDe010)} moeda(s) de R$ 0.10\n`;
  result += `${Math.trunc(moedasDe005)} moeda(s) de R$ 0.05\n`;
  result += `${Math.trunc(moedasDe001)} moeda(s) de R$ 0.01`;

  return result.trim();
}

module.exports = { solve };

const input = require('fs').readFileSync('input.txt', 'utf-8');

console.log(solve(input));