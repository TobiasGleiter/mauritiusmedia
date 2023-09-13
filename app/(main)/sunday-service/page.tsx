'use client';

import { fetcher } from '@/helpers/fetcher';
import { convertDate } from '@/helpers/sundayservice/date';
import { hasRequiredPermissionsClient, useRole } from '@/lib/rbac/base';
import { useSession } from 'next-auth/react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useState } from 'react';
import useSWR from 'swr';

const LazySearchModal = dynamic(
  () => import('./../../../components/modal/search/SearchModal'),
  {
    loading: () => (
      <div className="fixed -top-1/2 inset-0 overflow-y-auto z-40">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <div className="bg-white w-full rounded-xl h-[48]" />
        </div>
      </div>
    ),
  }
);

const requiredPermissions = ['admin'];

export default function SundayServicePage() {
  const { data: session } = useSession();
  const role = useRole(session);
  //const [searchTerm, setSearchTerm] = useState('');
  const { data, isLoading } = useSWR('/api/sunday-service', fetcher);

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  if (isLoading) {
    return <></>;
  }
  return (
    <>
      <LazySearchModal data={data} closeModal={closeModal} isOpen={isOpen} />
      <div className="w-full mt-0 mb-40">
        <div className="ACTIONS">
          <h1 className="text-3xl font-bold">Actions</h1>
          <div className="flex lg:flex-row md:flex-row flex-col mt-2 gap-1">
            <button
              onClick={openModal}
              className="bg-white text-left py-1 px-4 rounded-2xl shadow-md lg:w-64 md:w-64 w-full border border-white hover:border-primary-500"
            >
              <h2 className="text-2xl antialiased">Search</h2>
              <p className="text-secondary-700 antialiased">
                in Sunday Service
              </p>
            </button>
            {hasRequiredPermissionsClient(
              role as string,
              requiredPermissions
            ) && (
              <Link
                href="/sunday-service/create"
                className="bg-white py-1 px-4 rounded-2xl shadow-md lg:w-64 md:w-64 w-full border border-white hover:border-primary-500"
              >
                <h2 className="text-2xl antialiased">Create</h2>
                <p className="text-secondary-700 antialiased">
                  new Sunday Service
                </p>
              </Link>
            )}
          </div>
        </div>
        <div className="EQUIPMENT mt-4 py-4 px-4 rounded-2xl shadow-md bg-white min-h-screen">
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
                  className="flex flex-col shadow-md border border-secondary-800/10 rounded-2xl px-4 pt-3"
                >
                  <h2 className="text-xl antialiased font-medium">
                    {item.name}
                  </h2>
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
    </>
  );
}
