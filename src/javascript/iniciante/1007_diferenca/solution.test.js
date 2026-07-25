const { solve } = require('./solution');

describe('1007 - Diferença', () => {
  it('deve calcular (5 * 6 - 7 * 8)', () => {
    expect(solve('5\n6\n7\n8')).toBe('DIFERENCA = -26');
  });
  
  it('deve calcular (0 * 0 - 7 * 8)', () => {
    expect(solve('0\n0\n7\n8')).toBe('DIFERENCA = -56');
  });
  it('deve calcular (5 * 6 - -7 * 8)', () => {
    expect(solve('5\n6\n-7\n8')).toBe('DIFERENCA = 86');
  });
});