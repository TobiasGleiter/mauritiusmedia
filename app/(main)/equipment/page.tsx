'use client';

import EquipmentCard from '@/components/card/equipment/EquipmentCard';
import BaseIcon from '@/components/icons/base/BaseIcon';
import { deleteEquipment } from '@/helpers/equipment/api';
import { EquipmentFilter } from '@/helpers/equipment/filter';
import { fetcher } from '@/helpers/fetcher';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import useSWR from 'swr';

export default function EquipmentPage() {
  const { data: session } = useSession();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string | null>(null);
  const filterAttributes = ['name', 'location', 'category'];
  const { data, isLoading, isValidating } = useSWR('/api/equipment', fetcher);

  const handleDelete = async (id: any) => {
    if (!id) {
      return;
    }
    await deleteEquipment(id);
  };

  let filteredData = EquipmentFilter(
    data,
    searchTerm,
    filterAttributes,
    filterType
  );

  const handleFilterType = (type: string | null) => {
    setFilterType(type);
    filteredData = EquipmentFilter(
      data,
      searchTerm,
      filterAttributes,
      filterType
    );
  };

  if (isLoading) {
    return (
      <div className="w-full mt-4">
        <div className="flex flex-col lg:flex-row align-middle gap-2 ">
          <Link
            href="/equipment/create"
            className=" bg-zinc-900 w-full lg:hover:border-primary-600 lg:hover:text-primary-600 duration-200 text-zinc-400 p-1 rounded-none flex lg:w-48 text-center border border-zinc-600"
          >
            <BaseIcon icon="newequipment" style="ml-1 w-6 h-6 flex-none" />
            <p className="ml-1 align-middle">Create new</p>
          </Link>
          <div className="flex flex-row w-full items-center border border-white/20 py-1 px-2">
            <BaseIcon icon="search" style="w-5 h-5 text-white/70" />
            <input
              id="search"
              name="search"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="ml-1 focus:outline-none bg-transparent resize-none"
            />
          </div>
        </div>
        <div className="mt-6">
          <div className="flex text-lg font-bold mb-2 items-center">
            Equipment
            {isValidating && (
              <BaseIcon
                icon="spinner"
                style="ml-2 animate-spin text-primary-600"
              />
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mt-4">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col lg:flex-row align-middle gap-2 ">
          <Link
            href="/equipment/create"
            className=" bg-zinc-900 w-full lg:hover:border-primary-600 lg:hover:text-primary-600 duration-200 text-zinc-400 p-1 rounded-none flex lg:w-48 text-center border border-zinc-600"
          >
            <BaseIcon icon="newequipment" style="ml-1 w-6 h-6 flex-none" />
            <p className="ml-1 align-middle">Create new</p>
          </Link>
          <div className="flex flex-row w-full items-center border border-white/20 py-1 px-2">
            <BaseIcon icon="search" style="w-5 h-5 text-white/70" />
            <input
              id="search"
              name="search"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="ml-1 focus:outline-none bg-transparent resize-none"
            />
          </div>
        </div>
        <div className="flex gap-1">
          <button
            onClick={() => handleFilterType(null)}
            className={`px-2 rounded-xl ${
              filterType === null
                ? 'bg-primary-600 text-black'
                : 'bg-zinc-900 text-zinc-400'
            } antialiased text-center `}
          >
            All
          </button>
          <button
            onClick={() => handleFilterType('Audio')}
            className={`px-2 rounded-xl ${
              filterType === 'Audio'
                ? 'bg-primary-600 text-black'
                : 'bg-zinc-900 text-zinc-400'
            } antialiased text-center `}
          >
            Audio
          </button>
          <button
            onClick={() => handleFilterType('Video')}
            className={`px-2 rounded-xl ${
              filterType === 'Video'
                ? 'bg-primary-600 text-black'
                : 'bg-zinc-900 text-zinc-400'
            } antialiased text-center `}
          >
            Video
          </button>
          <button
            onClick={() => handleFilterType('Licht')}
            className={`px-2 rounded-xl ${
              filterType === 'Licht'
                ? 'bg-primary-600 text-black'
                : 'bg-zinc-900 text-zinc-400'
            } antialiased text-center `}
          >
            Licht
          </button>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex text-lg font-bold mb-2 items-center">
          Equipment
          {isValidating && (
            <BaseIcon
              icon="spinner"
              style="ml-2 animate-spin text-primary-600"
            />
          )}
        </div>
        <ul className="space-y-2 mb-20">
          {filteredData.map((item: any) => {
            return (
              <li key={item._id}>
                <EquipmentCard
                  equipment={item}
                  session={session}
                  handleDelete={handleDelete}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
