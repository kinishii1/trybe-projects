const productDetails = require("../src/productDetails");
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe("6 - Implemente os casos de teste para a função `productDetails`", () => {
  it("Verifica se a função `productDetails` tem o comportamento esperado", () => {
    const input1 = "Alcool gel";
    const input2 = "Máscara";

    const result = productDetails(input1, input2);

    const expectedResult = [
      {
        name: "Alcool gel",
        details: {
          productId: "Alcool gel123",
        },
      },
      {
        name: "Máscara",
        details: {
          productId: "Máscara123",
        },
      },
    ];

    expect(result).toEqual(expectedResult);
  });

  it("Teste se productDetails é uma função", () => {
    expect(typeof productDetails).toEqual("function");
  });
  it("Teste se o retorno da função é um array.", () => {
    const input1 = "Alcool gel";
    const input2 = "Máscara";

    const result = productDetails(input1, input2);

    expect(Array.isArray(result)).toBe(true);
  });
  it("Teste se o array retornado pela função contém dois itens dentro.", () => {
    const input1 = "Alcool gel";
    const input2 = "Máscara";

    const result = productDetails(input1, input2);

    expect(result.length).toBe(2);
  });
  it("Teste se os dois itens dentro do array retornado pela função são objetos.", () => {
    const input1 = "Alcool gel";
    const input2 = "Máscara";

    const result = productDetails(input1, input2);

    expect(result[0]).toBeInstanceOf(Object);
    expect(result[1]).toBeInstanceOf(Object);
  });
  it("Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.", () => {
    const input1 = "Alcool gel";
    const input2 = "Máscara";

    const result = productDetails(input1, input2);

    expect(result[0].name).not.toEqual(result[1].name);
  });
  it("Teste se os dois productIds terminam com 123.", () => {
    const input1 = "Alcool gel";
    const input2 = "Máscara";

    const result = productDetails(input1, input2);

    const productId1 = result[0].details.productId;
    const productId2 = result[1].details.productId;

    expect(productId1).toMatch(/123/);
    expect(productId2).toMatch(/123/);
  });
});
