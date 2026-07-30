const { solve } = require('./solution');

describe('1066 - Pares, Ímpares, Positivos e Negativos', () => {
  it('deve resolver o exemplo do enunciado', () => {
    const input = [
      -5,
      0,
      -3,
      -4,
      12
    ].join('\n');

    const expected = [
      '3 valor(es) par(es)',
      '2 valor(es) impar(es)',
      '1 valor(es) positivo(s)',
      '3 valor(es) negativo(s)'
    ].join('\n');

    expect(solve(input)).toBe(expected);
  });
});