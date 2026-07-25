const { solve } = require('./solution');

describe('1002_area_do_circulo', () => {
  it('deve calcular 3.14159 * (2.0**2)', () => {
    expect(solve('2.0')).toBe('A=12.5664');
  });

  it('deve calcular 3.14159 * (100.64**2', () => {
    expect(solve('100.64')).toBe('A=31819.3103');
  });

  it('deve calcular 3.14159 * (150.00**2', () => {
    expect(solve('150.00')).toBe('A=70685.7750');
  });
});