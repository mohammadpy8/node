const ProductModel = require("../model/product.model");

async function get(req, res) {
  try {
    const products = await ProductModel.find();
    res.writeHead(200, "Content-Type", "application/json");
    res.write(JSON.stringify(products));
    res.end();
  } catch (error) {
    console.log(error);
  }
}

async function post(req, res) {
  try {
    await ProductModel.create({
      id: Date.now(),
      title: "mohammad data",
      price: 250000,
    });
    res.writeHead(201, "Content-Type", "application/json");
    res.write(JSON.stringify({ message: "products success create!!" }));
    res.end();
  } catch (error) {
    console.log(error);
  }
}

async function getById(req, res) {
  try {
    const id = req.url.split("/")[3];
    const product = await ProductModel.findById(id);
    if (!product) {
      res.writeHead(400, "Content-Type", "application/json");
      res.write(
        JSON.stringify({
          message: "Product not found",
          status: 400,
        })
      );
      res.end();
    } else {
      res.writeHead(200, "Content-Type", "application/json");
      res.write(JSON.stringify(product));
      res.end();
    }
  } catch (error) {
    console.log(error);
  }
}

const ProductsController = { get, getById, post };

module.exports = ProductsController;
