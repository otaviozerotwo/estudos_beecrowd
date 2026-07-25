const { solve } = require('./solution');

describe('1004 - Produto simples', () => {
  it('deve multiplicar 3 * 9', () => {
    expect(solve('3\n9')).toBe('PROD = 27');
  });

  it('deve multiplicar -30 * 10', () => {
    expect(solve('-30\n10')).toBe('PROD = -300');
  });

  it('deve multiplicar 0 * 9', () => {
    expect(solve('0\n9')).toBe('PROD = 0');
  });
});