'use client';

import BaseIcon from '@/components/icons/base/BaseIcon';
import { fetcher } from '@/helpers/fetcher';
import { convertDate } from '@/helpers/sundayservice/date';
import Link from 'next/link';
import useSWR from 'swr';

export default function SundayServicePage({ params }: any) {
  const { id } = params;

  const { data, isLoading } = useSWR(`/api/sunday-service/${id}`, fetcher);

  if (isLoading) {
    return <></>;
  }

  return (
    <div className="w-fit">
      <Link
        href="/sunday-service"
        className="BACK flex items-center text-secondary-500 group"
      >
        <BaseIcon
          icon="arrowback"
          style="group-hover:text-secondary-800 duration-200"
        />
        <p className=" group-hover:text-secondary-800 duration-200">Back</p>
      </Link>
      <div className="flex flex-row gap-4 p-4 bg-zinc-900">
        <div
          className={`w-1 h flex-none rounded-none bg-primary-600
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
