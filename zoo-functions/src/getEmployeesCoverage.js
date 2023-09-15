const { species, employees } = require('../data/zoo_data');

// name: o nome ou sobrenome da pessoa a ser buscada;

// id: o id da pessoa a ser buscada.

// {
// id: "4b40a139-d4dc-4f09-822d-ec25e819a5ad", // id da pessoa
// fullName: "Sharonda Spry", // nome completo: firstName + lastName
// species: [ "otters", "frogs" ], // espécies as quais a pessoa é responsável
// locations: [ "SE", "SW" ], // Um array contendo todas as localizações das espécies
// }

// getEmployeesCoverage({ name:  'Sharonda' }); // name recebe o primeiro nome como parâmetro ou
// getEmployeesCoverage({ name:  'Spry' }); // name recebe o último nome como parâmetro ou
// getEmployeesCoverage({ id:  '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }); // recebe um id como parâmetro
function noPropInput() {
  return employees.map(({ id, firstName, lastName, responsibleFor }) => {
    const speciesInfo = species.filter(({ id: idSpecie }) => responsibleFor.includes(idSpecie));
    const speciesList = speciesInfo.map(({ name }) => name);
    return {
      id,
      fullName: `${firstName} ${lastName}`,
      species: speciesList,
      locations: speciesInfo.map(({ location }) => location),
    };
  });
}

function idInput(prop) {
  const idToSearch = prop.id;
  const employee = employees.find(({ id }) => id === idToSearch);
  if (!employee) {
    throw new Error('Informações inválidas');
  }
  const { id, firstName, lastName, responsibleFor } = employee;
  const speciesInfo = species.filter(({ id: idSpecie }) => responsibleFor.includes(idSpecie));
  const speciesList = speciesInfo.map(({ name }) => name);
  const locationList = speciesInfo.map(({ location }) => location);
  return {
    id,
    fullName: `${firstName} ${lastName}`,
    species: speciesList,
    locations: locationList,
  };
}

function nameInput(prop) {
  const nameToSearch = prop.name;
  let employee = employees.find(({ firstName }) => firstName === nameToSearch);
  if (!employee) {
    employee = employees.find(({ lastName }) => lastName === nameToSearch);
  }
  if (employee) {
    const { id, firstName, lastName, responsibleFor } = employee;
    const speciesInfo = species.filter(({ id: idSpecie }) => responsibleFor.includes(idSpecie));
    const speciesList = speciesInfo.map(({ name }) => name);
    const locationList = speciesInfo.map(({ location }) => location);
    return {
      id,
      fullName: `${firstName} ${lastName}`,
      species: speciesList,
      locations: locationList,
    };
  }
  throw new Error('Informações inválidas');
}

const getEmployeesCoverage = (prop) => {
  if (!prop) {
    return noPropInput();
  }

  if (prop.id) {
    return idInput(prop);
  }

  if (prop.name) {
    return nameInput(prop);
  }
};
// {
// "id": "4b40a139-d4dc-4f09-822d-ec25e819a5ad",
// "fullName": "Sharonda Spry",
// "species": [ "otters", "frogs" ],
// "locations": [ "SE", "SW" ]
// }

console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
