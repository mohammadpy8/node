const { MongoClient } = require("mongodb");
const DB_URL = "mongodb://localhost:27017";

const DB_name = "mongodb-test";
const client = new MongoClient(DB_URL);

async function main() {
  await client.connect();
  console.log("conected to db");
  const db = client.db(DB_name);
  const userCollection = db.collection("user");
  const result = await userCollection.insertMany([
    {
      firstName: "mohammad",
      lastName: "seyfillahi",
      age: 15,
      score: [20, 25, 30],
      identity: "100000000000",
      birthday: Date.now(),
      address: {
        pelak: 20,
        street: "x",
        city: "kerman",
      },
    },
    ,
    {
      firstName: "alireza",
      lastName: "ahmadi",
      age: 15,
      score: [30],
      identity: "100000000000",
      birthday: Date.now(),
      address: {
        pelak: 2000,
        street: "xddddddd",
        city: "kerman",
      },
    },
  ]);
  userCollection
    .countDocuments({})
    .then((result) => {
      console.log(result);
    });
}

main();
