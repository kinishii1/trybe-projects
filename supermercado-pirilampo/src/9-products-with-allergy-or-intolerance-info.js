const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = () => {
  const newArray = [];

  for (let i = 0; i < stockProducts.length; i += 1) {
    const items = {};
    if ('allergyOrIntolerance' in stockProducts[i]) {
      allergyOrIntolerance = stockProducts[i].allergyOrIntolerance;
      items.allergyOrIntoleranceMessage = `Pode conter: ${allergyOrIntolerance.join(' ')}`;
    }
    const description = stockProducts[i].description;
    const formattedPrice = `R$ ${stockProducts[i].price}`;

    items.description = description;
    items.formattedPrice = formattedPrice;

    newArray.push(items);
  }
  return newArray;
};

module.exports = { getProductsWithAllergyOrIntoleranceInfo };
