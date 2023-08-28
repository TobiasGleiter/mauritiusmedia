'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CreateEquipmentPage() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!name || !location || !category) {
      // some action
      console.log('Error');
      return;
    }

    const body = JSON.stringify({ name, category, location });
    try {
      const res = await fetch('/api/equipment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      });

      if (res.ok) {
        await fetch(
          `/api/revalidate?tag=equipment&secret=${process.env.SECRET_REVALIDATION_TOKEN}`,
          { method: 'POST' }
        );

        router.refresh();
        router.push('/equipment');
      }
    } catch (error: any) {
      throw new Error('Failed to create new Equipment');
    }
  };

  return (
    <div className="mt-20">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="border"
          type="text"
          placeholder="Name"
        />
        <input
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className="border"
          type="text"
          placeholder="Category"
        />
        <input
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          className="border"
          type="text"
          placeholder="Location"
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}
