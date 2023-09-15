const { species: speciesData } = require('../data/zoo_data');

// Implemente a função <code>countAnimals</code> que deverá contabilizar a quantidade de espécies de animais residentes no zoológico.

// `{ species: 'giraffes', sex: 'female' }
// `{} // todos

// {
//   lions: 4,
//   [...]
// }

function countAllSpecies() {
  return speciesData.reduce(
    (prevVal, { name: animalName, residents }) => ({
      ...prevVal,
      [animalName]: residents.length,
    }),
    {},
  );
}

function findSpeciesByName(speciesName) {
  return speciesData.find(({ name: animalName }) => animalName === speciesName);
}

function countResidentsWithSex(species, sex) {
  return species.residents.filter(({ sex: sexEl }) => !sex || sex === sexEl)
    .length;
}

const countAnimals = (animal) => {
  if (!animal) {
    return countAllSpecies();
  }

  const { species, sex } = animal;
  const filteredAnimals = findSpeciesByName(species);

  return countResidentsWithSex(filteredAnimals, sex);
};

console.log(countAnimals({ species: 'giraffes', sex: 'female' }));

module.exports = countAnimals;
