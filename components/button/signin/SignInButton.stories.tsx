import { Meta, StoryFn } from '@storybook/react';
import SignInButton, { ISignInButton } from './SignInButton';
import { mockSignInButtonProps } from './SignInButton.mocks';

export default {
  title: 'buttons/SignInButton',
  component: SignInButton,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} as Meta<typeof SignInButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof SignInButton> = (args) => (
  <SignInButton {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSignInButtonProps.base,
} as ISignInButton;
