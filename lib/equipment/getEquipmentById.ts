export default async function getEquipmentById(id: string) {
  const res = await fetch(`http://localhost:3000/api/equipment/${id}`, {
    next: { tags: ['equipment'] },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const data = res.json();

  return data;
}
