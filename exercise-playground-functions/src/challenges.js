const menu = require('./mcDonalds');
const guestsDatabase = require('./data.json');

// =================================================
// PARTE 1
// =================================================

// Requisito 1 - Crie uma função que divida uma frase

splitSentence = (string) => {
  splitWords = string.split(' ');
  return splitWords;
};

splitSentence('vamo que vamo');

// Requisito 2 - Crie uma função que calcula a quantidade de pontos em um campeonato de futebol
footballPoints = (wins, ties) => {
  winsPlus = wins * 3;
  totatPoints = winsPlus + ties;
  return totatPoints;
};

// Requisito 3 - Crie uma função que adiciona músicas em uma playlist
playlist = [];

addMusics = (artist, music, musicTime) => {
  itensAdd = {};

  itensAdd.artist = artist;
  itensAdd.music = music;
  itensAdd.musicTime = musicTime;

  playlist.push(itensAdd);
};

// =================================================
// PARTE 2
// =================================================

// Requisito 4 - Crie uma função que retorna o produto mais caro de acordo com uma categoria

function moreExpensive(data, category) {
  productName = data[category][0].name
  productPrice = data[category][0].price
  for (product of data[category]) {
    price = product.price
    newName = product.name
    if (price > productPrice) {
      productPrice = price
      productName = newName
    }
  }
  return `O produto mais caro é: ${productName}, que custa: R$${productPrice.toFixed(2)}.`
}

// Requisito 5 - Crie uma função que verifica se um determinado item já existe

const checkItem = (data, category, item) => {
  const dataCategory = data[category]
  for (let productName of dataCategory)
    if (productName.name === item) {
      return true
    }
  return false
}

// console.log(checkItem(menu, 'drinks', 'Coca-Cola 300ml'))
// Requisito 6 - Crie uma função que adiciona um novo item caso ele ainda não exista

const addNewItem = (data, category, item, price, ingredients, calories) => {
  if (!checkItem(data, category, item)) {
    const newItem = {
      name: item,
      price: price,
      ingredients: ingredients,
      calories: calories,
    };

    data[category].push(newItem);
    return newItem;
  }
  return `O produto: "${item}" já existe!`;
};

// console.log(addNewItem(menu, 'sideDishes', 'McFritas Gigante', 76.90, ['muita batata', 'muito sal'], 78976))

// Requisito 7 - Crie uma função que conta a quantidade de pessoas por gênero

const counterGender = (data) => {
  guests = data.guests
  countMale = 0
  countFemale = 0
  for (guest of guests) {
    if (guest.gender === 'male') {
      countMale += 1
    }
    else {
      countFemale += 1
    }
  }
  resultObj = {
    male: countMale,
    female: countFemale
  }
  return resultObj
}
// console.log(counterGender(guestsDatabase));
// =================================================
// PARTE 3
// =================================================

// Requisito 8 - Crie uma função que retorna os elementos de um determinado estado

const filterState = (data, state) => {
  const guests = data.guests;
  let cont = 0
  let resultArr = [];

  for (const guest of guests) {
    if (guest.address.state === state) {
      resultArr.push(guest);
    }
  }

  return resultArr;
};

// console.log(filterState(guestsDatabase, 'Wisconsin'));
// Requisito 9 - Crie uma função que altera a propriedade `picture`

const changePicture = (data) => {
  const guests = data.guests;
  for (const guest of guests) {
    guest.picture = 'https://picsum.photos/200/300';
  }
  return guests
}

// console.log(changePicture(guestsDatabase));

// Requisito 10 - Crie um função que gera um relatório

const getAverage = (data) => {
  const guests = data.guests;
  let countAge = 0;

  for (const guest of guests) {
    countAge += guest.age;
  }

  return countAge / guests.length;
};

const getCountries = (data) => {
  const guests = data.guests;
  let resultArr = [];

  for (const guest of guests) {
    if (!resultArr.includes(guest.country)) {
      resultArr.push(guest.country);
    }
  }
  return resultArr.sort();
};

const generateReport = (data) => {
  const guests = data.guests
  gender = counterGender(data)
  guest = guests.length
  avgAge = getAverage(data)
  country = getCountries(data)
  report = {
    totalGuests: guest,
    totalGender: gender,
    avgAge: parseFloat(avgAge.toFixed(2)),
    countries: country,
  };
  return report;
}

// Não modifique as linhas abaixo
module.exports = {
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => { }),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => { }),
  addMusics: typeof addMusics === 'function' ? addMusics : (() => { }),
  playlist: typeof playlist === 'undefined' ? [] : playlist,
  moreExpensive: typeof moreExpensive === 'function' ? moreExpensive : (() => { }),
  checkItem: typeof checkItem === 'function' ? checkItem : (() => { }),
  addNewItem: typeof addNewItem === 'function' ? addNewItem : (() => { }),
  counterGender: typeof counterGender === 'function' ? counterGender : (() => { }),
  filterState: typeof filterState === 'function' ? filterState : (() => { }),
  changePicture: typeof changePicture === 'function' ? changePicture : (() => { }),
  generateReport: typeof generateReport === 'function' ? generateReport : (() => { }),
};
