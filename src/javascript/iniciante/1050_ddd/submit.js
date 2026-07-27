const input = require('fs').readFileSync('input.txt', 'utf-8');

function solve(input) {
  const ddd = Number(input);

  switch (ddd) {
    case 61:
      return 'Brasilia';
    case 71:
      return 'Salvador';
    case 11:
      return 'Sao Paulo';
    case 21:
      return 'Rio de Janeiro';
    case 32:
      return 'Juiz de Fora';
    case 19:
      return 'Campinas';
    case 27:
      return 'Vitoria';
    case 31:
      return 'Belo Horizonte';
    default:
      return 'DDD nao cadastrado'
  }
}

module.exports = { solve };

console.log(solve(input));