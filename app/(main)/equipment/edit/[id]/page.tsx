'use client';

import EditEquipmentForm from '@/components/form/equipment/edit/EditEquipmentForm';
import PageNavigation from '@/components/navigation/page/PageNavigation';
import { useSearchParams } from 'next/navigation';

export default function EquipmentPage({ params }: any) {
  const { id } = params;
  const searchParams = useSearchParams();

  return (
    <div className="w-full">
      <PageNavigation link="/equipment" />
      <div
        className={`CREATE CARD mt-6 py-4 px-4 rounded-2xl shadow-md bg-white borde`}
      >
        <h1 className="text-3xl font-bold">Edit Equipment</h1>
        <EditEquipmentForm id={id} searchParams={searchParams} />
      </div>
    </div>
  );
}
