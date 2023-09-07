'use client';

import { fetcher } from '@/helpers/fetcher';
import { convertDate } from '@/helpers/sundayservice/date';
import Link from 'next/link';
import { useState } from 'react';
import useSWR from 'swr';

export default function SundayServicePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const { data, isLoading, isValidating } = useSWR(
    '/api/sunday-service',
    fetcher
  );

  if (isLoading) {
    return <></>;
  }
  return (
    <div className="w-full mt-4 mb-40">
      <div className="ACTIONS">
        <h1 className="text-3xl font-bold">Actions</h1>
        <div className="flex lg:flex-row md:flex-row flex-col mt-4 gap-4">
          <Link
            href="/sunday-service/create"
            className="bg-white h-20 py-2 px-4 rounded-2xl shadow-md lg:w-64 md:w-64 w-full border border-white hover:border-primary-500"
          >
            <h2 className="text-2xl antialiased">Create</h2>
            <p className="text-secondary-700 antialiased">new Sunday Service</p>
          </Link>
          <div className="bg-white h-20 py-2 px-4 rounded-2xl shadow-md lg:w-64 md:w-64 w-full border border-white hover:border-primary-500">
            <h2 className="text-2xl antialiased">Search</h2>
            <p className="text-secondary-700 antialiased">in Sunday Service</p>
          </div>
        </div>
      </div>
      <div className="EQUIPMENT mt-16 py-4 px-4 rounded-2xl shadow-md bg-white min-h-screen">
        <h1 className="text-3xl font-bold">Sunday Service</h1>
        <div className="FILTER-BAR flex lg:flex-row sm:flex-row flex-col gap-4 mt-2">
          <div className="flex items-center align-middle"></div>
        </div>
        <div className="CARDS flex flex-col mt-4 gap-2">
          {data.map((item: any) => {
            return (
              <Link
                key={item._id}
                href={`/sunday-service/details/${item._id}`}
                className="flex flex-col h-28 shadow-md border border-secondary-800/10 rounded-2xl px-4 pt-3"
              >
                <h2 className="text-xl antialiased font-medium">{item.name}</h2>
                <p className="text-lg text-secondary-600 antialiased font-medium">
                  {convertDate(item.date)}
                </p>
                <div className="flex text-lg text-secondary-600 text-center align-middle">
                  <p className="antialiased font-medium">{item.location}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
