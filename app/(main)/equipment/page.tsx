import EquipmentList from '@/components/list/equipment/EquipmentList';
import getEquipment from '@/lib/equipment/getEquipment';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function EquipmentPage() {
  const equipment = getEquipment();

  return (
    <div className="mt-20 min-w-screen w-full space-y-6">
      <div className="flex align-middle gap-2 ">
        <Link
          href="/equipment/create"
          className="bg-primary-600 lg:hover:bg-white duration-200 text-black p-2 rounded-md w-32 text-center"
        >
          Create new
        </Link>
        <div className="w-full border border-primary-600 rounded-md px-6 py-2">
          Search...
        </div>
      </div>
      <div>
        <p className="font-bold mb-2">Equipment</p>
        <Suspense fallback="Loading...">
          <EquipmentList promise={equipment} />
        </Suspense>
      </div>
    </div>
  );
}
