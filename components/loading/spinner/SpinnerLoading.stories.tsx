import { Meta, StoryFn } from '@storybook/react';
import SpinnerLoading, { ISpinnerLoading } from './SpinnerLoading';
import { mockSpinnerLoadingProps } from './SpinnerLoading.mocks';

export default {
  title: 'loading/SpinnerLoading',
  component: SpinnerLoading,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta<typeof SpinnerLoading>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof SpinnerLoading> = (args) => (
  <SpinnerLoading {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSpinnerLoadingProps.base,
} as ISpinnerLoading;
