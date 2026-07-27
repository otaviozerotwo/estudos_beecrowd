/* Leia a hora inicial, minuto inicial, hora final e minuto final de um jogo. A seguir calcule a duração do jogo.

Obs: O jogo tem duração mínima de um (1) minuto e duração máxima de 24 horas.

* Entrada
Quatro números inteiros representando a hora de início e fim do jogo.

* Saída
Mostre a seguinte mensagem: “O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)” . */

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