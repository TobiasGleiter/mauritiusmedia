import { IWorkflowSundayService } from './WorkflowSundayService';

const base: IWorkflowSundayService = {
  workflow: [{ name: 'name', team: 'team' }],
  setWorkflow: '',
};

export const mockWorkflowSundayServiceProps = {
  base,
};
