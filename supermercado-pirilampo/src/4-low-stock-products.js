const stockProducts = require('./data.json');

const getLowStockProducts = () => {
  const newArray = [];

  for (let i = 0; i < stockProducts.length; i += 1) {
    productName = stockProducts[i].productName;
    quantityInStock = stockProducts[i].quantityInStock;

    if (quantityInStock > 0 && quantityInStock <= 10) {
      newArray.push(`${productName}: ${quantityInStock} unidades`);
    }
  }
  return newArray;
};

module.exports = { getLowStockProducts };
