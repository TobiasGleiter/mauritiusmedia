import Connect from '@/lib/mongodb/connect';
import { ObjectId } from 'mongodb';

export default async function getWorkflow(id: number) {
  const collection = await Connect('sundayservice');
  const response = await collection.findOne({
    _id: new ObjectId(id),
  });

  return response;
}
