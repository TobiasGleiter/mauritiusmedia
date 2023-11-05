'use client';
import StatusBar from '@/components/bar/status/StatusBar';
import BaseDivider from '@/components/base/divider/BaseDivider';
import SubmitButton from '@/components/button/submit/SubmitButton';
import WorkflowSundayService from '@/components/feature/sundayservice/workflow/WorkflowSundayService';
import BaseInput from '@/components/input/base/BaseInput';
import DateInput from '@/components/input/date/DateInput';
import { onSubmitStatusCodes } from '@/helpers/enums';
import { updateSundayService } from '@/helpers/sundayservice/api';
import { useEffect, useRef, useState } from 'react';

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
  // UI interactivity
  const [status, setStatus] = useState({
    code: onSubmitStatusCodes.NOTHINGCHANGED,
  });

  // Values to create a sunday service
  const [name, setName] = useState<string>(data.name);
  const [description, setDescription] = useState<string>(data.description);
  const [date, setDate] = useState<string>(data.date);
  const [location, setLocation] = useState<string>(data.location);
  const [workflow, setWorkflow] = useState<WorkflowStep[]>(data.workflow);

  // Reference to store the initial values
  const initialValues = useRef({ name, description, date, location, workflow });

  // keep track of the initial values and if changed status code
  useEffect(() => {
    const isChanged =
      initialValues.current.name !== name ||
      initialValues.current.description !== description ||
      initialValues.current.date !== date ||
      initialValues.current.location !== location ||
      JSON.stringify(initialValues.current.workflow) !==
        JSON.stringify(workflow);

    if (isChanged) {
      setStatus({ code: onSubmitStatusCodes.EDITED });
    }
  }, [name, description, date, location, workflow]);

  const handleSubmitAndUpdateSundayService = async (e: any) => {
    e.preventDefault();

    if (status.code === onSubmitStatusCodes.EDITED) {
      setStatus({ code: onSubmitStatusCodes.UPDATING });

      const body = JSON.stringify({
        name,
        description,
        location,
        date,
        workflow,
      });
      const res = await updateSundayService(data._id, body);

      if (!res.ok) {
        setStatus({ code: onSubmitStatusCodes.ERROR });
      }

      setTimeout(() => {
        setStatus({ code: onSubmitStatusCodes.UPDATED });
      }, 200);
    } else {
      setStatus({ code: onSubmitStatusCodes.UPDATING });
      setTimeout(() => {
        setStatus({ code: onSubmitStatusCodes.UPDATED });
      }, 200);
    }
  };

  return (
    <form
      onSubmit={handleSubmitAndUpdateSundayService}
      className={`flex flex-col gap-2 w-full mt-6 rounded-lg`}
    >
      <StatusBar status={status} />
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
      <SubmitButton label="Update" primary />
    </form>
  );
};

export default UpdateSundayServiceForm;
