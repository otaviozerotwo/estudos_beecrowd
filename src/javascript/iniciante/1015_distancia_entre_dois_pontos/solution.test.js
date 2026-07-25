const { solve } = require('./solution');

describe('1015 - Distância entre dois pontos', () => {
  it('deve calcular Math.sqrt(((x2 - x1)**2) + ((y2 - y1)**2))', () => {
    expect(solve('1.0 7.0\n5.0 9.0')).toBe('4.4721');
  });
  
  it('deve calcular Math.sqrt(((x2 - x1)**2) + ((y2 - y1)**2))', () => {
    expect(solve('-2.5 0.4\n12.1 7.3')).toBe('16.1484');
  });
  
  it('deve calcular Math.sqrt(((x2 - x1)**2) + ((y2 - y1)**2))', () => {
    expect(solve('2.5 -0.4\n-12.2 7.0')).toBe('16.4575');
  });
});