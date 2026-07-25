const { solve } = require('./solution');

describe('1008 - Salário', () => {
  it('deve retonar 25 e o salário multiplicando 100 * 5.50', () => {
    expect(solve('25\n100\n5.50')).toBe('NUMBER = 25\nSALARY = U$ 550.00');
  });
  
  it('deve retonar 1 e o salário multiplicando 200 * 20.50', () => {
    expect(solve('1\n200\n20.50')).toBe('NUMBER = 1\nSALARY = U$ 4100.00');
  });
  it('deve retonar 6 e o salário multiplicando 145 * 15.55', () => {
    expect(solve('6\n145\n15.55')).toBe('NUMBER = 6\nSALARY = U$ 2254.75');
  });
});