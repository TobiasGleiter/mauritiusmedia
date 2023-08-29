'use client';

import { fetcher } from '@/helpers/fetcher';
import useSWR from 'swr';

export default function EquipmentPage({ params }: any) {
  const { id } = params;

  const { data, error, isLoading } = useSWR(`/api/equipment/${id}`, fetcher);

  if (isLoading) {
    return <div className="mt-20">Loading...</div>;
  }

  return (
    <div className="mt-20 text-white">
      Details
      <div>{data.name}</div>
      <div>{data.category}</div>
      <div>{data.location}</div>
    </div>
  );
}
