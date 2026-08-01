const { solve } = require('./solution');

describe('1072 - Intervalo 2', () => {
  it('deve resolver o exemplo do enunciado', () => {
    const input = [
      4,
      14,
      123,
      10,
      -25
    ].join('\n');

    const expected = [
      '2 in',
      '2 out'
    ].join('\n');

    expect(solve(input)).toBe(expected);
  });
});