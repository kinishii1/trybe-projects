const sum = require('../src/sum');

describe('1 - Crie os casos de teste da funcão `Sum`', () => {

  it ('Testa se ao receber "4" e "5" como parâmetro, retorna "9" como resultado', () => {
    // Remova o fail e escreva seus testes abaixo
    // arrange
    const input1 = 4;
    const input2 = 5;
    // act
    const result = sum(input1, input2);
    // assert
    const expectedResult = 9
    expect(result).toBe(expectedResult)
  });

  it ('Testa se ao receber "0" nos dois parâmetros, retorna o resultado "0"', () => {
    // Remova o fail e escreva seus testes abaixo
    // arrange
    const input1 = 0;
    const input2 = 0;
    // act
    const result = sum(input1, input2);
    // assert
    const expectedResult = 0
    expect(result).toBe(expectedResult)
  });
  
  it ('Testa se dispara um erro, caso receba como parâmetro uma string', () => {
    // Remova o fail e escreva seus testes abaixo
    // arrange
    const input1 = 'string';
    const input2 = 0;
    // act
    const resultFn = () => {
      sum(input1, input2);
    } 
    // assert
    expect(resultFn).toThrow()
  });


  it ('Testa se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    // Remova o fail e escreva seus testes abaixo
     // arrange
    const input1 = 4;
    const input2 = '5';
    // act
    const resultFn = () => {
      sum(input1, input2);
    } 
    // assert
    expect(resultFn).toThrow(/parameters must be numbers/)
  });
});