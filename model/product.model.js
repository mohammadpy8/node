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

async function create(product) {
  return new Promise((resolve, reject) => {
    products.products.push(product);
    resolve();
  });
}

const ProductModel = {
  find,
  findById,
  create,
};

module.exports = ProductModel;
