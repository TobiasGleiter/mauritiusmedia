import { Meta, StoryFn } from '@storybook/react';
import NumberInput, { INumberInput } from './NumberInput';
import { mockNumberInputProps } from './NumberInput.mocks';

export default {
  title: 'input/NumberInput',
  component: NumberInput,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta<typeof NumberInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof NumberInput> = (args) => (
  <NumberInput {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockNumberInputProps.base,
} as INumberInput;
