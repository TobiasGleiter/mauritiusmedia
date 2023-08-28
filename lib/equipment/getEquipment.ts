export default async function getEquipment() {
  let baseURL: string;
  if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3000';
  } else {
    baseURL = 'https://mauritiusmedia.vercel.app';
  }

  const res = await fetch(`${baseURL as string}/api/equipment`, {
    next: { tags: ['equipment'] },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
