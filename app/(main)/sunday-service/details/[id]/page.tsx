'use client';

import BaseIcon from '@/components/icons/base/BaseIcon';
import { fetcher } from '@/helpers/fetcher';
import { convertDate } from '@/helpers/sundayservice/date';
import Link from 'next/link';
import { useState } from 'react';
import useSWR from 'swr';

export default function SundayServicePage({ params }: any) {
  const { id } = params;

  const [isDeleting, setIsDeleting] = useState(false);

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
      <div
        className={`DETAILS CARD mt-6 py-4 px-4 rounded-2xl shadow-md bg-white border ${
          isDeleting && 'border-danger-500 animate-pulse'
        } sm:w-96`}
      >
        <h1 className="text-3xl font-bold mr-2">Details Sunday Service</h1>
        <div className="INFORMATION mt-6">
          <div className="flex flex-col w-full ">
            <p className=" antialiased text-base text-secondary-600">Name</p>
            <p>{data.name}</p>
            <p className=" antialiased text-base text-secondary-800 -translate-y-1">
              on the {convertDate(data.date)}
            </p>
          </div>
          {data.location && (
            <div className="flex flex-col w-full ">
              <p className=" antialiased text-base text-secondary-600">
                Location
              </p>
              <p>{data.location}</p>
            </div>
          )}

          {data.description && (
            <div className="flex flex-col w-full ">
              <p className=" antialiased text-base text-secondary-600">
                Description
              </p>
              <p>{data.description}</p>
            </div>
          )}
        </div>
        <div className="WORKFLOW mt-6">
          <h2 className="text-2xl font-semibold antialiased">Workflow</h2>
          <div className="space-y-2 mt-2">
            {data.workflow.map((item: any) => {
              return (
                <div
                  key={item.name}
                  className="flex justify-between border-b border-secondary-500 border-dashed"
                >
                  <div>{item.name}</div>
                  <div>{item.team}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <div className="w-64 border-b border-secondary-100" />
        </div>
      </div>
    </div>
  );
}
