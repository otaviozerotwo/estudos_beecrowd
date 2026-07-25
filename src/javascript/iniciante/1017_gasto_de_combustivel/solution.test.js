const { solve } = require('./solution');

describe('1017 - Gasto de combustível', () => {
  it('deve calcular o gasto de combustível a partir da distância (que deve ser calculada antes a partir da velocidade média * tempo em horas', () => {
    expect(solve('10\n85')).toBe('70.833');
  });

  it('deve calcular o gasto de combustível a partir da distância (que deve ser calculada antes a partir da velocidade média * tempo em horas', () => {
    expect(solve('2\n92')).toBe('15.333');
  });

  it('deve calcular o gasto de combustível a partir da distância (que deve ser calculada antes a partir da velocidade média * tempo em horas', () => {
    expect(solve('22\n67')).toBe('122.833');
  });
});