const { solve } = require('./solution');

describe('1046 - Tempo de jogo', () => {
  it('deve resolver o exemplo do enunciado', () => {
    expect(solve('16 2')).toBe('O JOGO DUROU 10 HORA(S)');
  });

  it('deve resolver o exemplo do enunciado', () => {
    expect(solve('0 0')).toBe('O JOGO DUROU 24 HORA(S)');
  });

  it('deve resolver o exemplo do enunciado', () => {
    expect(solve('2 16')).toBe('O JOGO DUROU 14 HORA(S)');
  });
});