const { solve } = require('./solution');

describe('1016 - Distância', () => {
  it('deve calcular o tempo a partir da distância', () => {
    expect(solve('30')).toBe('60 minutos');
  });

  it('deve calcular o tempo a partir da distância', () => {
    expect(solve('110')).toBe('220 minutos');
  });

  it('deve calcular o tempo a partir da distância', () => {
    expect(solve('7')).toBe('14 minutos');
  });
});