import Connect from '../mongodb/connect';

export default async function getEquipment() {
  const collection = await Connect('equipment');
  const response = await collection.find().toArray();

  return response;
}
