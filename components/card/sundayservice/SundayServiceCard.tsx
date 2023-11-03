'use client';

import BaseDivider from '@/components/base/divider/BaseDivider';
import ButtonListbox from '@/components/listbox/button/ButtonListbox';
import BaseModal from '@/components/modal/base/BaseModal';
import { deleteSundayService } from '@/helpers/sundayservice/api';
import { convertDate } from '@/helpers/sundayservice/date';
import { hasRequiredPermissionsClient } from '@/lib/rbac/base';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export interface ISundayServiceCard {
  data: any;
  role: string;
}

const requiredPermissions = ['admin'];

const SundayServiceCard: React.FC<ISundayServiceCard> = ({ data, role }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const router = useRouter();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleDelete = async () => {
    if (!data._id) {
      return;
    }
    setIsDeleting(true);
    const res = await deleteSundayService(data._id);

    if (!res.ok) {
      setIsDeleting(false);
    }

    setIsDeleting(false);
    router.push('/sunday-service');
  };

  const items = [
    {
      action: () => router.push(`/sunday-service/edit/${data._id}`),
      label: 'Edit',
      icon: 'placeholder',
      active: 'bg-primary-500',
    },
    {
      action: () => window.open(`/share/sunday-service/${data._id}`, '_blank'),
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

  return (
    <>
      <BaseModal
        title="Delete Sunday Service"
        description="Are you sure to delete this Sunday Service?"
        isOpen={isOpen}
        closeModal={closeModal}
        acceptModal={handleDelete}
      />
      {/** DETAILS CARD */}
      <div
        className={`DETAILS CARD flex flex-col mt-6 py-4 px-4 rounded-2xl shadow-md bg-white border`}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold mr-2">Details Sunday Service</h1>
          {hasRequiredPermissionsClient(
            role as string,
            requiredPermissions
          ) && <ButtonListbox title="" align="right-0" items={items} />}
        </div>
        {/** NAME */}
        <div className="INFORMATION mt-6">
          <div className="flex flex-col w-full ">
            <p className=" antialiased text-base text-secondary-600">Name</p>
            <p>{data.name}</p>
            <p className=" antialiased text-base text-secondary-800 -translate-y-1">
              on the {convertDate(data.date)}
            </p>
          </div>
          {/** LOCATION */}
          {data.location && (
            <div className="flex flex-col w-full ">
              <p className=" antialiased text-base text-secondary-600">
                Location
              </p>
              <p>{data.location}</p>
            </div>
          )}
          {/** DESCRIPTION */}
          {data.description && (
            <div className="flex flex-col w-full ">
              <p className=" antialiased text-base text-secondary-600">
                Description
              </p>
              <p>{data.description}</p>
            </div>
          )}
        </div>
        {/** WORKFLOW */}
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
        <BaseDivider />
      </div>
    </>
  );
};

export default SundayServiceCard;
