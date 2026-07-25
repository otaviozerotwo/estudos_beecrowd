const { solve } = require('./solution');

describe('1003 - Soma simples', () => {
  it('deve somar 30 + 10', () => {
    expect(solve('30\n10')).toBe('SOMA = 40');
  });

  it('deve somar -30 + 10', () => {
    expect(solve('-30\n10')).toBe('SOMA = -20');
  });

  it('deve somar 0 + 0', () => {
    expect(solve('0\n0')).toBe('SOMA = 0');
  });
});