const stockProducts = require('./data.json');

const getUniqueProductsName = () => {
  const newArray = [];
  for (let i = 0; i < stockProducts.length; i += 1) {
    const productName = stockProducts[i].productName;
    newArray.push(productName);
  }
  return newArray;
};

module.exports = { getUniqueProductsName };
