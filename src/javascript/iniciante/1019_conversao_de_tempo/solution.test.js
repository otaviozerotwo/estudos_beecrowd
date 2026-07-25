const { solve } = require('./solution');

describe('1019 - Conversão de tempo', () => {
  it('deve formatar tempo em segundos para HH:MM:SS', () => {
    expect(solve('556')).toBe('0:9:16');
  });

  it('deve formatar tempo em segundos para HH:MM:SS', () => {
    expect(solve('1')).toBe('0:0:1');
  });

  it('deve formatar tempo em segundos para HH:MM:SS', () => {
    expect(solve('140153')).toBe('38:55:53');
  });
});