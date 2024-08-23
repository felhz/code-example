const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = 'mongodb://root:example@10.254.32.243:27017/test';

const client = new MongoClient(url);
// Database Name
const dbName = 'mypro';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('docs');
  const insertResult = await collection.insertMany([{ d: 12 }]);
  console.log('Inserted documents =>', insertResult);

  return 'done.';
}
main();
