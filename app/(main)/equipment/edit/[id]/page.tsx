'use client';

import { useSearchParams } from 'next/navigation';

import { useState } from 'react';

export default function EquipmentPage({ params }: any) {
  const { id } = params;
  const searchParams = useSearchParams();

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
    try {
      const res = await fetch(`/api/equipment/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      });

      if (res.ok) {
        // push to equipment
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };

  /*
  const { data, error, isLoading } = useSWR(`/api/equipment/${id}`, fetcher);

  if (isLoading) {
    return (
      <div className="w-full">
        <div className="flex font-bold mb-2 items-center">Update Equipment</div>
        <div className="">Loading...</div>
      </div>
    );
  }
  */

  return (
    <div className="w-full">
      <div className="flex font-bold mb-2 items-center">Update Equipment</div>
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
