'use client';

import { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

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
    <DragDropContext onDragEnd={handleDragEnd}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={item.name}
          onChange={handleInputChange}
        />

        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={item.description}
          onChange={handleInputChange}
        />

        <label htmlFor="date">Date:</label>
        <input
          type="datetime-local"
          id="date"
          name="date"
          value={item.date}
          onChange={handleInputChange}
        />

        <div>
          <h3>Workflow:</h3>
          <Droppable droppableId="workflow">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
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
                        className="p-2 bg-red-500"
                      >
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
                        <button
                          type="button"
                          onClick={() => removeWorkflowStep(index)}
                        >
                          Remove
                        </button>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <button type="button" onClick={addWorkflowStep}>
            Add Step
          </button>
        </div>
        <button type="submit">Create Item</button>
      </form>
    </DragDropContext>
  );
}
