const input = require('fs').readFileSync('input.txt', 'utf-8');

function solve(input) {
  const [horaInicial, horaFinal] = input.split(' ').map(Number);

  if (horaInicial === horaFinal) {
    return 'O JOGO DUROU 24 HORA(S)';
  } else if (horaInicial < horaFinal) {
    return `O JOGO DUROU ${horaFinal - horaInicial} HORA(S)`;
  } else {
    return `O JOGO DUROU ${(24 - horaInicial) + horaFinal} HORA(S)`;
  }
}

module.exports = { solve };

console.log(solve(input));