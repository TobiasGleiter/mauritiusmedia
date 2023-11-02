import { Meta, StoryFn } from '@storybook/react';
import SubmitButton, { ISubmitButton } from './SubmitButton';
import { mockSubmitButtonProps } from './SubmitButton.mocks';

export default {
  title: 'buttons/SubmitButton',
  component: SubmitButton,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} as Meta<typeof SubmitButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof SubmitButton> = (args) => (
  <SubmitButton {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSubmitButtonProps.base,
} as ISubmitButton;
