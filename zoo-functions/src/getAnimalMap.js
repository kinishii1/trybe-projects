const { species } = require('../data/zoo_data');

// A função, caso receba parâmetro com a opção includeNames: true especificada, deverá retornar nomes de animais;

// A função, caso receba parâmetro com a opção sorted: true especificada, deverá retornar nomes de animais ordenados;

// A função, caso receba parâmetro com a opção sex: 'female' ou sex: 'male' especificada, deverá retornar somente nomes de animais macho/fêmea;

// A função, caso receba parâmetro com a opção sex: 'female' ou sex: 'male' especificada e a opção sorted: true especificada, deverá retornar somente nomes de animais macho/fêmea com os nomes dos animais ordenados;

// A função, caso não receba parâmetros, deverá retornar animais categorizados por localização;

const locationsZoo = ['NE', 'NW', 'SE', 'SW'];

function noInputReturn() {
  return locationsZoo.reduce((acc, cur) => {
    acc[cur] = species.filter(({ location }) => location === cur).map(({ name }) => name);
    return acc;
  }, {});
}

// A função, caso receba parâmetro sem a opção includeNames especificada, deverá retornar animais categorizados por localização;

// {includeNames: false, sex: female, sorted: true}

// NE: [
//   { lions: ['Zena', 'Maxwell', 'Faustino', 'Dee'] },
//   { giraffes: ['Gracia', 'Antone', 'Vicky', 'Clay', 'Arron', 'Bernard'] },
// ],

// NE: [
//   { lions: ['Dee', 'Faustino', 'Maxwell', 'Zena'] },
//   { giraffes: ['Antone', 'Arron', 'Bernard', 'Clay', 'Gracia', 'Vicky'] },
// ],

function filterSpeciesByLocation(location) {
  return species.filter(({ location: animalLocation }) => animalLocation === location);
}

function mapSpeciesToResidents(speciesData, shouldSort) {
  return speciesData.map(({ name, residents }) => {
    const speciesResidents = residents.map(({ name: nameResident }) => nameResident);
    if (shouldSort) {
      speciesResidents.sort();
    }
    return { [name]: speciesResidents };
  });
}

function includeNamesInput(props) {
  const locationsPlusAnimals = {};
  const shouldSort = props.sorted;
  locationsZoo.forEach((location) => {
    const speciesAtLocation = filterSpeciesByLocation(location);
    locationsPlusAnimals[location] = mapSpeciesToResidents(speciesAtLocation, shouldSort);
  });

  return locationsPlusAnimals;
}

function filterResidentsBySex(residents, sexSelected) {
  return residents.filter((resident) => resident.sex === sexSelected)
    .map((resident) => resident.name);
}

function processLocation(location, shouldSort, sexSelected) {
  return species
    .filter(({ location: animalLocation }) => animalLocation === location)
    .map(({ name, residents }) => {
      const filteredResidents = filterResidentsBySex(residents, sexSelected);

      if (shouldSort) {
        console.log('sorted');
        filteredResidents.sort();
      }

      return { [name]: filteredResidents };
    });
}

const filterSex = (props) => {
  const sexSelected = props.sex;
  let shouldSort = false;
  console.log(sexSelected);

  if (props.sorted) {
    console.log('sort');
    shouldSort = true;
  }

  const locationsPlusAnimals = {};

  locationsZoo.forEach((location) => {
    locationsPlusAnimals[location] = processLocation(location, shouldSort, sexSelected);
  });

  return locationsPlusAnimals;
};

// console.log(filterSex({includeNames: true, sex: 'female', sorted: true}));
// {
//   NE: ['lions', 'giraffes'],
//   NW: ['tigers', 'bears', 'elephants'],
//   SE: ['penguins', 'otters'],
//   SW: ['frogs', 'snakes'],
// }

// sem a opção `includeNames` especificada e somente com a opção `sex: female` especificada, retorna todos os animais categorizados por localização sem aplicar o filtro `sex`

const getAnimalMap = (props) => {
  if (!props || !props.includeNames) {
    return noInputReturn();
  }

  if (props.includeNames && !props.sex) {
    return includeNamesInput(props);
  }

  return filterSex(props);
};

const result = getAnimalMap({ includeNames: true, sex: 'female', sorted: true });

console.log(result);

module.exports = getAnimalMap;
