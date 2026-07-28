const { solve } = require('./solution');

describe('1060 - Números Positivos', () => {
  it('deve imprimir uma mensagem dizendo quantos valores positivos foram lidos', () => {
    const input = [
      7,
      -5,
      6,
      -3.4,
      4.6,
      12
    ].join('\n');

    const expected = '4 valores positivos';

    expect(solve(input)).toBe(expected);
  });
});