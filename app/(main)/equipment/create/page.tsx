'use client';

import BaseIcon from '@/components/icons/base/BaseIcon';
import BaseListbox from '@/components/listbox/base/BaseListbox';
import { createEquipment } from '@/helpers/equipment/api';
import { selectColorFromLocation } from '@/helpers/equipment/color';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const labelsCategory = ['Audio', 'Video', 'Stream', 'Licht', 'Sonstiges'];
const labelsLocation = ['Kirche', 'Gemeindehaus', 'Allgemein', 'Pfarrscheuer'];

export default function CreateEquipmentPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [count, setCount] = useState('1');
  const [category, setCategory] = useState('Audio');
  const [location, setLocation] = useState('Kirche');

  // Interactivity
  const [isError, setIsError] = useState({ status: false, message: '' });
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsError({
      status: false,
      message: '',
    });

    if (!name || !location || !category || !count) {
      // some action
      setIsError({
        status: true,
        message: 'Please provide at least name, location, count and category.',
      });
      return;
    }

    // send new equipment
    let color = selectColorFromLocation(location.toLowerCase());
    const body = JSON.stringify({
      name,
      description,
      count,
      category,
      location,
      color,
    });

    const res = await createEquipment(body);

    if (!res.ok) {
      setIsError({
        status: true,
        message: 'Error while creating Equipment. Please try later.',
      });
      return;
    }

    router.push('/equipment');
  };

  return (
    <div className="w-fit">
      <Link
        href="/equipment"
        className="BACK flex items-center text-secondary-500 group"
      >
        <BaseIcon
          icon="arrowback"
          style="group-hover:text-secondary-800 duration-200"
        />
        <p className=" group-hover:text-secondary-800 duration-200">Back</p>
      </Link>
      <div className="CREATE CARD mt-6 py-4 px-4 rounded-2xl shadow-md bg-white sm:w-96">
        <h1 className="text-3xl font-bold">Create new Equipment</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 w-full mt-6"
        >
          <div className="NAME flex flex-col w-full ">
            <p className=" antialiased text-base text-secondary-600">Name</p>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="border border-secondary-500 text-black rounded-lg bg-transparent py-1 px-4"
              type="text"
              placeholder="..."
            />
          </div>
          <div className="DESCRIPTION flex flex-col w-full">
            <p className=" antialiased text-base text-secondary-600">
              Description
            </p>
            <input
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              className="border border-secondary-500 text-black rounded-lg bg-transparent py-1 px-4 pb-10"
              type="text"
              placeholder="..."
            />
          </div>
          <div className="COUNT flex flex-col w-full">
            <p className="antialiased text-base text-secondary-600">Count</p>
            <input
              onChange={(e) => setCount(e.target.value)}
              value={count}
              className="border border-secondary-500 text-black rounded-lg bg-transparent py-1 px-4"
              type="number"
              min={1}
              max={100}
              placeholder="Enter count..."
            />
          </div>

          <div className="flex flex-col w-full">
            <p className=" antialiased text-base text-secondary-600">
              Category
            </p>
            <BaseListbox
              labels={labelsCategory}
              placeholder={labelsCategory[0]}
              value={category}
              setValue={setCategory}
            />
          </div>
          <div className="flex flex-col w-full">
            <p className=" antialiased text-base text-secondary-600">
              Location
            </p>
            <BaseListbox
              labels={labelsLocation}
              placeholder={labelsLocation[0]}
              value={location}
              setValue={setLocation}
            />
          </div>
          <div className="flex justify-center mt-6">
            <div className="w-64 border-b border-secondary-100" />
          </div>
          <button
            type="submit"
            className=" flex bg-primary-500 text-black justify-center rounded-full hover:bg-primary-600 duration-200"
          >
            <p className="ml-1 align-middle">Create</p>
          </button>
          <div>
            {isError.status && (
              <p className="text-danger-500 font-semibold">{isError.message}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
