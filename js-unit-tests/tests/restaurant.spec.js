const createMenu = require("../src/restaurant");

describe("10 - Implemente a função `createMenu`, bem como seus casos de teste", () => {
  it("Verifica se a função `createMenu` tem o comportamento esperado", () => {
    const menu = createMenu({
      food: { coxinha: 3.9, sanduiche: 9.9 },
      drinks: { agua: 3.9, cerveja: 6.9 },
    });
    menu.order("coxinha", "sanduiche", "agua");

    expect(menu.consumption).toEqual([ 'coxinha', 'sanduiche', 'agua' ]);
  });
  it("Verifica se a função createMenu() retorna um objeto que possui a chave fetchMenu", () => {
    const result = createMenu();

    expect(result).toHaveProperty("fetchMenu");
  });

  it("Verificando se o valor da chave fetchMenu do objeto retornado pela função createMenu() é uma função", () => {
    const result = createMenu();

    expect(result.fetchMenu).toBeInstanceOf(Function);
  });

  it("verifica se o objeto retornado pela função createMenu({ food: {}, drinks: {} }).fetchMenu() retorna um objeto cujas chaves são somente food e drinks", () => {
    const input = { food: {}, drinks: {} };
    const result = createMenu(input).fetchMenu();
    const keys = Object.keys(result);

    const expectedResult = ["food", "drinks"];

    expect(keys).toEqual(expectedResult);
  });
  it("Verifica se o menu passado para a função createMenu() é idêntico ao menu recuperado pela função createMenu({ food: {}, drinks: {} }).fetchMenu()", () => {
    const input = { food: {}, drinks: {} };
    const result = createMenu(input).fetchMenu();

    expect(result).toEqual(input);
  });
  it("Verifica se a propriedade consumption do objeto retornado pela função createMenu({ food: {}, drinks: {} }) retorna um array vazio", () => {
    const input = { food: {}, drinks: {} };
    const result = createMenu(input);

    expect(result.consumption).toEqual([]);
  });
  it('verifica se, ao adicionar três pedidos em sequência, dentre bebidas e comidas, o array consumption contém os itens pedidos.',() => {
    const menu = createMenu({
      food: { coxinha: 3.9, sanduiche: 9.9 },
      drinks: { agua: 3.9, cerveja: 6.9 },
    });
    menu.order("coxinha", "sanduiche", "agua");

    expect(menu.consumption).toEqual([ 'coxinha', 'sanduiche', 'agua' ]);
  })
  it('Escreva um teste que verifica se a função order aceita que pedidos repetidos sejam acrescidos a consumption', ()=> {
    const menu = createMenu({
      food: { coxinha: 3.9, sanduiche: 9.9 },
      drinks: { agua: 3.9, cerveja: 6.9 },
    });
    menu.order("coxinha", "coxinha", "agua");

    expect(menu.consumption).toEqual([ 'coxinha', 'coxinha', 'agua' ]);
  })
  it('ao chamar a função pay() que será uma propriedade do objeto retornado pela função createMenu, deve retornar a soma dos preços de tudo que foi pedido, conforme registrado em consumption', ()=> {
    const menu = createMenu({
      food: { coxinha: 3.9, sanduiche: 9.9 },
      drinks: { agua: 3.9, cerveja: 6.9 },
    });
    menu.order("coxinha", "sanduiche", "agua")
    const result = menu.pay();
    let expectedResult = (3.9 + 9.9 + 3.9)*1.1
    expectedResult = parseFloat(expectedResult.toFixed(1))
    expect(menu.pay()).toBe(expectedResult);
  })
});
