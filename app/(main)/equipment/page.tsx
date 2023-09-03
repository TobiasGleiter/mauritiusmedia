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
  const session = useSession();
  const [searchTerm, setSearchTerm] = useState('');
  const filterAttributes = ['name', 'location', 'category'];
  const { data, isLoading, isValidating } = useSWR('/api/equipment', fetcher);

  const handleDelete = async (id: any) => {
    if (!id) {
      return;
    }
    await deleteEquipment(id);
  };

  const filteredData = EquipmentFilter(data, searchTerm, filterAttributes);

  if (isLoading) {
    return (
      <div className="w-full mt-4">
        <Link
          href="/equipment/create"
          className="flex justify-center lg:hidden fixed bottom-5 right-5 bg-primary-600 w-64 text-center p-2 rounded-md text-black"
        >
          <BaseIcon icon="newequipment" style="ml-1 w-6 h-6" />
          <p className="ml-1 align-middle">Create new</p>
        </Link>
        <div className="flex flex-col lg:flex-row align-middle gap-2 ">
          <Link
            href="/equipment/create"
            className="hidden bg-primary-600 w-full lg:hover:bg-white duration-200 text-black p-1 rounded-md lg:flex lg:w-48 text-center"
          >
            <BaseIcon icon="newequipment" style="ml-1 w-6 h-6" />
            <p className="ml-1 align-middle">Create new</p>
          </Link>
          <div className="flex flex-row w-full items-center border-b border-white/20 py-1">
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
          <div className="flex font-bold mb-2 items-center text-lg">
            Equipment
            {isValidating && (
              <BaseIcon icon="spinner" style="ml-2 animate-spin" />
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mt-4">
      <Link
        href="/equipment/create"
        className="flex justify-center lg:hidden fixed bottom-5 right-5 bg-primary-600 w-64 text-center p-2 rounded-md text-black"
      >
        <BaseIcon icon="newequipment" style="ml-1 w-6 h-6" />
        <p className="ml-1 align-middle">Create new</p>
      </Link>
      <div className="flex flex-col lg:flex-row align-middle gap-2 ">
        <Link
          href="/equipment/create"
          className="hidden bg-primary-600 w-full lg:hover:bg-white duration-200 text-black p-1 rounded-md lg:flex lg:w-48 text-center"
        >
          <BaseIcon icon="newequipment" style="ml-1 w-6 h-6" />
          <p className="ml-1 align-middle">Create new</p>
        </Link>
        <div className="flex flex-row w-full items-center border-b border-white/20 py-1">
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
            <BaseIcon icon="spinner" style="ml-2 animate-spin" />
          )}
        </div>
        <ul className="space-y-2">
          {filteredData.map((item: any) => {
            return (
              <li
                key={item._id}
                className="grid gap-2 md:grid-cols-6 sm:grid-cols-4 xs:grid-cols-1 
                            p-4 mb-2
                            border dark:border-white/20 rounded-xl 
                            bg-gradient-to-br dark:from-black dark:to-zinc-900 from-white to-zinc-100
                          text-black dark:text-white
                            overflow-hidden"
              >
                <EquipmentCard
                  _id={item._id}
                  name={item.name}
                  category={item.category}
                  location={item.location}
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
