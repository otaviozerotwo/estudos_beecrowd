const { solve } = require('./solution');

describe('1035 - Teste de seleçao 1', () => {
  it('deve imprimir a respectiva mensagem após a validação dos valores', () => {
    expect(solve('5 6 7 8')).toBe('Valores nao aceitos');
  });
  
  it('deve imprimir a respectiva mensagem após a validação dos valores', () => {
    expect(solve('2 3 2 6')).toBe('Valores aceitos');
  });
});