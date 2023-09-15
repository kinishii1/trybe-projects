const { prices } = require('../data/zoo_data');

// - `child`: são pessoas **menores** de 18 anos;

//   - `adult`: são pessoas com idade **maior ou igual** a 18 anos **e menor** que 50 anos;

//   - `senior`: são pessoas com idade **maior ou igual** a 50 anos.

// - Retorna 0 se nenhum argumento for passado;

// - Retorna 0 se um objeto vazio for passado;

// - Ao receber um array de pessoas com 3 crianças, 2 pessoas adultas e 1 pessoa mais velha retorna o valor correto;

// - Ao receber um array com 1 pessoa adulta retorna o valor correto;

// - Ao receber um array com 1 pessoa mais velha retorna o valor correto;

// - Ao receber um array com 1 criança retorna o valor correto;

// - Ao receber um array com 1 criança e 1 pessoa mais velha retorna o valor correto.

// const entrants = [
// { name:  'Lara Carvalho', age:  5 },
// { name:  'Frederico Moreira', age:  5 },
// { name:  'Pedro Henrique Carvalho', age:  5 },
// { name:  'Maria Costa', age:  18 },
// { name:  'Núbia Souza', age:  18 },
// { name:  'Carlos Nogueira', age:  50 },
// ];

// `{ child: 3, adult: 2, senior: 1 }` count
// `187.94` calculate

const countEntrants = (entrants) => {
  const child = entrants.filter(({ age }) => age < 18);
  const adult = entrants.filter(({ age }) => age >= 18 && age < 50);
  const senior = entrants.filter(({ age }) => age >= 50);

  return { child: child.length, adult: adult.length, senior: senior.length };
};

function calculateChildSum(entrantsCount, childPrice) {
  return entrantsCount.child ? childPrice * entrantsCount.child : 0;
}

function calculateAdultSum(entrantsCount, adultPrice) {
  return entrantsCount.adult ? adultPrice * entrantsCount.adult : 0;
}

function calculateSeniorSum(entrantsCount, seniorPrice) {
  return entrantsCount.senior ? seniorPrice * entrantsCount.senior : 0;
}

function calculateTotalSum(childSum, adultSum, seniorSum) {
  return parseFloat((childSum + adultSum + seniorSum).toFixed(2));
}

const calculateEntry = (entrants) => {
  if (!entrants || entrants.length === 0) {
    return 0;
  }

  const entrantsCounted = countEntrants(entrants);
  const { adult: adultPrice, senior: seniorPrice, child: childPrice } = prices;

  const childSum = calculateChildSum(entrantsCounted, childPrice);
  const adultSum = calculateAdultSum(entrantsCounted, adultPrice);
  const seniorSum = calculateSeniorSum(entrantsCounted, seniorPrice);

  return calculateTotalSum(childSum, adultSum, seniorSum);
};

console.log(calculateEntry([
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]));

module.exports = { calculateEntry, countEntrants };
