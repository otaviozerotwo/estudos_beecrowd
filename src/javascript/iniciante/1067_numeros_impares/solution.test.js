const { solve } = require('./solution');

describe('1067 - Números Ímpares', () => {
  it('deve resolver o exemplo do enunciado', () => {
    const expected = [
      1,
      3,
      5,
      7
    ].join('\n');

    expect(solve('8')).toBe(expected);
  });
});