'use client';
import BaseDivider from '@/components/base/divider/BaseDivider';
import SubmitButton from '@/components/button/submit/SubmitButton';
import WorkflowSundayService from '@/components/feature/sundayservice/workflow/WorkflowSundayService';
import BaseInput from '@/components/input/base/BaseInput';
import DateInput from '@/components/input/date/DateInput';
import { updateSundayService } from '@/helpers/sundayservice/api';
import { useEffect, useState } from 'react';

interface WorkflowStep {
  name: string;
  team: string;
}

export interface IUpdateSundayServiceForm {
  data: any;
}

const UpdateSundayServiceForm: React.FC<IUpdateSundayServiceForm> = ({
  data,
}) => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [workflow, setWorkflow] = useState<WorkflowStep[]>([]);

  const [isUpdateing, setIsUpdateing] = useState<boolean>(false);
  const [isError, setIsError] = useState({ status: false, message: '' });

  // Use useEffect to update the description when equipment data changes
  useEffect(() => {
    if (data) {
      setName(data.name);
      setDescription(data.description);
      setDate(data.date);
      setLocation(data.location);
      setWorkflow(data.workflow);
    }
  }, [data]);

  const handleSubmit = async (e: any) => {
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
    const res = await updateSundayService(data._id, body);

    if (!res.ok) {
      setIsError({
        status: true,
        message: 'Error while updating this Sunday Service. Please try later.',
      });
    }
    setIsUpdateing(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col gap-2 w-full mt-6 rounded-lg`}
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
      <div className="mt-6">
        <WorkflowSundayService workflow={workflow} setWorkflow={setWorkflow} />
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

export default UpdateSundayServiceForm;
