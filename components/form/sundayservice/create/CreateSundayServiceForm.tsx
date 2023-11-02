'use client';
import BaseDivider from '@/components/base/divider/BaseDivider';
import WorkflowSundayService from '@/components/feature/sundayservice/workflow/WorkflowSundayService';
import BaseInput from '@/components/input/base/BaseInput';
import DateInput from '@/components/input/date/DateInput';
import { createSundayService } from '@/helpers/sundayservice/api';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface WorkflowStep {
  name: string;
  team: string;
}

interface Item {
  name: string;
  description: string;
  location: string;
  date: string;
  workflow: WorkflowStep[];
}

export interface ICreateSundayServiceForm {}

const CreateSundayServiceForm: React.FC<ICreateSundayServiceForm> = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [workflow, setWorkflow] = useState<WorkflowStep[]>([]);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    //console.log(item); // Replace with API call

    const body = JSON.stringify({
      name,
      description,
      location,
      date,
      workflow,
    });

    await createSundayService(body);

    router.push('/sunday-service');
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
      <BaseInput
        id="location"
        name="location"
        label="Location"
        value={location}
        setValue={setLocation}
      />
      <DateInput
        id="date"
        name="date"
        label="Date"
        value={date}
        setValue={setDate}
      />
      <WorkflowSundayService workflow={workflow} setWorkflow={setWorkflow} />
      <BaseDivider />
      <button
        type="submit"
        className=" flex bg-primary-500 text-black justify-center rounded-full hover:bg-primary-600 duration-200"
      >
        Create
      </button>
    </form>
  );
};

export default CreateSundayServiceForm;
