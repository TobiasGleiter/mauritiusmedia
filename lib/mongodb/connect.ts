import clientPromise from './mongodb';

// __________________________________________________________________________
let mongo_db_name: string;
// CHECK IF DEVELOPMENT OR PROUDCTION TO SELECT RIGHT COLLECTION
if (process.env.NODE_ENV === 'development') {
  mongo_db_name = process.env.MONGO_DB_DEV_NAME as string;
} else {
  mongo_db_name = process.env.MONGO_DB_NAME as string;
}

export default async function Connect(collection: string) {
  const mongoClient = await clientPromise;
  const db = mongoClient.db(mongo_db_name);
  const res = db.collection(collection);

  return res;
}
