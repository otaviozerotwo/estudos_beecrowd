const { solve } = require('./solution');

describe('1065 - Pares entre cinco números', () => {
  it('deve resolver o exemplo do enunciado', () => {
    const input = [
      7,
      -5,
      6,
      -4,
      12
    ].join('\n');

    const expected = '3 valores pares';
    
    expect(solve(input)).toBe(expected);
  });
});