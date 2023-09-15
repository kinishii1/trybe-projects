const { employees, species } = require('../data/zoo_data');

// A função deverá encontrar a pessoa colaboradora que possui o ID passado por parâmetro;

// A função deverá encontrar a primeira espécie de animal que a pessoa colaboradora é responsável;

// A função deverá encontrar o animal mais velho daquela espécie;

// A função deverá retornar um array com as informações do animal mais velho daquela espécie.

const getOldestFromFirstSpecies = (idInput) => {
  const employee = employees.find(({ id }) => id === idInput);

  if (!employee) {
    return 'Employee not found.';
  }

  const idResponsibleFor = employee.responsibleFor;

  if (idResponsibleFor.length === 0) {
    return 'No animals are assigned to this employee.';
  }

  const idFirstAnimal = idResponsibleFor[0];

  const speciesWithId = species.find(({ id }) => id === idFirstAnimal);

  if (!speciesWithId) {
    return 'Species not found.';
  }

  const oldestResidents = speciesWithId.residents.sort((a, b) => b.age - a.age)[0];

  return [oldestResidents.name, oldestResidents.sex, oldestResidents.age];
};

console.log(getOldestFromFirstSpecies('c1f50212-35a6-4ecd-8223-f835538526c2'));

module.exports = getOldestFromFirstSpecies;
