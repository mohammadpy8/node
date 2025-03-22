const ConnectToMongoDB = require("../utils/mongo-connection");
const { ObjectId } = require("mongodb");

const productCollection = "product";

async function find() {
  const db = await new ConnectToMongoDB().getDB();
  return new Promise(async (resolve, reject) => {
    const products = await db
      .collection(productCollection)
      .find({}, { sort: { _id: -1 } })
      .toArray();
    resolve(products);
  });
}

async function findById(id) {
  const db = await new ConnectToMongoDB().getDB();
  return new Promise(async (resolve, reject) => {
    const products = await db.collection(productCollection).findOne({ _id: new ObjectId(id) });
    resolve(products);
  });
}

async function create(product) {
  const db = await new ConnectToMongoDB().getDB();
  return new Promise(async (resolve, reject) => {
    const result = await db.collection(productCollection).insertOne(product);
    resolve(result);
  });
}

async function update(id, payload) {
  const db = await new ConnectToMongoDB().getDB();
  return new Promise(async (resolve, reject) => {
    const result = await db.collection(productCollection).updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...payload,
        },
      }
    );
    resolve(result);
  });
}

async function remove(id) {
  const db = await new ConnectToMongoDB().getDB();
  return new Promise(async (resolve, reject) => {
    const result = await db.collection(productCollection).deleteOne({ _id: new ObjectId(id) });
    resolve(result);
  });
}

const ProductModel = {
  find,
  findById,
  create,
  update,
  remove,
};

module.exports = ProductModel;
