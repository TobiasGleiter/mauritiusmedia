import clientPromise from './mongodb';

export default async function Connect(collection: string) {
  const mongoClient = await clientPromise;
  const db = mongoClient.db(process.env.MONGO_DB_NAME);
  const res = db.collection(collection);

  return res;
}
