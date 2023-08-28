import EquipmentDetail from '@/components/detail/equipment/EquipmentDetail';
import getEquipmentById from '@/lib/equipment/getEquipmentById';
import { Suspense } from 'react';

export default async function EquipmentPage({ params }: any) {
  const { id } = params;

  const promise = getEquipmentById(id);

  return (
    <div className="mt-20 text-white">
      Details
      <Suspense fallback="Loading...">
        <EquipmentDetail promise={promise} />
      </Suspense>
    </div>
  );
}
