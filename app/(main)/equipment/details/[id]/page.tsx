'use client';

import BaseIcon from '@/components/icons/base/BaseIcon';
import ButtonListbox from '@/components/listbox/button/ButtonListbox';
import { deleteEquipment } from '@/helpers/equipment/api';
import { fetcher } from '@/helpers/fetcher';
import { hasRequiredPermissionsClient, useRole } from '@/lib/rbac/base';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import useSWR from 'swr';

const requiredPermissions = ['admin', 'technician', 'dev'];

export default function EquipmentPage({ params }: any) {
  const { id } = params;
  const router = useRouter();

  const { data: session } = useSession();
  const role = useRole(session);

  const [isDeleting, setIsDeleting] = useState(false);

  const {
    data: equipment,
    isLoading,
    isValidating,
  } = useSWR(`/api/equipment/${id}`, fetcher);

  const handleDelete = async (id: any) => {
    if (!id) {
      return;
    }
    setIsDeleting(true);
    const res = await deleteEquipment(id);

    if (!res.ok) {
      setIsDeleting(false);
    }

    setIsDeleting(false);
    router.push('/equipment');
  };

  const items = [
    {
      action: () =>
        router.push(
          `/equipment/edit/${id}?name=${equipment.name}&category=${equipment.category}&location=${equipment.location}`
        ),
      label: 'Edit',
      icon: 'placeholder',
      active: 'bg-primary-500',
    },
    {
      action: () => handleDelete(id),
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
            <h1 className="text-3xl font-bold">Details Equipment</h1>
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
    <div className="w-fit">
      <Link
        href="/equipment"
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
          <h1 className="text-3xl font-bold mr-2">Details Equipment</h1>
          {hasRequiredPermissionsClient(
            role as string,
            requiredPermissions
          ) && <ButtonListbox title="" align="right-0" items={items} />}
        </div>
        <div className="INFORMATION mt-6">
          <div className="flex flex-col w-full ">
            <p className=" antialiased text-base text-secondary-600">Name</p>
            <p>{equipment.name}</p>
          </div>
          {equipment.description && (
            <div className="flex flex-col w-full ">
              <p className=" antialiased text-base text-secondary-600">
                Description
              </p>
              <p className="h-[70px]">{equipment.description}</p>
            </div>
          )}
          {equipment.count && (
            <div className="flex flex-col w-full ">
              <p className=" antialiased text-base text-secondary-600">Count</p>
              <p>{equipment.count}</p>
            </div>
          )}

          <div>
            <div className="flex flex-col w-full ">
              <p className=" antialiased text-base text-secondary-600">
                Category
              </p>
              <p>{equipment.category}</p>
            </div>
            <div className="flex flex-col w-full ">
              <p className="antialiased text-base text-secondary-600">
                Location
              </p>
              <div className="flex items-center text-black">
                <div
                  className={`rounded-full mt-1 w-5 h-5 ${equipment.color}`}
                />
                <p className="ml-1 text-justify">{equipment.location}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <div className="w-64 border-b border-secondary-100" />
          </div>
        </div>
      </div>
    </div>
  );
}
