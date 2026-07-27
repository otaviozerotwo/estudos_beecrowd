const { solve } = require('./solution');

describe('1047 - Tempo de jogo com minutos', () => {
  it('deve resolver o exemplo do enunciado', () => {
    expect(solve('7 8 9 10')).toBe('O JOGO DUROU 2 HORA(S) E 2 MINUTO(S)');
  });

  it('deve resolver o exemplo do enunciado', () => {
    expect(solve('7 7 7 7')).toBe('O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)');
  });

  it('deve resolver o exemplo do enunciado', () => {
    expect(solve('7 10 8 9')).toBe('O JOGO DUROU 0 HORA(S) E 59 MINUTO(S)');
  });
});