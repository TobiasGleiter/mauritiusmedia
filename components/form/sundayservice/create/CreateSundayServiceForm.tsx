'use client';
import BaseDivider from '@/components/base/divider/BaseDivider';
import SubmitButton from '@/components/button/submit/SubmitButton';
import WorkflowSundayService from '@/components/feature/sundayservice/workflow/WorkflowSundayService';
import BaseInput from '@/components/input/base/BaseInput';
import DateInput from '@/components/input/date/DateInput';
import { createSundayService } from '@/helpers/sundayservice/api';
import { formatDateAndRetrunYearMonthDayHoursMinutes } from '@/helpers/sundayservice/date';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

/***
 * This component is responsible for creating sunday-services
 *
 *
 */

interface WorkflowStep {
  name: string;
  team: string;
}

export interface ICreateSundayServiceForm {}

const CreateSundayServiceForm: React.FC<ICreateSundayServiceForm> = () => {
  // Constants
  const today = formatDateAndRetrunYearMonthDayHoursMinutes(new Date());

  // Navigation
  const router = useRouter();

  // UI interactivity
  const [isUpdateing, setIsUpdateing] = useState(false);
  const [isError, setIsError] = useState({ status: false, message: '' });

  // Values to create a sunday service
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [date, setDate] = useState<string>(today);
  const [location, setLocation] = useState<string>('');
  const [workflow, setWorkflow] = useState<WorkflowStep[]>([]);

  const handleSubmitAndCreateNewSundayService = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsUpdateing(true);
    setIsError({ status: false, message: '' });

    const body = JSON.stringify({
      name,
      description,
      location,
      date,
      workflow,
    });

    const res = await createSundayService(body);

    if (!res.ok) {
      setIsError({
        status: true,
        message: 'Error while updating this Sunday Service. Please try later.',
      });
    }
    setIsUpdateing(false);

    router.push('/sunday-service');
  };

  return (
    <form
      onSubmit={handleSubmitAndCreateNewSundayService}
      className="flex flex-col gap-2 w-full mt-6"
    >
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
      <SubmitButton label="Create" primary />
      <div>
        {isError.status && (
          <p className="text-danger-500 font-semibold">{isError.message}</p>
        )}
      </div>
    </form>
  );
};

export default CreateSundayServiceForm;
