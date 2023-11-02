'use client';

import CreateSundayServiceForm from '@/components/form/sundayservice/create/CreateSundayServiceForm';
import PageNavigation from '@/components/navigation/page/PageNavigation';
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

export default function CreateSundayService() {
  const [item, setItem] = useState<Item>({
    name: '',
    description: '',
    location: 'Kirche',
    date: '',
    workflow: [],
  });
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setItem({
      ...item,
      [name]: value,
    });
  };

  const handleWorkflowInputChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const updatedWorkflow = [...item.workflow];
    updatedWorkflow[index] = {
      ...updatedWorkflow[index],
      [name]: value,
    };
    setItem({
      ...item,
      workflow: updatedWorkflow,
    });
  };

  const addWorkflowStep = () => {
    const newWorkflowStep: WorkflowStep = { name: '', team: '' };
    setItem({
      ...item,
      workflow: [...item.workflow, newWorkflowStep],
    });
  };

  const removeWorkflowStep = (index: number) => {
    const updatedWorkflow = [...item.workflow];
    updatedWorkflow.splice(index, 1);
    setItem({
      ...item,
      workflow: updatedWorkflow,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    //console.log(item); // Replace with API call

    const body = JSON.stringify(item);

    await createSundayService(body);

    router.push('/sunday-service');
  };

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const reorderedWorkflow = [...item.workflow];
    const [movedStep] = reorderedWorkflow.splice(result.source.index, 1);
    reorderedWorkflow.splice(result.destination.index, 0, movedStep);

    setItem({
      ...item,
      workflow: reorderedWorkflow,
    });
  };

  return (
    <div className="w-full mb-40">
      <PageNavigation link="/sunday-service" />
      <div className="CREATE CARD mt-6 py-4 px-4 rounded-2xl shadow-md bg-white ">
        <h1 className="text-3xl font-bold">Create new Sunday Service</h1>
        <CreateSundayServiceForm />
      </div>
    </div>
  );
}
