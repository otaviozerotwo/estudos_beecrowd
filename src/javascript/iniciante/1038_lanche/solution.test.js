const { solve } = require('./solution');

describe('1038 - Lanche', () => {
  it('deve imprimir "Total: R$ " seguido pelo valor a ser pago, com 2 casas decimais', () => {
    expect(solve('3 2')).toBe('Total: R$ 10.00');
  });

  it('deve imprimir "Total: R$ " seguido pelo valor a ser pago, com 2 casas decimais', () => {
    expect(solve('4 3')).toBe('Total: R$ 6.00');
  });

  it('deve imprimir "Total: R$ " seguido pelo valor a ser pago, com 2 casas decimais', () => {
    expect(solve('2 3')).toBe('Total: R$ 13.50');
  });
});