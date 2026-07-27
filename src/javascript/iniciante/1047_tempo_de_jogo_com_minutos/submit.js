/*
1. ler horaInicial, minutoInicial, horaFinal, minutoFinal
2. converter tudo para minutos
3. 
*/

const input = require('fs').readFileSync('input.txt', 'utf-8');

function solve(input) {
  const [horaInicial, minutoInicial, horaFinal, minutoFinal] = input.split(' ').map(Number);
  let horas, minutos;

  if (horaInicial === horaFinal && minutoInicial === minutoFinal) {
    horas = 24;
    minutos = 0
  } else if (horaInicial === horaFinal && minutoInicial < minutoFinal) {
    horas = 0;
    minutos = minutoFinal - minutoInicial;
  } else if (horaInicial === horaFinal && minutoInicial > minutoFinal) {
    horas = 23;
    minutos = (60 - minutoInicial) + minutoFinal;
  } else if (horaInicial < horaFinal && minutoInicial === minutoFinal) {
    horas = horaFinal - horaInicial;
    minutos = 0;
  } else if (horaInicial < horaFinal && minutoInicial < minutoFinal) {
    horas = horaFinal - horaInicial;
    minutos = minutoFinal - minutoInicial;
  } else if (horaInicial < horaFinal && minutoInicial > minutoFinal) {
    minutos = (60 - minutoInicial) + minutoFinal;
    horas = (horaFinal - horaInicial) - 1;
  } else if (horaInicial > horaFinal && minutoInicial < minutoFinal) {
    horas = Math.abs(horaInicial - 24) + horaFinal;
    minutos = minutoFinal - minutoInicial;
  } else if (horaInicial > horaFinal && minutoInicial > minutoFinal) {
    horas = (Math.abs(horaInicial - 24) - 1) + horaFinal;
    minutos = (60 - minutoInicial) + minutoFinal;
  }

  const message = `O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`;
  return message;
}

module.exports = { solve };

console.log(solve(input));