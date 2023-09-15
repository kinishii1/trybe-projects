const { species, hours } = require('../data/zoo_data');

// getSchedule('lions');
// o retorno será [ 'Tuesday', 'Thursday', 'Saturday', 'Sunday' ];

// {
//   Tuesday: {
//     officeHour: 'Open from 8am until 6pm',
//     exhibition: [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ],
//   },
//   // [...]
// }

// console.log(getHours());

// getSchedule('lions');
// o retorno será [ 'Tuesday', 'Thursday', 'Saturday', 'Sunday' ];

//   Wednesday: {
//     officeHour: 'Open from 8am until 6pm',
//     exhibition: [ 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes' ],
//   },

const getDay = (prop) => {
  if (prop === 'Monday') {
    return {
      [prop]: {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      },
    };
  } return {
    [prop]: {
      officeHour: `Open from ${hours[prop].open}am until ${hours[prop].close}pm`,
      exhibition: species
        .filter(({ availability }) => availability.includes(prop))
        .map(({ name }) => name),
    },
  };
};

function defaultObj() {
  return Object.keys(hours).reduce((acc, cur) => {
    if (cur === 'Monday') {
      acc[cur] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
      return acc;
    }
    acc[cur] = {
      officeHour: `Open from ${hours[cur].open}am until ${hours[cur].close}pm`,
      exhibition: species
        .filter(({ availability }) => availability.includes(cur))
        .map(({ name }) => name),
    };
    return acc;
  }, {});
}

const getSchedule = (prop) => {
  if (Object.keys(hours).includes(prop)) {
    return getDay(prop);
  }

  if (species.find(({ name }) => name === prop)) {
    return species.find(({ name }) => name === prop).availability;
  }

  return defaultObj();
};

console.log(getSchedule('Wednesday'));

module.exports = getSchedule;
