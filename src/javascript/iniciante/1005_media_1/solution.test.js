const { solve } = require('./solution');

describe('1005 - Média 1', () => {
  it('deve calcular a média ponderada de 5.0 (peso 3.5) e 7.1 (peso 7.5)', () => {
    expect(solve('5.0\n7.1')).toBe('MEDIA = 6.43182');
  });
  
  it('deve calcular a média ponderada de 0.0 (peso 3.5) e 7.1 (peso 7.5)', () => {
    expect(solve('0.0\n7.1')).toBe('MEDIA = 4.84091');
  });
  it('deve calcular a média ponderada de 10.0 (peso 3.5) e 10.0 (peso 7.5)', () => {
    expect(solve('10.0\n10.0')).toBe('MEDIA = 10.00000');
  });
})