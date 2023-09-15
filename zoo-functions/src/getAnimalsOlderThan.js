const data = require('../data/zoo_data');

const animals = data.species;

const getAnimalsOlderThan = (animalInput, ageInput) => {
  const specieFiltered = animals
    .filter((animal) => animal.name === animalInput)
    .flatMap((animal) => animal.residents)
    .every((animal) => animal.age > ageInput);

  return specieFiltered;
};

console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
