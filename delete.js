const { MongoClient, ObjectId } = require("mongodb");
const DB_URL = "mongodb://localhost:27017";

const DB_name = "mongodb-test";
const client = new MongoClient(DB_URL);

async function main() {
  await client.connect();
  console.log("conected to db");
  const db = client.db(DB_name);
  const userCollection = db.collection("user");
  const result = await userCollection.deleteOne({
    firstName: "mohammad",
  });
  const resultId = await userCollection.deleteOne({
    _id: new ObjectId("aaa"),
  });
  console.log("res-->", result, resultId);
}

main();
