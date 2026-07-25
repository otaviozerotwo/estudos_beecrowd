const { solve } = require('./solution');

describe('1020 - Idade em dias', () => {
  it('deve converter a idade em dias para:\nAA ano(s)\nMM mes(es)\nDD dia(s)', () => {
    const expected = [
      '1 ano(s)',
      '1 mes(es)',
      '5 dia(s)'
    ].join('\n');

    expect(solve('400')).toBe(expected);
  });

  it('deve converter a idade em dias para:\nAA ano(s)\nMM mes(es)\nDD dia(s)', () => {
    const expected = [
      '2 ano(s)',
      '2 mes(es)',
      '10 dia(s)'
    ].join('\n');

    expect(solve('800')).toBe(expected);
  });

  it('deve converter a idade em dias para:\nAA ano(s)\nMM mes(es)\nDD dia(s)', () => {
    const expected = [
      '0 ano(s)',
      '1 mes(es)',
      '0 dia(s)'
    ].join('\n');

    expect(solve('30')).toBe(expected);
  });
});