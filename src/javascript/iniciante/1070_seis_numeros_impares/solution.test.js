const { solve } = require('./solution');

describe('1070 - Seis Números Ímpares', () => {
  it('deve resolver o exemplo do enunciado', () => {
    const expected = [
      9,
      11,
      13,
      15,
      17,
      19
    ].join('\n');

    expect(solve('8')).toBe(expected);
  });
});