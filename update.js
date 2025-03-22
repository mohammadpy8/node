const { MongoClient } = require("mongodb");
const DB_URL = "mongodb://localhost:27017";

const DB_name = "mongodb-test";
const client = new MongoClient(DB_URL);

async function main() {
  await client.connect();
  console.log("conected to db");
  const db = client.db(DB_name);
  const userCollection = db.collection("user");
  // const result = await userCollection.updateOne(
  //   { firstName: "mohammad" },
  //   {
  //     $set: { age: 45 },
  //   }
  // );
  // const result = await userCollection.updateOne(
  //   { firstName: "mohammad" },
  //   {
  //     $push: { score: 45 },
  //   }
  // );
  // const result = await userCollection.updateMany(
  //   { firstName: "mohammad" },
  //   {
  //     $set: { age: "121122" },
  //   }
  // );
  const result = await userCollection.findOneAndUpdate(
    { firstName: "mohammad" },
    {
      $set: { age: "121122" },
    }
  );
  // console.log("🚀 ~ main ~ result:", result);
}

main();
