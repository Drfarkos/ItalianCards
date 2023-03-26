const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://timetogame:<password>@cluster0.rmnhbla.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const dbName = 'translation_app';
const collectionName = 'personal_dictionary';

const addToDictionary = async (italian, english) => {
  await client.connect();
  const collection = client.db(dbName).collection(collectionName);
  const newEntry = { italian, english };
  await collection.insertOne(newEntry);
  await client.close();
};

const getAllDictionaryEntries = async () => {
  await client.connect();
  const collection = client.db(dbName).collection(collectionName);
  const entries = await collection.find().toArray();
  await client.close();
  return entries;
};

module.exports = {
  addToDictionary,
  getAllDictionaryEntries
};