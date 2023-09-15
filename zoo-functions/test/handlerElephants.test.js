const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('testa parametro count', () => {
    const input = 'count';
    const result = handlerElephants(input);
    const expectedResult = 4;

    expect(result).toBe(expectedResult);
  });
  it('testa parametro names', () => {
    const input = 'names';
    const result = handlerElephants(input);
    const expectedResult = 'Jefferson';

    expect(result).toContain(expectedResult);
  });
  it('testa parametro averageAge', () => {
    const input = 'averageAge';
    const result = handlerElephants(input);
    const expectedResult = 10.5;

    expect(result).toBeCloseTo(expectedResult);
  });
  it('retorna undefined se parametro undefined', () => {
    const input = undefined;
    const result = handlerElephants(input);

    expect(result).toBeUndefined();
  });
  it('retorna null se parametro vazio', () => {
    const input = '';
    const result = handlerElephants(input);

    expect(result).toBeNull();
  });
  it('retorna mensagem se parametro vazio', () => {
    const input = 2;
    const result = handlerElephants(input);

    expect(result).toMatch(/Parâmetro inválido, é necessário uma string/);
  });
  it('retorna location', () => {
    const input = 'location';
    const result = handlerElephants(input);
    const expectedResult = 'NW';
    expect(result).toEqual(expectedResult);
  });
});
