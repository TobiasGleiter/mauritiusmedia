import { Meta, StoryFn } from '@storybook/react';
import DateInput, { IDateInput } from './DateInput';
import { mockDateInputProps } from './DateInput.mocks';

export default {
  title: 'input/DateInput',
  component: DateInput,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta<typeof DateInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof DateInput> = (args) => <DateInput {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockDateInputProps.base,
} as IDateInput;
