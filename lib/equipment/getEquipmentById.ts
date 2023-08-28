import { ObjectId } from 'mongodb';
import Connect from '../mongodb/connect';

export default async function getEquipmentById(id: string) {
  const collection = await Connect('equipment');
  const response = await collection.findOne({
    _id: new ObjectId(id),
  });

  return response;
}
