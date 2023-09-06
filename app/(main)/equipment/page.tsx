'use client';

import BaseListbox from '@/components/listbox/base/BaseListbox';
import { FilterEquipment } from '@/helpers/equipment/filter';
import { fetcher } from '@/helpers/fetcher';
import Link from 'next/link';
import { useState } from 'react';
import useSWR from 'swr';

const labelsCategory = [
  'All',
  'Audio',
  'Video',
  'Stream',
  'Licht',
  'Sonstiges',
];

const labelsLocation = [
  'Nothing',
  'Kirche',
  'Gemeindehaus',
  'Allgemein',
  'Pfarrscheuer',
];

export default function EquipmentPage() {
  const [showCategory, setShowCategory] = useState('All');
  const [filterLocation, setFilterLocation] = useState('Nothing');

  const { data, isLoading, isValidating } = useSWR('/api/equipment', fetcher);

  let filteredData = FilterEquipment(data, showCategory, filterLocation);

  if (isLoading) {
    return (
      <div className="w-full mt-4">
        <div className="ACTIONS">
          <h1 className="text-3xl font-bold">Actions</h1>
          <div className="flex lg:flex-row md:flex-row flex-col mt-4 gap-4">
            <Link
              href="/equipment/create"
              className="bg-white h-20 py-2 px-4 rounded-2xl shadow-md lg:w-64 md:w-64 w-full border border-white hover:border-primary-500"
            >
              <h2 className="text-2xl antialiased">Create</h2>
              <p className="text-secondary-700 antialiased">new Equipment</p>
            </Link>
            <div className="bg-white h-20 py-2 px-4 rounded-2xl shadow-md lg:w-64 md:w-64 w-full border border-white hover:border-primary-500">
              <h2 className="text-2xl antialiased">Search</h2>
              <p className="text-secondary-700 antialiased">in Equipment</p>
            </div>
          </div>
        </div>
        <div className="EQUIPMENT mt-16 py-4 px-4 rounded-2xl shadow-md bg-white min-h-screen">
          <h1 className="text-3xl font-bold">Equipment</h1>
          <div className="FILTER-BAR flex lg:flex-row sm:flex-row flex-col gap-4 mt-2">
            <div className="flex items-center align-middle">
              <p className="text-base text-secondary-600 antialiased">Show</p>

              <BaseListbox
                labels={labelsCategory}
                placeholder={labelsCategory[0]}
                value={showCategory}
                setValue={setShowCategory}
              />
            </div>
            <div className="flex w-full items-center align-middle">
              <p className="flex text-base text-secondary-600 antialiased">
                Filter
              </p>
              <BaseListbox
                labels={labelsLocation}
                placeholder={labelsLocation[0]}
                value={filterLocation}
                setValue={setFilterLocation}
              />
            </div>
          </div>
          <div className="CARDS flex flex-col mt-4 gap-2">
            <div className="shadow-md h-28 border bg-secondary-100/40 border-secondary-800/10 rounded-2xl animate-pulse" />
            <div className="shadow-md h-28 border bg-secondary-100/60 border-secondary-800/10 rounded-2xl animate-pulse" />
            <div className="shadow-md h-28 border bg-secondary-100/20 border-secondary-800/10 rounded-2xl animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mt-4 mb-40">
      <div className="ACTIONS">
        <h1 className="text-3xl font-bold">Actions</h1>
        <div className="flex lg:flex-row md:flex-row flex-col mt-4 gap-4">
          <Link
            href="/equipment/create"
            className="bg-white h-20 py-2 px-4 rounded-2xl shadow-md lg:w-64 md:w-64 w-full border border-white hover:border-primary-500"
          >
            <h2 className="text-2xl antialiased">Create</h2>
            <p className="text-secondary-700 antialiased">new Equipment</p>
          </Link>
          <div className="bg-white h-20 py-2 px-4 rounded-2xl shadow-md lg:w-64 md:w-64 w-full border border-white hover:border-primary-500">
            <h2 className="text-2xl antialiased">Search</h2>
            <p className="text-secondary-700 antialiased">in Equipment</p>
          </div>
        </div>
      </div>
      <div className="EQUIPMENT mt-16 py-4 px-4 rounded-2xl shadow-md bg-white min-h-screen">
        <h1 className="text-3xl font-bold">Equipment</h1>
        <div className="FILTER-BAR flex lg:flex-row sm:flex-row flex-col gap-4 mt-2">
          <div className="flex items-center align-middle">
            <p className="text-base text-secondary-600 antialiased">Show</p>

            <BaseListbox
              labels={labelsCategory}
              placeholder={labelsCategory[0]}
              value={showCategory}
              setValue={setShowCategory}
            />
          </div>
          <div className="flex w-full items-center align-middle">
            <p className="flex text-base text-secondary-600 antialiased">
              Filter
            </p>
            <BaseListbox
              labels={labelsLocation}
              placeholder={labelsLocation[0]}
              value={filterLocation}
              setValue={setFilterLocation}
            />
          </div>
        </div>
        <div className="CARDS flex flex-col mt-4 gap-2">
          {filteredData.map((item: any) => {
            return (
              <Link
                key={item._id}
                href={`/equipment/details/${item._id}`}
                className="flex flex-col h-28 shadow-md border border-secondary-800/10 rounded-2xl px-4 pt-3"
              >
                <h2 className="text-xl antialiased font-medium">{item.name}</h2>
                <p className="text-lg text-secondary-600 antialiased font-medium">
                  {item.category}
                </p>
                <div className="flex text-lg text-secondary-600 text-center align-middle">
                  <div className={`rounded-full mt-1 w-5 h-5 ${item.color}`} />
                  <p className="ml-1 antialiased font-medium">
                    {item.location}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
