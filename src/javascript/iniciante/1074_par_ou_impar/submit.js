const input = require('fs').readFileSync('input.txt', 'utf-8');

function solve(input) {
  const valores = input.trim().split('\n').map(Number);
  const n = valores.shift();
  const tipos = [];

  for (let i = 0; i < n; i++) {
    if (valores[i] === 0) {
      tipos.push('NULL');
    } else if ((valores[i] % 2 === 0) && (valores[i] > 0)) {
      tipos.push('EVEN POSITIVE');
    } else if ((valores[i] % 2 === 0) && (valores[i] < 0)) {
      tipos.push('EVEN NEGATIVE');
    } else if ((valores[i] % 2 !== 0) && (valores[i] > 0)) {
      tipos.push('ODD POSITIVE');
    } else {
      tipos.push('ODD NEGATIVE');
    }
  }

  return tipos.join('\n');
}

module.exports = { solve };

console.log(solve(input));