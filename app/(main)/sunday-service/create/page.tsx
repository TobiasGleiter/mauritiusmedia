'use client';

import BaseIcon from '@/components/icons/base/BaseIcon';
import { useState } from 'react';

interface WorkflowStep {
  name: string;
  team: string;
}

interface Item {
  name: string;
  description: string;
  date: string;
  workflow: WorkflowStep[];
}

export default function CreateSundayService() {
  const [item, setItem] = useState<Item>({
    name: '',
    description: '',
    date: '',
    workflow: [],
  });

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
    // @ts-ignore
    updatedWorkflow[index][name] = value;
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

  return (
    <div className="w-full mt-4">
      <div className="flex font-bold text-lg antialiased mb-2 items-center">
        Create new Sunday Service
      </div>
      <form className="flex flex-col gap-2 w-full lg:w-96">
        <div className="flex flex-col w-full">
          <p className="font-bold text-xs text-secondary-600">Name</p>
        </div>
        <div className="flex flex-col w-full"></div>
        <div className="flex flex-col w-full">
          <h3>Workflow:</h3>
          {item.workflow.map((step, index: number) => (
            <div key={index}>
              <input
                type="text"
                placeholder="Step Name"
                name="name"
                value={step.name}
                onChange={(e) => handleWorkflowInputChange(index, e)}
              />
              <input
                type="text"
                placeholder="Team"
                name="team"
                value={step.team}
                onChange={(e) => handleWorkflowInputChange(index, e)}
              />
              <button type="button" onClick={() => removeWorkflowStep(index)}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={addWorkflowStep}>
            Add Step
          </button>
        </div>
        <button
          type="submit"
          className="mt-4 bg-zinc-900 w-full lg:hover:border-primary-600 lg:hover:text-primary-600 duration-200 text-zinc-400 p-1 rounded-none flex  text-center border border-zinc-600"
        >
          <BaseIcon icon="newequipment" style="ml-1 w-6 h-6 flex-none" />
          <p className="ml-1 align-middle">Create new</p>
        </button>
      </form>
    </div>
  );
}
