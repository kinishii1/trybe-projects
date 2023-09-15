const data = require('../data/zoo_data');

const animals = data.species;

// - A função `getSpeciesByIds`, caso não receba nenhum parâmetro, deve retornar um array vazio;
// - A função `getSpeciesByIds`, caso receba como parâmetro um único `ID`, deve retornar um array com a espécie referente a esse `ID`;
// - A função `getSpeciesByIds`, caso receba mais de um `ID`, deve retornar um array com as espécies referentes aos `IDs`.

const getSpeciesByIds = (...ids) => {
  const result = [];

  if (ids.length === 0) {
    return [];
  }

  animals.forEach((animal) => {
    if (ids.includes(animal.id)) {
      result.push(animal);
    }
  });

  return result;
};

module.exports = getSpeciesByIds;
