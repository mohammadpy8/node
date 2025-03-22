const { MongoClient } = require("mongodb");
const DB_URL = "mongodb://localhost:27017";

const DB_name = "mongodb-test";
const client = new MongoClient(DB_URL);

async function main() {
  await client.connect();
  console.log("conected to db");
  const db = client.db(DB_name);
  const userCollection = db.collection("user");
  const result = await userCollection
    .aggregate([
      {
        $match: {
          firstName: "mohammad",
        },
      },
      {
        $addFields: {
          userAge: "$age",
        },
      },
      {
        $project: {
          age: 0,
          score: 0,
        },
      },
    ])
    .toArray();
  console.log(result);
}

main();
