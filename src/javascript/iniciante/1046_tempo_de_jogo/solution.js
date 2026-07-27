/* Leia a hora inicial e a hora final de um jogo. A seguir calcule a duração do jogo, sabendo que o mesmo pode começar em um dia e terminar em outro, tendo uma duração mínima de 1 hora e máxima de 24 horas.

* Entrada
A entrada contém dois valores inteiros representando a hora de início e a hora de fim do jogo.

* Saída
Apresente a duração do jogo conforme exemplo abaixo. */

//1. ler a hora inicial e a hora final
//2. verificar se os valores são iguais, caso sim, retornar 24 horas
//3. verificar se o primeiro valor é menor que o segundo, caso sim, subtrair o segundo pelo primeiro
//4. verificar se o primeiro valor é maior que o segundo, caso sim, subtrar 24 pelo primeiro e somar o resultado com o segundo

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