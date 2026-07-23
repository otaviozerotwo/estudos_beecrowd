const { solve } = require('./solution');

describe('1001_extremamente_basico', () => {
  it('deve somar 10 + 9', () => {
    expect(solve('10\n9')).toBe('X = 19');
  });
  
  it('deve somar -10 + 4', () => {
    expect(solve('-10\n4')).toBe('X = -6');
  });

  it('deve somar 15 + -7', () => {
    expect(solve('15\n-7')).toBe('X = 8');
  });
});