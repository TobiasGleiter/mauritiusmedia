'use client';

import SundayServiceDetailsCard from '@/components/feature/sundayservice/details/SundayServiceDetailsCard';
import PageNavigation from '@/components/navigation/page/PageNavigation';
import { fetcher } from '@/helpers/fetcher';
import useSWR from 'swr';

/**
 * This Page is responsible for loading a specific sunday-service data
 *
 *
 */

export default function SundayServicePage({ params }: any) {
  const { id } = params;

  const { data, isLoading } = useSWR(`/api/sunday-service/${id}`, fetcher);

  if (isLoading) return <LoadingSkeleton />;

  return (
    <div className="flex flex-col w-full mb-40">
      <PageNavigation link="/sunday-service" />
      <SundayServiceDetailsCard data={data} />
    </div>
  );
}

// local loading skelton
const LoadingSkeleton = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="BACK flex items-center bg-secondary-200 h-6 w-20 animate-pulse rounded-md" />
      <div className="CREATE CARD h-[261px] mt-6 py-4 px-4 rounded-2xl shadow-md bg-white">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold">Details Sunday Service</h1>
        </div>
        <div className="flex flex-col gap-2 w-full  mt-6">
          <div className="NAME flex flex-col w-full ">
            <p className=" antialiased text-base text-secondary-600">Name</p>
            <div className="w-full h-[32px] bg-secondary-200 rounded-lg animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};
