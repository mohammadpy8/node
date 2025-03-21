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

async function update(id, payload) {
  return new Promise((resolve, reject) => {
    products.products.map((product) => {
      if (product.id === id) {
        Object.assign(product, payload);
      }
      return product;
    });
    resolve({ message: "products updated succesfully" });
  });
}

async function remove(id) {
  return new Promise((resolve, reject) => {
    const newList = products.products.filter((product) => product.id !== id);
    resolve({ message: "products deleted succesfully" });
  });
}

const ProductModel = {
  find,
  findById,
  create,
  update,
  remove,
};

module.exports = ProductModel;
