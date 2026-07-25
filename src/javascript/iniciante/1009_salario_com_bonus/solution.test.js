const { solve } = require('./solution');

describe('1009 - Salário com bônus', () => {
  it('deve retornar o total do salário calculado de (500.00 * 0.15) + 1230.30', () => {
    expect(solve('JOAO\n500.00\n1230.30')).toBe('TOTAL = R$ 684.54');
  });
  
  it('deve retornar o total do salário calculado de (700.00 * 0.15) + 0.00', () => {
    expect(solve('PEDRO\n700.00\n0.00')).toBe('TOTAL = R$ 700.00');
  });
  it('deve retornar o total do salário calculado de (1700.00 * 0.15) + 1230.50', () => {
    expect(solve('MANGOJATA\n1700.00\n1230.50')).toBe('TOTAL = R$ 1884.58');
  });
});