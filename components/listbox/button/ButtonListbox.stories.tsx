import { Meta, StoryFn } from '@storybook/react';
import ButtonListbox, { IButtonListbox } from './ButtonListbox';
import { mockButtonListboxProps } from './ButtonListbox.mocks';

export default {
  title: 'listbox/ButtonListbox',
  component: ButtonListbox,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta<typeof ButtonListbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof ButtonListbox> = (args) => (
  <ButtonListbox {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockButtonListboxProps.base,
} as IButtonListbox;
