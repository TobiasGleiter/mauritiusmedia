'use client';

import BaseIcon from '@/components/icons/base/BaseIcon';
import { fetcher } from '@/helpers/fetcher';
import useSWR from 'swr';

export default function EquipmentPage({ params }: any) {
  const { id } = params;

  const { data, error, isLoading, isValidating } = useSWR(
    `/api/equipment/${id}`,
    fetcher
  );

  if (isLoading) {
    return <div className="mt-20">Loading...</div>;
  }

  return (
    <div className="text-white">
      <div className="flex font-bold mb-2 items-center">
        Details
        {isValidating && <BaseIcon icon="spinner" style="ml-2 animate-spin" />}
      </div>
      <div>{data.name}</div>
      <div>{data.category}</div>
      <div>{data.location}</div>
    </div>
  );
}
