const { createWriteStream } = require("fs");
const { createServer } = require("http");
const multiparty = require("multiparty");

const server = createServer((req, res) => {
  const { url, method } = req;
  if (url === "/" && method === "POST") {
    let form = new multiparty.Form();
    form.parse(req);
    form.on("part", (part) => {
      part.pipe(createWriteStream(`./stream/${part.filename}`)).on("close", () => {
        console.log("upload successfully");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
         <h1>file uploaded : ${part.filename}</h1>
           `);
      });
    });
  } else {
  }
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <form enctype="multipart/form-data" method="POST" action="/">
      <input type="file" name="uploadFile"/>
      <button>Upload File</button>
    </form>
    `);
});
server.listen(3000);
