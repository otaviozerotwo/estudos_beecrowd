const { solve } = require('./solution');

describe('1011 - Esfera', () => {
  it('deve calcular (4/3.0) * 3.14159 * (3 ** 3)', () => {
    expect(solve('3')).toBe('VOLUME = 113.097');
  });
  
  it('deve calcular (4/3.0) * 3.14159 * (15 ** 3)', () => {
    expect(solve('15')).toBe('VOLUME = 14137.155');
  });
  it('deve calcular (4/3.0) * 3.14159 * (1523 ** 3)', () => {
    expect(solve('1523')).toBe('VOLUME = 14797486501.627');
  });
});
