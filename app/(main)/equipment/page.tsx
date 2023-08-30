'use client';

import BaseIcon from '@/components/icons/base/BaseIcon';
import { fetcher } from '@/helpers/fetcher';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import useSWR from 'swr';

export default function EquipmentPage() {
  const session = useSession();
  const { data, mutate, error, isLoading, isValidating } = useSWR(
    '/api/equipment',
    fetcher
  );

  const handleDelete = async (id: any) => {
    if (!id) {
      return;
    }
    console.log(id);

    try {
      const res = await fetch(`/api/equipment/${id}`, {
        method: 'PATCH',
      });

      if (res.ok) {
        mutate();
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };

  if (isLoading) {
    return (
      <div className="w-full space-y-6">
        <div className="flex flex-col lg:flex-row align-middle gap-2 ">
          <Link
            href="/equipment/create"
            className="bg-primary-600 w-full lg:hover:bg-white duration-200 text-black p-1 rounded-md lg:w-32 text-center"
          >
            Create new
          </Link>
          <div className="w-full border border-white/20 rounded-md px-6 py-1">
            Search...
          </div>
        </div>
        <div>
          <div className="flex font-bold mb-2 items-center">
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
    <div className="w-full space-y-6">
      <div className="flex flex-col lg:flex-row align-middle gap-2 ">
        <Link
          href="/equipment/create"
          className="bg-primary-600 w-full lg:hover:bg-white duration-200 text-black p-1 rounded-md lg:w-32 text-center"
        >
          Create new
        </Link>
        <div className="w-full border border-white/20 rounded-md px-6 py-1">
          Search...
        </div>
      </div>
      <div>
        <div className="flex font-bold mb-2 items-center">
          Equipment
          {isValidating && (
            <BaseIcon icon="spinner" style="ml-2 animate-spin" />
          )}
        </div>
        <ul className="space-y-2">
          {data.map((item: any) => {
            return (
              <li
                key={item._id}
                className="grid gap-2 md:grid-cols-6 sm:grid-cols-4 xs:grid-cols-1 
              p-4 mb-2
              border dark:border-white/20 rounded-xl 
              bg-gradient-to-br dark:from-black dark:to-zinc-900 from-white to-zinc-100
              cursor-pointer
            text-black dark:text-white
              overflow-hidden"
              >
                <div className="flex flex-row md:col-span-5 sm:col-span-3 xs:col-span-1 ">
                  <div className="w-1 flex-none rounded-md bg-primary-600" />
                  <div className="flex flex-col ml-6">
                    <p className="font-semibold">{item.name}</p>
                    <p>{item.category}</p>
                    <p>{item.location}</p>
                  </div>
                </div>
                <div className="flex flex-row sm:flex-col gap-1">
                  {session.data?.user.role !== 'admin' ? (
                    <Link
                      href={`/equipment/details/${item._id}`}
                      className="px-2 rounded-sm text-center border border-white/20 text-white lg:hover:text-black lg:hover:bg-white duration-200"
                    >
                      Details
                    </Link>
                  ) : (
                    <>
                      <Link
                        href={`/equipment/edit/${item._id}?name=${item.name}&category=${item.category}&location=${item.location}`}
                        className="px-2 rounded-sm text-center border border-white/20 text-white lg:hover:text-black lg:hover:bg-white duration-200"
                      >
                        Edit
                      </Link>
                      <Link
                        href={`/equipment/details/${item._id}`}
                        className="px-2 rounded-sm text-center border border-white/20 text-white lg:hover:text-black lg:hover:bg-white duration-200"
                      >
                        Details
                      </Link>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="px-2 rounded-sm text-center border border-white/20 text-white lg:hover:border-red-600 lg:hover:text-red-600 duration-200"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
