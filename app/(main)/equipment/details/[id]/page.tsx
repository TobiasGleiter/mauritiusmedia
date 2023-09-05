'use client';

import BaseIcon from '@/components/icons/base/BaseIcon';
import { fetcher } from '@/helpers/fetcher';
import useSWR from 'swr';

export default function EquipmentPage({ params }: any) {
  const { id } = params;

  const {
    data: equipment,
    isLoading,
    isValidating,
  } = useSWR(`/api/equipment/${id}`, fetcher);

  if (isLoading) {
    return <></>;
  }

  return (
    <div className="w-full text-white mt-4">
      <div className="flex font-bold text-lg antialiased mb-2 items-center">
        Details
        {isValidating && <BaseIcon icon="spinner" style="ml-2 animate-spin" />}
      </div>
      <div className="flex flex-row gap-4 p-4 bg-zinc-900">
        <div
          className={`w-1 flex-none rounded-none ${
            equipment.color ? equipment.color : 'bg-secondary-600'
          } `}
        />
        <div className="flex flex-col gap-2">
          <div>
            <p className="text-white/50 gont-bold text-xs">Name</p>
            <p className="font-semibold text-xl ">{equipment.name}</p>
          </div>
          <div>
            <p className="text-white/50 gont-bold text-xs">Category</p>
            <p className="text-white/80 text-lg">{equipment.category}</p>
          </div>
          <div>
            <p className="text-white/50 gont-bold text-xs">Location</p>
            <p className="text-white/80 text-lg">{equipment.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
