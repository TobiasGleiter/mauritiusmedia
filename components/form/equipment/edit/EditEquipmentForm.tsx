'use client';

import BaseDivider from '@/components/base/divider/BaseDivider';
import SubmitButton from '@/components/button/submit/SubmitButton';
import BaseInput from '@/components/input/base/BaseInput';
import NumberInput from '@/components/input/number/NumberInput';
import BaseListbox from '@/components/listbox/base/BaseListbox';
import { updateEquipment } from '@/helpers/equipment/api';
import { selectColorFromLocation } from '@/helpers/equipment/color';
import { fetcher } from '@/helpers/fetcher';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

const labelsCategory = ['Audio', 'Video', 'Stream', 'Licht', 'Sonstiges'];
const labelsLocation = ['Kirche', 'Gemeindehaus', 'Allgemein', 'Pfarrscheuer'];

export interface IEditEquipmentForm {
  id: string;
  searchParams: any;
}

const EditEquipmentForm: React.FC<IEditEquipmentForm> = ({
  id,
  searchParams,
}) => {
  const [name, setName] = useState(searchParams.get('name') as string);
  const [category, setCategory] = useState(
    searchParams.get('category') as string
  );
  const [location, setLocation] = useState(
    searchParams.get('location') as string
  );
  const [description, setDescription] = useState('');
  const [count, setCount] = useState(1);

  const { data } = useSWR(`/api/equipment/${id}`, fetcher, {
    fallback: { name, category, location, description },
  });

  const [isUpdateing, setIsUpdateing] = useState(false);
  const [isError, setIsError] = useState({ status: false, message: '' });

  // Use useEffect to update the description when equipment data changes
  useEffect(() => {
    if (data) {
      setName(data.name);
      setCategory(data.category);
      setLocation(data.location);
      data.description && setDescription(data.description);
      data.count && setCount(data.count);
    }
  }, [data]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!name || !location || !category || !count) {
      // some action
      console.log('Error');
      return;
    }

    setIsUpdateing(true);
    setIsError({ status: false, message: '' });

    const color = selectColorFromLocation(location.toLocaleLowerCase());
    const body = JSON.stringify({
      name,
      description,
      category,
      location,
      color,
      count,
    });
    const res = await updateEquipment(id, body);

    if (!res.ok) {
      setIsError({
        status: true,
        message: 'Error while updating this Equipment. Please try later.',
      });
    }

    setIsUpdateing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full mt-6">
      <BaseInput
        id="name"
        name="name"
        label="Name"
        value={name}
        setValue={setName}
      />
      <BaseInput
        id="description"
        name="description"
        label="Description"
        value={description}
        setValue={setDescription}
      />
      <NumberInput
        id="count"
        name="count"
        label="Count"
        value={count}
        setValue={setCount}
        min={1}
        max={100}
      />
      <div className="flex flex-col w-full">
        <p className=" antialiased text-base text-secondary-600">Category</p>
        <BaseListbox
          labels={labelsCategory}
          placeholder={labelsCategory[0]}
          value={category}
          setValue={setCategory}
        />
      </div>
      <div className="flex flex-col w-full">
        <p className=" antialiased text-base text-secondary-600">Location</p>
        <BaseListbox
          labels={labelsLocation}
          placeholder={labelsLocation[0]}
          value={location}
          setValue={setLocation}
        />
      </div>
      <BaseDivider />
      <SubmitButton label="Update" primary />
      <div>
        {isError.status && (
          <p className="text-danger-500 font-semibold">{isError.message}</p>
        )}
      </div>
    </form>
  );
};

export default EditEquipmentForm;
