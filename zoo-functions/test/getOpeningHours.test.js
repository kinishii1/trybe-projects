const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Teste não passando argumentos', () => {
    const result = getOpeningHours();
    const expectedResult = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(result).toEqual(expectedResult);
  });
  it('Monday e 09:00-AM deve retornar a string "The zoo is closed"', () => {
    const input1 = 'Monday';
    const input2 = '09:00-AM';
    const result = getOpeningHours(input1, input2);
    const expectedResult = 'The zoo is closed';

    expect(result).toEqual(expectedResult);
  });
  it('Tuesday e 09:00-AM deve retornar a string "The zoo is open"', () => {
    const input1 = 'Tuesday';
    const input2 = '09:00-AM';
    const result = getOpeningHours(input1, input2);
    const expectedResult = 'The zoo is open';

    expect(result).toEqual(expectedResult);
  });
  it('Wednesday e 09:00-AM deve retornar a string "The zoo is closed"', () => {
    const input1 = 'Wednesday';
    const input2 = '09:00-AM';
    const result = getOpeningHours(input1, input2);
    const expectedResult = 'The zoo is open';

    expect(result).toEqual(expectedResult);
  });
  it('Lançar erro caso dia não seja válido', () => {
    const input1 = 'Quarta';
    const input2 = '09:00-AM';
    const testFunction = () => {
      getOpeningHours(input1, input2);
    };
    expect(testFunction).toThrowError(/The day must be valid/);
  });
  it('Lançar erro caso abreviação do horario não seja válido', () => {
    const input1 = 'Monday';
    const input2 = '09:00-AA';
    const testFunction = () => {
      getOpeningHours(input1, input2);
    };
    expect(testFunction).toThrowError(/The abbreviation must be 'AM' or 'PM'/);
  });
  it('Lançar erro caso horas não seja válido', () => {
    const input1 = 'Monday';
    const input2 = '50:00-AM';
    const testFunction = () => {
      getOpeningHours(input1, input2);
    };
    expect(testFunction).toThrowError(/The hour must be between 0 and 12/);
  });
  it('Lançar erro caso minutos do horario não seja válido', () => {
    const input1 = 'Monday';
    const input2 = '09:70-AM';
    const testFunction = () => {
      getOpeningHours(input1, input2);
    };
    expect(testFunction).toThrowError(/The minutes must be between 0 and 59/);
  });
  it('Lançar erro caso horario seja string', () => {
    const input1 = 'Monday';
    const input2 = 'aa:aa-AM';
    const testFunction = () => {
      getOpeningHours(input1, input2);
    };
    expect(testFunction).toThrowError(/should represent a number/);
  });
});
