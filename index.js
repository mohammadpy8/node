const http = require("http");
const ProductsController = require("./controllers/product.controllers");
const ErrorHandler = require("./controllers/errorHandler.controller");

const server = http.createServer((req, res) => {
  if (req.url === "/api/products" && req.method === "GET") {
    ProductsController.get(req, res);
  } else if (req.url.match(/\/api\/products\/[0-9]+/) && req.method === "GET") {
    ProductsController.getById(res, req);
  } else if (req.url === "/api/products" && req.method === "POST") {
    ProductsController.post(res, req);
  } else {
    ErrorHandler.notFound(res, req);
  }
});

server.listen(3000);
console.log("runder server listening on port 3000");
