const { solve } = require('./solution');

describe('1012 - Área', () => {
  it('deve calcular: área triângulo = (3.0 * 5.2) / 2 | área do círculo = 3.14159 * (5.2**2) | área do trapézio = ((3.0 + 4.0) * 5.2) / 2 | área do quadrado = 4.0 * 4.0 | área do retângulo = 3.0 * 4.0', () => {
    expect(solve('3.0 4.0 5.2')).toBe('TRIANGULO: 7.800\nCIRCULO: 84.949\nTRAPEZIO: 18.200\nQUADRADO: 16.000\nRETANGULO: 12.000');
  });
  
  it('deve calcular: área triângulo = (12.7 * 15.2) / 2 | área do círculo = 3.14159 * (15.2**2) | área do trapézio = ((12.7 + 10.4) * 15.2) / 2 | área do quadrado = 10.4 * 10.4 | área do retângulo = 12.7 * 10.4', () => {
    expect(solve('12.7 10.4 15.2')).toBe('TRIANGULO: 96.520\nCIRCULO: 725.833\nTRAPEZIO: 175.560\nQUADRADO: 108.160\nRETANGULO: 132.080');
  });
});

