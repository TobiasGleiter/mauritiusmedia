import { Meta, StoryFn } from '@storybook/react';
import WorkflowSundayService, {
  IWorkflowSundayService,
} from './WorkflowSundayService';
import { mockWorkflowSundayServiceProps } from './WorkflowSundayService.mocks';

export default {
  title: 'feature/sundayservice/WorkflowSundayService',
  component: WorkflowSundayService,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta<typeof WorkflowSundayService>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof WorkflowSundayService> = (args) => (
  <WorkflowSundayService {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockWorkflowSundayServiceProps.base,
} as IWorkflowSundayService;
