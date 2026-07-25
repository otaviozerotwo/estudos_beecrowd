const { solve } = require('./solution');

describe('1045 - Tipos de Triângulos', () => {
  it('deve resolver o exemplo do enunciado', () => {
    const expected = [
      'TRIANGULO ACUTANGULO',
      'TRIANGULO ISOSCELES'
    ].join('\n');

    expect(solve('7.0 5.0 7.0')).toBe(expected);
  });

  it('deve resolver o exemplo do enunciado', () => {
    const expected = [
      'TRIANGULO OBTUSANGULO',
      'TRIANGULO ISOSCELES'
    ].join('\n');

    expect(solve('6.0 6.0 10.0')).toBe(expected);
  });

  it('deve resolver o exemplo do enunciado', () => {
    const expected = [
      'TRIANGULO ACUTANGULO',
      'TRIANGULO EQUILATERO'
    ].join('\n');

    expect(solve('6.0 6.0 6.0')).toBe(expected);
  });

  it('deve resolver o exemplo do enunciado', () => {
    expect(solve('5.0 7.0 2.0')).toBe('NAO FORMA TRIANGULO');
  });

  it('deve resolver o exemplo do enunciado', () => {
    expect(solve('6.0 8.0 10.0')).toBe('TRIANGULO RETANGULO');
  });
});