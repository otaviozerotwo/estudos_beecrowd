const { solve } = require('./solution');

describe('1064 - Positivos e Média', () => {
  it('deve resolver o exemplo do enunciado', () => {
    const input = [
      7,
      -5,
      6,
      -3.4,
      4.6,
      12
    ].join('\n');

    const expected = [
      '4 valores positivos',
      '7.4'
    ].join('\n');

    expect(solve(input)).toBe(expected);
  });
});