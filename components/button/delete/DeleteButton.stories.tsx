import { Meta, StoryFn } from '@storybook/react';
import DeleteButton, { IDeleteButton } from './DeleteButton';
import { mockDeleteButtonProps } from './DeleteButton.mocks';

export default {
  title: 'buttons/DeleteButton',
  component: DeleteButton,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} as Meta<typeof DeleteButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof DeleteButton> = (args) => (
  <DeleteButton {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockDeleteButtonProps.base,
} as IDeleteButton;
