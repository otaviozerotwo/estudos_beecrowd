function solve(input) {
  const [A, B, C, D] = input.split(' ').map(Number);
  
  if ((B > C) && (D > A) && ((C + D) > (A + B)) && (C >= 0) && (D >= 0) && (A % 2 === 0)) {
    return 'Valores aceitos';
  } else {
    return 'Valores nao aceitos';
  }
}

module.exports = { solve };

const input = require('fs').readFileSync('input.txt', 'utf-8');

console.log(solve(input));