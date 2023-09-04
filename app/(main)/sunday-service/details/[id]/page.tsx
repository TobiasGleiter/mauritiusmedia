'use client';

import BaseIcon from '@/components/icons/base/BaseIcon';
import { fetcher } from '@/helpers/fetcher';
import { convertDate } from '@/helpers/sundayservice/date';
import useSWR from 'swr';

export default function SundayServicePage({ params }: any) {
  const { id } = params;

  const { data, isLoading, isValidating } = useSWR(
    `/api/sundayservice/${id}`,
    fetcher
  );

  if (isLoading) {
    return <></>;
  }

  return (
    <div className="w-full text-white mt-4 space-y-4">
      <div className="flex text-lg antialiased font-bold items-center text-white/70 border-b border-white/20 mb-4">
        Details
        {isValidating && <BaseIcon icon="spinner" style="ml-2 animate-spin" />}
      </div>
      <div className="flex flex-row gap-4">
        <div
          className={`w-1 h flex-none rounded-md bg-primary-600
           `}
        />
        <div className="flex flex-col gap-2">
          <div>
            <p className="text-white/50 gont-bold text-xs">Name</p>
            <p className="font-semibold text-xl ">{data.name}</p>
          </div>
          <div>
            <p className="text-white/50 gont-bold text-xs">Description</p>
            <p className="text-white/80 text-lg">{data.description}</p>
          </div>
          <div>
            <p className="text-white/50 gont-bold text-xs">Date</p>
            <p className="text-white/80 text-lg">{convertDate(data.date)}</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex text-lg antialiased font-bold items-center text-white/70 border-b border-white/20 mb-4">
          Ablauf
        </div>
        <div className="space-y-2">
          {data.workflow.map((item: any) => {
            return (
              <div key={item.name} className="flex justify-between">
                <div>{item.name}</div>
                <div>{item.team}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
