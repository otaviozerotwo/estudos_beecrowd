const { solve } = require('./solution');

describe('1044 - Múltiplos', () => {
  it('deve resolver o exemplo do enunciado', () => {
    expect(solve('6 24')).toBe('Sao Multiplos');
  });

  it('deve resolver o exemplo do enunciado', () => {
    expect(solve('6 25')).toBe('Nao sao Multiplos');
  });
});