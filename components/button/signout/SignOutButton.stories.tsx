import { Meta, StoryFn } from '@storybook/react';
import SignOutButton, { ISignOutButton } from './SignOutButton';
import { mockSignOutButtonProps } from './SignOutButton.mocks';

export default {
  title: 'buttons/SignOutButton',
  component: SignOutButton,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} as Meta<typeof SignOutButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof SignOutButton> = (args) => (
  <SignOutButton {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSignOutButtonProps.base,
} as ISignOutButton;
