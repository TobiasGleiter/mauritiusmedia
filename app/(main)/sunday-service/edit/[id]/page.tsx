'use client';

import UpdateSundayServiceForm from '@/components/form/sundayservice/edit/UpdateSundayServiceForm';
import PageNavigation from '@/components/navigation/page/PageNavigation';
import { fetcher } from '@/helpers/fetcher';
import useSWR from 'swr';

export default function SundayServicePage({ params }: any) {
  const { id } = params;
  const { data } = useSWR(`/api/sunday-service/${id}`, fetcher);

  return (
    <div className="flex flex-col w-full mb-40">
      <PageNavigation link="/sunday-service" />
      <div
        className={`CREATE CARD flex flex-col mt-6 py-4 px-4 rounded-2xl shadow-md bg-white border`}
      >
        <h1 className="text-3xl font-bold">Edit Sunday Service</h1>
        <UpdateSundayServiceForm data={data} />
      </div>
    </div>
  );
}
