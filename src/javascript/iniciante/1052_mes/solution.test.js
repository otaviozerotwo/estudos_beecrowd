const { solve } = require('./solution');

describe('1052 - Mês', () => {
  it('deve resolver o exemplo do enunciado', () => {
    expect(solve('4')).toBe('April');
  });
});