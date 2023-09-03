'use client';

import BaseIcon from '@/components/icons/base/BaseIcon';
import { fetcher } from '@/helpers/fetcher';
import { convertDate } from '@/helpers/sundayservice/date';
import Link from 'next/link';
import useSWR from 'swr';

export default function SundayServicePage() {
  const { data, isLoading, isValidating } = useSWR(
    '/api/sundayservice',
    fetcher
  );

  if (isLoading) {
    return 'Wait until data is ready';
  }
  return (
    <div className="w-full mt-4">
      <div className="mt-6">
        <div className="flex text-lg font-bold mb-2 items-center">
          Sunday Service
          {isValidating && (
            <BaseIcon icon="spinner" style="ml-2 animate-spin" />
          )}
        </div>
        <ul className="space-y-2 mb-20">
          {data.map((item: any) => {
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
                <div className="flex flex-row md:col-span-5 sm:col-span-3 xs:col-span-1 ">
                  <div className={`w-1 flex-none rounded-md bg-red-600`} />
                  <div className="flex flex-col ml-6">
                    <p className="font-semibold">{item.name}</p>
                    <p>{convertDate(item.date)}</p>
                  </div>
                </div>
                <div className="flex flex-row sm:flex-col gap-1">
                  <Link
                    href={`/sunday-service/details/${item._id}`}
                    className="px-2 rounded-sm text-center border border-white/20 text-white lg:hover:text-black lg:hover:bg-white duration-200"
                  >
                    Details
                  </Link>
                  <button className="px-2 rounded-sm text-center border border-white/20 text-white lg:hover:text-black lg:hover:bg-white duration-200">
                    Share
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}