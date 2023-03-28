const SneaksAPI = require('sneaks-api');
const chancleta = new SneaksAPI();

function getProducts(keyword, limit, callback) {
  chancleta.getProducts(keyword, limit, callback);
}

function getProductPrices(styleID, callback) {
  chancleta.getProductPrices(styleID, callback);
}

function getMostPopular(limit, callback) {
  chancleta.getMostPopular(limit, callback);
}

module.exports = {
  getProducts,
  getProductPrices,
  getMostPopular
};

// !Use below code as example, we're creating a function for each of the original functions, and then exporting them using module.exports. You can then import these functions into other parts of your code, like this:
// const sneaksAPI = require('./sneaksAPI');

// sneaksAPI.getProducts("Yeezy Cinder", 10, function(err, products) {
//   if (err) {
//     console.log("Error: ", err);
//   } else {
//     console.log("Products: ", products);
//   }
// });
