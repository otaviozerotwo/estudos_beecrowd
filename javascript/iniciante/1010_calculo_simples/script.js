/* Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

* Entrada
O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois inteiros e um valor com 2 casas decimais.

* Saída
A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço após os dois pontos e um espaço após o "R$". O valor deverá ser apresentado com 2 casas após o ponto. */

const prompt = require('prompt-sync')();

const getValues = () => {  
  console.log('Digite os valores separados por espaço (ex: 12 1 5.30)')
  let entrada = prompt();

  let valores = entrada.split(' ');
  
  let codigo = Number(valores[0]);
  let quantidade = Number(valores[1]);
  let valorUnitario = Number(valores[2]);

  return {
    codigo,
    quantidade,
    valorUnitario
  }
};

const peca1 = getValues();
const peca2 = getValues();

const valorDaCompra = (peca1.quantidade * peca1.valorUnitario) + (peca2.quantidade * peca2.valorUnitario);

console.log(`VALOR A PAGAR: R$ ${valorDaCompra.toFixed(2)}`);
