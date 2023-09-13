'use client';

import BaseIcon from '@/components/icons/base/BaseIcon';
import ButtonListbox from '@/components/listbox/button/ButtonListbox';
import BaseModal from '@/components/modal/base/BaseModal';
import { fetcher } from '@/helpers/fetcher';
import { deleteSundayService } from '@/helpers/sundayservice/api';
import { convertDate } from '@/helpers/sundayservice/date';
import { hasRequiredPermissionsClient, useRole } from '@/lib/rbac/base';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import useSWR from 'swr';

const requiredPermissions = ['admin'];

export default function SundayServicePage({ params }: any) {
  const { id } = params;
  const router = useRouter();

  const { data: session } = useSession();
  const role = useRole(session);

  const [isDeleting, setIsDeleting] = useState(false);

  const { data, isLoading } = useSWR(`/api/sunday-service/${id}`, fetcher);
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleDelete = async () => {
    if (!id) {
      return;
    }
    setIsDeleting(true);
    const res = await deleteSundayService(id);

    if (!res.ok) {
      setIsDeleting(false);
    }

    setIsDeleting(false);
    router.push('/sunday-service');
  };

  const items = [
    {
      action: () => router.push(`/sunday-service/edit/${id}`),
      label: 'Edit',
      icon: 'placeholder',
      active: 'bg-primary-500',
    },
    {
      action: () => window.open(`/share/sunday-service/${id}`, '_blank'),
      label: 'Share',
      icon: 'placeholder',
      active: 'bg-primary-500',
    },
    {
      action: () => openModal(),
      label: 'Delete',
      icon: 'placeholder',
      active: 'bg-danger-500',
    },
  ];

  if (isLoading) {
    return (
      <div className="w-fit">
        <div className="BACK flex items-center bg-secondary-200 h-6 w-20 animate-pulse rounded-md" />
        <div className="CREATE CARD h-[261px] mt-6 py-4 px-4 rounded-2xl shadow-md bg-white sm:w-96">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold">Details Sunday Service</h1>
          </div>
          <div className="flex flex-col gap-2 w-full  mt-6">
            <div className="NAME flex flex-col w-full ">
              <p className=" antialiased text-base text-secondary-600">Name</p>
              <div className="w-full h-[32px] bg-secondary-200 rounded-lg animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <BaseModal
        title="Delete Sunday Service"
        description="Are you sure to delete this Sunday Service?"
        isOpen={isOpen}
        closeModal={closeModal}
        acceptModal={handleDelete}
      />
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
          <div className="flex items-center">
            {' '}
            <h1 className="text-3xl font-bold mr-2">Details Sunday Service</h1>
            {hasRequiredPermissionsClient(
              role as string,
              requiredPermissions
            ) && <ButtonListbox title="" align="right-0" items={items} />}
          </div>
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
              {data.workflow.map((item: any, index: number) => {
                return (
                  <div
                    key={item.name + index}
                    className="flex lg:flex-row flex-col justify-between border-b border-secondary-500 border-dashed"
                  >
                    <p>{item.name}</p>
                    <p className="text-secondary-800">{item.team}</p>
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
    </>
  );
}
