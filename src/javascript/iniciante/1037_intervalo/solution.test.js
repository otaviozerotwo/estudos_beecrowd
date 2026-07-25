const { solve } = require('./solution');

describe('1037 - Intervalo', () => {
  it('deve imprimir a mensagem condizente com o intervalo a qual pertence o valor', () => {
    expect(solve('25.01')).toBe('Intervalo (25,50]');
  });

  it('deve imprimir a mensagem condizente com o intervalo a qual pertence o valor', () => {
    expect(solve('25.00')).toBe('Intervalo [0,25]');
  });

  it('deve imprimir a mensagem condizente com o intervalo a qual pertence o valor', () => {
    expect(solve('100.00')).toBe('Intervalo (75,100]');
  });

  it('deve imprimir a mensagem condizente com o intervalo a qual pertence o valor', () => {
    expect(solve('-25.02')).toBe('Fora de intervalo');
  });
});