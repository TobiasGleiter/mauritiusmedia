'use client';

import BaseIcon from '@/components/icons/base/BaseIcon';
import { fetcher } from '@/helpers/fetcher';
import Link from 'next/link';
import useSWR from 'swr';

export default function EquipmentPage() {
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
    return <div className="mt-20">Loading...</div>;
  }

  return (
    <div className="mt-20 w-full space-y-6">
      <div className="flex  align-middle gap-2 ">
        <Link
          href="/equipment/create"
          className="bg-primary-600 lg:hover:bg-white duration-200 text-black p-2 rounded-md w-32 text-center"
        >
          Create new
        </Link>
        <div className="w-full border border-priamary-600 rounded-md px-6 py-2">
          Search...
        </div>
      </div>
      <div>
        <p className="font-bold mb-2">Equipment</p>
        <ul className="space-y-2">
          {data.map((item: any) => {
            return (
              <li key={item._id} className="relative">
                <div className="flex flex-col lg:flex-row justify-between border border-secondary-600/40 p-2 rounded-md">
                  <div className="flex flex-col overflow-hidden mb-2">
                    <p className=" ">{item.name}</p>
                    <p>{item.category}</p>
                    <p>{item.location}</p>
                  </div>
                  <div className="space-x-2 ">
                    <Link
                      href={`/equipment/edit/${item._id}`}
                      className="p-2 lg:py-0 lg:px-2 rounded-sm bg-primary-600 text-black lg:hover:bg-white duration-200"
                    >
                      Edit
                    </Link>
                    <Link
                      href={`/equipment/details/${item._id}`}
                      className="p-2 lg:py-0 lg:px-2 rounded-sm bg-primary-600 text-black lg:hover:bg-white duration-200"
                    >
                      Details
                    </Link>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="p-2 lg:py-0 lg:px-2 rounded-sm bg-primary-600 text-black lg:hover:bg-red-600 duration-200"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                {isValidating && (
                  <div className="absolute top-1/2 -translate-y-1/2 left-1/2">
                    <BaseIcon icon="spinner" style="animate-spin" />
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
