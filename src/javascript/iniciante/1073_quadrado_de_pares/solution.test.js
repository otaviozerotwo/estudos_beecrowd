const { solve } = require('./solution');

describe('1073 - Quadrado de Pares', () => {
  it('deve resolver o exemplo do enunciado', () => {
    const expected = [
      '2^2 = 4',
      '4^2 = 16',
      '6^2 = 36'
    ].join('\n');

    expect(solve(6)).toBe(expected);
  });
});