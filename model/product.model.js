const products = require("../data/products.json");

async function find() {
  return new Promise((resolve, reject) => {
    resolve(products.products);
  });
}

async function findById(id) {
  return new Promise((resolve, reject) => {
    resolve(products.products.find((p) => p.id === id));
  });
}

const ProductModel = {
  find,
  findById,
};

module.exports = ProductModel;
