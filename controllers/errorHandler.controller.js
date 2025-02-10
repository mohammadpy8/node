const notFound = (res, req) => {
  res.writeHead(400, "Content-Type", "application/json");
  res.write(
    JSON.stringify({
      message: "route no found",
    })
  );
  res.end();
};

const ErrorHandler = {
  notFound,
};

module.exports = ErrorHandler;
