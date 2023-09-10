'use client';

import BaseIcon from '@/components/icons/base/BaseIcon';
import { createSundayService } from '@/helpers/sundayservice/api';
import Link from 'next/link';
import { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

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
    console.log(item); // Replace with API call

    const body = JSON.stringify(item);

    await createSundayService(body);
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
    <div className="w-fit mb-40">
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
      <div className="CREATE CARD mt-6 py-4 px-4 rounded-2xl shadow-md bg-white ">
        <h1 className="text-3xl font-bold">Create new Sunday-Service</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 w-full mt-6"
        >
          <div className="NAME flex flex-col w-full ">
            <label
              htmlFor="name"
              className=" antialiased text-base text-secondary-600"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={item.name}
              onChange={handleInputChange}
              className="border border-secondary-500 text-black rounded-lg bg-transparent py-1 px-4"
            />
          </div>
          <div className="DESCRIPTION flex flex-col w-full ">
            <label
              htmlFor="description"
              className=" antialiased text-base text-secondary-600"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={item.description}
              onChange={handleInputChange}
              className="h-20 border border-secondary-500 text-black rounded-lg bg-transparent py-1 px-4"
            />
          </div>
          <div className="DATE flex flex-col w-fit ">
            <label
              htmlFor="date"
              className=" antialiased text-base text-secondary-600"
            >
              Date
            </label>
            <input
              type="datetime-local"
              id="date"
              name="date"
              value={item.date}
              onChange={handleInputChange}
              className="border border-secondary-500 text-black rounded-lg bg-transparent py-1 px-4"
            />
          </div>

          <div className="mt-6">
            <DragDropContext onDragEnd={handleDragEnd}>
              <h2 className="text-xl font-bold">Workflow</h2>
              <Droppable droppableId="workflow">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="CARDS flex flex-col mt-4 gap-2 w-full"
                  >
                    {item.workflow.map((step, index) => (
                      <Draggable
                        key={index}
                        draggableId={`step-${index}`}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="flex gap-2 md:flex-row flex-col justify-between shadow-md bg-white border border-secondary-800/10 rounded-xl px-4 py-2"
                          >
                            <div className="flex md:flex-row flex-col gap-1">
                              <p className="mr-2">{index + 1}.</p>
                              <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={step.name}
                                onChange={(e) =>
                                  handleWorkflowInputChange(index, e)
                                }
                              />
                              <input
                                type="text"
                                placeholder="Team"
                                name="team"
                                value={step.team}
                                onChange={(e) =>
                                  handleWorkflowInputChange(index, e)
                                }
                              />
                            </div>
                            <div className="flex justify-center md:hidden">
                              <div className="w-64 border-b border-secondary-100" />
                            </div>
                            <div className="flex flex-row gap-1">
                              <button
                                type="button"
                                onClick={() => removeWorkflowStep(index)}
                                className="px-4 text-danger-500 border border-danger-500 rounded-full"
                              >
                                Remove
                              </button>
                              <div className="flex flex-row w-full bg-secondary-100 px-6 rounded-2xl align-middle">
                                <BaseIcon
                                  icon="drag"
                                  style="flex w-7 h-7 text-secondary-500"
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <button
                type="button"
                onClick={addWorkflowStep}
                className="flex mt-2 px-6 bg-secondary-100 text-black justify-center rounded-full hover:bg-secondary-200 duration-200"
              >
                Add Step
              </button>
            </DragDropContext>
          </div>
          <div className="flex justify-center mt-6">
            <div className="w-64 border-b border-secondary-100" />
          </div>
          <button
            type="submit"
            className=" flex bg-primary-500 text-black justify-center rounded-full hover:bg-primary-600 duration-200"
          >
            Create Item
          </button>
        </form>
      </div>
    </div>
  );
}
