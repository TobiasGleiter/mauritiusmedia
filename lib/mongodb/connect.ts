import database from './database';
import clientPromise from './mongodb';

export default async function Connect(collection: string) {
  const mongoClient = await clientPromise;
  const db = mongoClient.db(database);
  const res = db.collection(collection);

  return res;
}
