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
      const res = await fetch(`/api/equipment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      });

      if (res.ok) {
        /*
        await fetch(
          `${baseURL}/api/revalidate?tag=equipment&secret=${process.env.SECRET_REVALIDATION_TOKEN}`,
          { method: 'POST' }
        );
        */
        //router.refresh();
        router.push('/equipment');
      }
    } catch (error: any) {
      throw new Error('Failed to create new Equipment');
    }
  };

  return (
    <div className="w-full">
      <div className="flex font-bold mb-2 items-center">
        Create new Equipment
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 w-full lg:w-96"
      >
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="border border-white/20 rounded-md bg-transparent py-1 px-2"
          type="text"
          placeholder="Name"
        />
        <input
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className="border border-white/20 rounded-md bg-transparent py-1 px-2"
          type="text"
          placeholder="Category"
        />
        <input
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          className="border border-white/20 rounded-md bg-transparent py-1 px-2"
          type="text"
          placeholder="Location"
        />
        <button
          type="submit"
          className="bg-primary-600 w-full lg:hover:bg-white duration-200 text-black p-1 rounded-md lg:w-32 text-center"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}
