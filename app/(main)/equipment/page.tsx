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
        <ul className="space-y-2 mb-20">
          {filteredData.map((item: any) => {
            return (
              <li key={item._id}>
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
