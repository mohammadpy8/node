// let buff = Buffer.from("NodeJS");
let buff = Buffer.alloc(256);
buff.write("NestJS");
buff.write("React and Typescript");
buff[1] = 111;
console.log(buff);
console.log(buff[0]);
console.log(buff.toString());

const buffer = Buffer.from("Mohammad");
const parseBuffer = buffer.toJSON().data;
console.log(buffer.toJSON());
console.log(typeof buffer);

const bufferChange = Buffer.from([69, 114, 102, 97, 110], "hex");
console.log(bufferChange.toString("utf8"));

