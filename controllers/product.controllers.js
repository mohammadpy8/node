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
    const body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", async () => {
      const products = {
        ...JSON.parse(body),
        createdAt: new Date(),
      };
      const response = await ProductModel.create(products);
      res.writeHead(201, "Content-Type", "application/json");
      res.write(JSON.stringify(response));
      res.end();
    });
  } catch (error) {
    console.log(error);
  }
}

async function update(req, res) {
  const id = req.url.split("/")[3];
  try {
    const body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", async () => {
      const parsedBody = {
        ...JSON.parse(body),
      };
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
        const response = await ProductModel.update(id, parsedBody);
        res.writeHead(200, "Content-Type", "application/json");
        res.write(JSON.stringify(response));
        res.end();
      }
    });
  } catch (error) {
    console.log(error);
  }
}

async function remove(req, res) {
  const id = req.url.split("/")[3];
  try {
    req.on("end", async () => {
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
        const response = await ProductModel.remove(id);
        res.writeHead(200, "Content-Type", "application/json");
        res.write(JSON.stringify(response));
        res.end();
      }
    });
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

const ProductsController = { get, getById, post, update, remove };

module.exports = ProductsController;
