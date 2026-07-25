const { solve } = require('./solution');

describe('1010 - Cálculo simples', () => {
  it('deve retornar o resultado do cálculo (1 * 5.30) + (2 * 5.10)', () => {
    expect(solve('12 1 5.30\n16 2 5.10')).toBe('VALOR A PAGAR: R$ 15.50');
  });
  
  it('deve retornar o resultado do cálculo (2 * 15.30) + (4 * 5.20)', () => {
    expect(solve('13 2 15.30\n161 4 5.20')).toBe('VALOR A PAGAR: R$ 51.40');
  });
  it('deve retornar o resultado do cálculo (1 * 15.10) + (1 * 15.10)', () => {
    expect(solve('1 1 15.10\n2 1 15.10')).toBe('VALOR A PAGAR: R$ 30.20');
  });
});