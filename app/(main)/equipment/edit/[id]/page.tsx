'use client';

import { fetcher } from '@/helpers/fetcher';
import useSWR from 'swr';

export default function EquipmentPage({ params }: any) {
  const { id } = params;

  console.log(id);

  const { data, error, isLoading } = useSWR(`/api/equipment/${id}`, fetcher);

  if (isLoading) {
    return <div className="mt-20">Loading...</div>;
  }

  return <div className="mt-20">edit</div>;
}
