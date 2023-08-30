const stockProducts = require('./data.json');

const searchProductByName = (product) => {
  if (!product) return null;
  const newArray = {};

  for (const stockProduct of stockProducts) {
    if (stockProduct.productName === product) {
      newArray.description = stockProduct.description;
      newArray.formattedPrice = `R$ ${stockProduct.price}`;
      return newArray;
    }
  }
  return null;
};

module.exports = { searchProductByName };
