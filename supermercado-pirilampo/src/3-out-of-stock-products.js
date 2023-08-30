const stockProducts = require('./data.json');

const getOutOfStockProducts = () => {
  const newArray = [];

  for (let i = 0; i < stockProducts.length; i += 1) {
    const productName = stockProducts[i].productName;
    const quantityInStock = stockProducts[i].quantityInStock;
    if (quantityInStock === 0) {
      newArray.push(productName);
    }
  }
  return newArray;
};

module.exports = { getOutOfStockProducts };
