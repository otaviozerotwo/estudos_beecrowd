function solve() {
  let result = [];

  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      result.push(i);    
    }
  }

  const formatedResult = result.join('\n');
  return formatedResult;
}

module.exports = { solve };

console.log(solve());