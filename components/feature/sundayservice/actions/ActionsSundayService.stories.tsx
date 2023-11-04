import { Meta, StoryFn } from '@storybook/react';
import ActionsSundayService, {
  IActionsSundayService,
} from './ActionsSundayService';
import { mockActionsSundayServiceProps } from './ActionsSundayService.mocks';

export default {
  title: 'templates/ActionsSundayService',
  component: ActionsSundayService,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta<typeof ActionsSundayService>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof ActionsSundayService> = (args) => (
  <ActionsSundayService {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockActionsSundayServiceProps.base,
} as IActionsSundayService;
