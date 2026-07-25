const { solve } = require('./solution');

describe('1043 - Triângulo', () => {
  it('deve resolver o exemplo do enunciado', () => {
    expect(solve('6.0 4.0 2.0')).toBe('Area = 10.0');
  });

  it('deve resolver o exemplo do enunciado', () => {
    expect(solve('6.0 4.0 2.1')).toBe('Perimetro = 12.1');
  });
});