const stockProducts = require('./data.json');

const getProductsAmount = () => {
  let soma = 0;
  for (let i = 0; i < stockProducts.length; i += 1) {
    quantityInStock = stockProducts[i].quantityInStock;
    soma += quantityInStock;
  }
  return soma;
};

module.exports = { getProductsAmount };
