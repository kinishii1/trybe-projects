const stockProducts = require('./data.json');

const getUniqueProductsAmount = () => {
  uniqueProducts = stockProducts.length;
  return uniqueProducts;
};

module.exports = { getUniqueProductsAmount };
