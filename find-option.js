const { MongoClient } = require("mongodb");
const DB_URL = "mongodb://localhost:27017";

const DB_name = "mongodb-test";
const client = new MongoClient(DB_URL);

async function main() {
  await client.connect();
  console.log("conected to db");
  const db = client.db(DB_name);
  const userCollection = db.collection("user");
  // const result = await userCollection.findOne(
  //   { firstName: "mohammad" },
  //   {
  //     projection: {
  //       age: 0,
  //     },
  //   }
  // );
  // const result = await userCollection.findOne(
  //   { firstName: "mohammad" },
  //   {
  //     projection: {
  //       firstName: 1,
  //     },
  //   }
  // );
  // const result = await userCollection
  //   .find(
  //     { firstName: "mohammad" },
  //     {
  //       skip: 1,
  //       limit: 1,
  //     }
  //   )
  //   .toArray();

  // const result = await userCollection
  //   .find(
  //     { firstName: "mohammad" },
  //     {
  //       sort: { _id: -1 },
  //     }
  //   )
  //   .toArray();
  const result = await userCollection
    .find(
      { firstName: "mohammad" },
      {
        sort: { age: "asc" },
      }
    )
    .toArray();
}

main();
