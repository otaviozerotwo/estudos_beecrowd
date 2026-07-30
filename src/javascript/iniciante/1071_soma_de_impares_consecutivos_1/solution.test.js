const { solve } = require('./solution');

describe('1071 - Soma de Ímpares Consecutivos I', () => {
  it('deve resolver o exemplo do enunciado', () => {
    expect(solve('6\n-5')).toBe(5);
  });

  it('deve resolver o exemplo do enunciado', () => {
    expect(solve('15\n12')).toBe(13);
  });

  it('deve resolver o exemplo do enunciado', () => {
    expect(solve('12\n12')).toBe(0);
  });
});