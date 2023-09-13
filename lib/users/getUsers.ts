import Connect from '../mongodb/connect';

export default async function getUsers() {
  const collection = await Connect('users');
  const response = await collection.find().toArray();

  return response;
}
