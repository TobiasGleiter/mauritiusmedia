import { Meta, StoryFn } from '@storybook/react';
import BaseDivider, { IBaseDivider } from './BaseDivider';
import { mockBaseDividerProps } from './BaseDivider.mocks';

export default {
  title: 'base/BaseDivider',
  component: BaseDivider,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta<typeof BaseDivider>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof BaseDivider> = (args) => (
  <BaseDivider {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBaseDividerProps.base,
} as IBaseDivider;
