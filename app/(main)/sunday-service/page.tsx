'use client';

import ActionsSundayService from '@/components/feature/sundayservice/actions/ActionsSundayService';
import SundayServiceList from '@/components/list/sundayservice/SundayServiceList';
import { fetcher } from '@/helpers/fetcher';
import { SortSundayService } from '@/helpers/sundayservice/filter';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import useSWR from 'swr';

/***
 *  This Page is responsible for displaying a list of (sorted) Sunday services
 *  - Besides that, it is also responsible for finding a sunday service (search modal)
 */

export default function SundayServicePage() {
  const { data, isLoading } = useSWR('/api/sunday-service', fetcher);
  const filteredData = SortSundayService(data);

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  if (isLoading) return <LoadingSkeleton />;

  return (
    <div className="w-full mt-0 mb-40">
      <LazySearchModal
        data={filteredData}
        closeModal={closeModal}
        isOpen={isOpen}
      />
      <ActionsSundayService openModal={openModal} />
      <div className="SUNDAY-SERVICE mt-4 py-4 px-4 rounded-2xl shadow-md bg-white min-h-screen">
        <h1 className="text-3xl font-bold">Sunday Service</h1>
        <div className="FILTER-BAR flex lg:flex-row sm:flex-row flex-col gap-4 mt-2">
          <div className="flex items-center align-middle"></div>
        </div>
        <SundayServiceList data={filteredData} />
      </div>
    </div>
  );
}

// Lazy search modal
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

// local loading skeleton
const LoadingSkeleton = () => {
  return (
    <div className="w-full mt-0 mb-40">
      <div className="ACTIONS">
        <h1 className="text-3xl font-bold">Actions</h1>
        <div className="flex lg:flex-row md:flex-row flex-col mt-2 gap-1">
          <div className="bg-white py-1 px-4 rounded-2xl shadow-md lg:w-64 md:w-64 w-full border border-white hover:border-primary-500">
            <h2 className="text-2xl antialiased">Search</h2>
            <p className="text-secondary-700 antialiased">in Sunday Service</p>
          </div>
        </div>
      </div>
      <div className="EQUIPMENT mt-4 py-4 px-4 rounded-2xl shadow-md bg-white min-h-screen">
        <h1 className="text-3xl font-bold">Sunday Service</h1>
        <div className="CARDS flex flex-col mt-4 gap-2">
          <div className="shadow-md h-28 border bg-secondary-100/40 border-secondary-800/10 rounded-2xl animate-pulse" />
          <div className="shadow-md h-28 border bg-secondary-100/60 border-secondary-800/10 rounded-2xl animate-pulse" />
          <div className="shadow-md h-28 border bg-secondary-100/20 border-secondary-800/10 rounded-2xl animate-pulse" />
        </div>
      </div>
    </div>
  );
};
