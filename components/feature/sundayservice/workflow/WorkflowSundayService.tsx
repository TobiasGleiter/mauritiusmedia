import BaseIcon from '@/components/icons/base/BaseIcon';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

export interface IWorkflowSundayService {
  workflow: WorkflowStep[];
  setWorkflow: any;
}

interface WorkflowStep {
  name: string;
  team: string;
}

const WorkflowSundayService: React.FC<IWorkflowSundayService> = ({
  workflow,
  setWorkflow,
}) => {
  const handleWorkflowInputChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const updatedWorkflow = [...workflow];
    updatedWorkflow[index] = {
      ...updatedWorkflow[index],
      [name]: value,
    };
    setWorkflow(updatedWorkflow);
  };

  const addWorkflowStep = () => {
    const newWorkflowStep: WorkflowStep = { name: '', team: '' };
    setWorkflow([...workflow, newWorkflowStep]);
  };

  const removeWorkflowStep = (index: number) => {
    const updatedWorkflow = [...workflow];
    updatedWorkflow.splice(index, 1);
    setWorkflow(updatedWorkflow);
  };

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const reorderedWorkflow = [...workflow];
    const [movedStep] = reorderedWorkflow.splice(result.source.index, 1);
    reorderedWorkflow.splice(result.destination.index, 0, movedStep);

    setWorkflow(reorderedWorkflow);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <h2 className="text-xl font-bold">Workflow</h2>
      <Droppable droppableId="workflow">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="CARDS flex flex-col mt-4 gap-2 w-full"
          >
            {workflow.length === 0 ? (
              <p className="text-center text-gray-500">
                No workflow steps to display. Add a step to get started!
              </p>
            ) : (
              workflow.map((step, index) => (
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
                          onChange={(e) => handleWorkflowInputChange(index, e)}
                        />
                        <input
                          type="text"
                          placeholder="Team"
                          name="team"
                          value={step.team}
                          onChange={(e) => handleWorkflowInputChange(index, e)}
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
              ))
            )}
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
  );
};

export default WorkflowSundayService;
