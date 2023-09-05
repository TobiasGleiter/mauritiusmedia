'use client';

import BaseIcon from '@/components/icons/base/BaseIcon';
import BaseListbox from '@/components/listbox/base/BaseListbox';
import { createEquipment } from '@/helpers/equipment/api';
import { selectColorFromLocation } from '@/helpers/equipment/color';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const labelsCategory = ['Audio', 'Video', 'Stream', 'Licht', 'Sonstiges'];
const labelsLocation = ['Kirche', 'Gemeindehaus', 'Allgemein', 'Pfarrscheuer'];

export default function CreateEquipmentPage() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Audio');
  const [location, setLocation] = useState('Kirche');

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!name || !location || !category) {
      // some action
      console.log('Error');
      return;
    }

    let color = selectColorFromLocation(location.toLowerCase());
    const body = JSON.stringify({ name, category, location, color });
    const res = await createEquipment(body);

    if (res) {
      /*
        await fetch(
          `${baseURL}/api/revalidate?tag=equipment&secret=${process.env.SECRET_REVALIDATION_TOKEN}`,
          { method: 'POST' }
        );
        */
      router.push('/equipment');
    }
  };

  return (
    <div className="w-full mt-4">
      <div className="flex font-bold text-lg antialiased mb-2 items-center">
        Create new Equipment
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 w-full lg:w-96"
      >
        <div className="flex flex-col w-full">
          <p className="font-bold text-xs text-secondary-600">Name</p>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="border border-white/20 rounded-none bg-transparent py-1 px-2"
            type="text"
            placeholder="..."
          />
        </div>
        <div className="flex flex-col w-full">
          <p className="font-bold text-xs text-secondary-600">Category</p>
          <BaseListbox
            labels={labelsCategory}
            value={category}
            setValue={setCategory}
          />
        </div>
        <div className="flex flex-col w-full">
          <p className="font-bold text-xs text-secondary-600">Location</p>
          <BaseListbox
            labels={labelsLocation}
            value={location}
            setValue={setLocation}
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-zinc-900 w-full lg:hover:border-primary-600 lg:hover:text-primary-600 duration-200 text-zinc-400 p-1 rounded-none flex  text-center border border-zinc-600"
        >
          <BaseIcon icon="newequipment" style="ml-1 w-6 h-6 flex-none" />
          <p className="ml-1 align-middle">Create new</p>
        </button>
      </form>
    </div>
  );
}
