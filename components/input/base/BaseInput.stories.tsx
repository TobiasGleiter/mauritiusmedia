import { Meta, StoryFn } from '@storybook/react';
import BaseInput, { IBaseInput } from './BaseInput';
import { mockBaseInputProps } from './BaseInput.mocks';

export default {
  title: 'input/BaseInput',
  component: BaseInput,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta<typeof BaseInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof BaseInput> = (args) => <BaseInput {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBaseInputProps.base,
} as IBaseInput;
