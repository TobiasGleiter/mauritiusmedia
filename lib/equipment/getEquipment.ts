export default async function getEquipment() {
  const res = await fetch(`/api/equipment`, {
    next: { tags: ['equipment'] },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const fallback = res.json();

  return fallback;
}
