// exercise-bonus.test.js

const searchEmployee = require("../src/searchEmployee");

describe("5 - Neste exercício, você irá praticar o desenvolvimento orientado a testes implementando `a função` e `os testes` para essa função", () => {
  it("Testa se searchEmployee é uma função", () => {
    expect(typeof searchEmployee).toBe("function");
  });

  it('Testa se searchEmployee(id, "firstName") retorna o primeiro nome do usuário da id consultada', () => {
    const inputId = "8579-6";
    const inputInfo = "firstName";

    const result = searchEmployee(inputId, inputInfo);

    const expectedResult = "Ana";

    expect(result).toEqual(expectedResult);
  });

  it('Testa se searchEmployee(id, "lastName") retorna o segundo nome do usuário da id consultada', () => {
    const inputId = "5569-4";
    const inputInfo = "lastName";

    const result = searchEmployee(inputId, inputInfo);

    const expectedResult = "Jobs";

    expect(result).toEqual(expectedResult);
  });

  it('Testa se searchEmployee(id, "specialities") retorna um array com todas as habilidades do id pesquisado', () => {
    const inputId = "4456-4";
    const inputInfo = "specialities";

    const result = searchEmployee(inputId, inputInfo);

    const expectedResult = ["Context API", "RTL", "Bootstrap"];

    expect(result).toEqual(expectedResult);
  });

  it('Testa se um erro com a mensagem "ID não identificada" é retornado quando a ID não existir', () => {
    expect(() => { searchEmployee() }).toThrow();
  });
});

it("Testa se lança um erro quando a informação e o ID são inexistentes", () => {
  const inputId = "4456-422";
  const inputInfo = "string";

  const resultFn = () => {
    searchEmployee(inputId, inputInfo);
  };

  expect(resultFn).toThrowError();
});

it("Testa a mensagem do erro para informação inexistente", () => {
  const inputId = "4456-4";
  const inputInfo = "string";

  const resultFn = () => {
    searchEmployee(inputId, inputInfo);
  };

  expect(resultFn).toThrow(/informação inexistente/);
});
