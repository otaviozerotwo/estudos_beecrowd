function solve(input) {
  const lines = input.split('\n');

  const [n1, n2, n3, n4] = lines[0].split(' ').map(Number);
  const pesoN1 = 2;
  const pesoN2 = 3;
  const pesoN3 = 4;
  const pesoN4 = 1;

  let media = ((n1 * pesoN1) + (n2 * pesoN2) + (n3 * pesoN3) + (n4 * pesoN4)) / (pesoN1 + pesoN2 + pesoN3 + pesoN4);
  let result = `Media: ${media.toFixed(1)}\n`;

  if (media >= 7.0) {
    result += 'Aluno aprovado.';

    return result;
  } else if (media >= 5.0) {
    result += 'Aluno em exame.\n';
    
    const notaExame = Number(lines[1]);
    result += `Nota do exame: ${notaExame.toFixed(1)}\n`;

    media = (media + notaExame) / 2;
    
    if (media >= 5.0) {
      result += 'Aluno aprovado.\n';
      result += `Media final: ${media.toFixed(1)}`;

      return result;
    } else {
      result += 'Aluno reprovado.\n';
      result += `Media final: ${media.toFixed(1)}`;

      return result;
    }    
  } else {
    result += 'Aluno reprovado.';

    return result;
  }
}

module.exports = { solve };

const input = require('fs').readFileSync('input.txt', 'utf-8');

console.log(solve(input));