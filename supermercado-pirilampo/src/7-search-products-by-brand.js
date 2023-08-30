const stockProducts = require('./data.json');

const searchProductsByBrand = (brand) => {
  const newArray = [];
  if (brand === undefined) {
    return newArray;
  }

  for (let i = 0; i < stockProducts.length; i += 1) {
    let items = {};
    let brandName = stockProducts[i].brand;
    let description = stockProducts[i].description;
    let formattedPrice = `R$ ${stockProducts[i].price}`;
    if (brandName === brand) {
      items.description = description;
      items.formattedPrice = formattedPrice;
      newArray.push(items);
    }
  } return newArray;
};

module.exports = { searchProductsByBrand };
