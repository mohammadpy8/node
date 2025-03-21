const http = require("http");
const ProductsController = require("./controllers/product.controllers");
const ErrorHandler = require("./controllers/errorHandler.controller");

const server = http.createServer((req, res) => {
  const routerMatcher = /\/api\/products\/[0-9]+/;
  const apiRoute = "/api/products";
  const { url, method } = req;
  if (req.url === apiRoute && req.method === "GET") {
    ProductsController.get(req, res);
  } else if (url.match(routerMatcher) && method === "GET") {
    ProductsController.getById(res, req);
  } else if (url === apiRoute && req.method === "POST") {
    ProductsController.post(res, req);
  } else if (url.match(routerMatcher) && method === "PUT") {
    ProductsController.update(res, req);
  } else if (url.match(routerMatcher) && method === "DELETE") {
    ProductsController.remove(res, req);
  } else {
    ErrorHandler.notFound(res, req);
  }
});

server.listen(3000);
console.log("runder server listening on port 3000");
