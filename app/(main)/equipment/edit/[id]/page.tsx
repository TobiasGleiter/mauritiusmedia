'use client';

import { updateEquipment } from '@/helpers/equipment/api';
import { useRouter, useSearchParams } from 'next/navigation';

import { useState } from 'react';

export default function EquipmentPage({ params }: any) {
  const { id } = params;
  const searchParams = useSearchParams();
  const router = useRouter();

  const [name, setName] = useState(searchParams.get('name') as string);
  const [category, setCategory] = useState(
    searchParams.get('category') as string
  );
  const [location, setLocation] = useState(
    searchParams.get('location') as string
  );

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!name || !location || !category) {
      // some action
      console.log('Error');
      return;
    }

    const body = JSON.stringify({ name, category, location });
    const res = await updateEquipment(id, body);
    if (res) {
      router.push('/equipment');
    }
  };

  return (
    <div className="w-full mt-4">
      <div className="flex text-lg antialiased font-bold items-center text-white/70 border-b border-white/20 mb-4">
        Update Equipment
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
          Update
        </button>
      </form>
    </div>
  );
}
