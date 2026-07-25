function solve(input) {
  let [codigo, quantidade] = input.split(' ').map(Number);
  let total;

  if (quantidade === undefined) {
    quantidade = 0;
  }

  switch (codigo) {
    case 1:
      total = 4.00 * quantidade;
      return `Total: R$ ${total.toFixed(2)}`;
    case 2:
      total = 4.50 * quantidade;
      return `Total: R$ ${total.toFixed(2)}`;
    case 3:
      total = 5.00 * quantidade;
      return `Total: R$ ${total.toFixed(2)}`;
    case 4:
      total = 2.00 * quantidade;
      return `Total: R$ ${total.toFixed(2)}`;
    case 5:
      total = 1.50 * quantidade;
      return `Total: R$ ${total.toFixed(2)}`;
    default:
      return null;
  }
}

module.exports = { solve };

const input = require('fs').readFileSync('input.txt', 'utf-8');

console.log(solve(input));