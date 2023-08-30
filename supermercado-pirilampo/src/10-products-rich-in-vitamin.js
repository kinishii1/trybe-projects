const stockProducts = require('./data.json');

const getProductsRichInVitamin = () => {
  const newArray = [];

  for (let i = 0; i < stockProducts.length; i += 1) {
    const items = {};
    const description = stockProducts[i].description;
    const formattedPrice = `R$ ${stockProducts[i].price}`;

    if ('vitamins' in stockProducts[i].nutritionalInfo) {
      let vitamins = stockProducts[i].nutritionalInfo.vitamins;
      const vitaminsArray = Object.entries(vitamins)
        .map(([vitaminName, vitaminAmount]) => `${vitaminName} - ${vitaminAmount}`);

      items.description = description;
      items.formattedPrice = formattedPrice;
      items.vitaminsInformation = vitaminsArray;
      newArray.push(items);
    }
  }
  return newArray;
};

module.exports = { getProductsRichInVitamin };
