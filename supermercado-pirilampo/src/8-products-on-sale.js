const stockProducts = require('./data.json');

const getProductsOnSale = () => {
  newArray = [];
  for (let i = 0; i < stockProducts.length; i += 1) {
    let items = {};
    let description = stockProducts[i].description;
    let formattedPrice = `R$ ${stockProducts[i].price}`;
    let onSale = stockProducts[i].onSale;
    if (onSale === true) {
      items.description = description;
      items.formattedPrice = formattedPrice;
      items.onSale = true;
      newArray.push(items);
    }
  } return newArray;
};

module.exports = { getProductsOnSale };
