/* eslint-disable max-len */
// Siga as orientações do README!

// // const objetoRetornadoCreateMenu = createMenu(
//  {food: {coxinha: 3.90, sanduiche: 9.90},
//  drinks: {agua: 3.90, cerveja: 6.90}});

// objetoRetornadoCreateMenu.order('coxinha')

// objetoRetornadoCreateMenu.consumption // deve retornar ['coxinha']

// objetoRetornadoCreateMenu.order('picanha') // deve retornar "Item indisponível".

// objetoRetornadoCreateMenu.consumption // deve retornar ['coxinha']

const createMenu = (menuData) => {
  let newObj;

  const fetchMenu = () => menuData;

  const consumption = [];

  const order = (...items) => {
    items.forEach((item) => {
      if (
        Object.keys(menuData.food).includes(item) || Object.keys(menuData.drinks).includes(item)
      ) {
        consumption.push(item);
      } else {
        newObj.consumption = 'Item indisponível';
      }
    });
  };

  const pay = () => {
    let totalAmount = 0;
    consumption.forEach((item) => {
      if (Object.keys(menuData.food).includes(item)) {
        totalAmount += menuData.food[item];
      } else if (Object.keys(menuData.drinks).includes(item)) {
        totalAmount += menuData.drinks[item];
      }
    });

    totalAmount *= 1.1;
    totalAmount = parseFloat(totalAmount.toFixed(1));

    return totalAmount;
  };
  newObj = {
    fetchMenu,
    consumption,
    order,
    pay,
  };

  return newObj;
};

module.exports = createMenu;
