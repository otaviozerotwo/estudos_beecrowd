const { solve } = require('./solution');

describe('1014 - Consumo', () => {
  it('deve retornar o consumo médio (distancia/combustivelGasto)', () => {
    expect(solve('500\n35.0')).toBe('14.286 km/l');
  });
  
  it('deve retornar o consumo médio (distancia/combustivelGasto)', () => {
    expect(solve('2254\n124.4')).toBe('18.119 km/l');
  });

  it('deve retornar o consumo médio (distancia/combustivelGasto)', () => {
    expect(solve('4554\n464.6')).toBe('9.802 km/l');
  });
});