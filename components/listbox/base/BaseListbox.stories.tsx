import { Meta, StoryFn } from '@storybook/react';
import BaseListbox, { IBaseListbox } from './BaseListbox';
import { mockBaseListboxProps } from './BaseListbox.mocks';

export default {
  title: 'listbox/BaseListbox',
  component: BaseListbox,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta<typeof BaseListbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof BaseListbox> = (args) => (
  <BaseListbox {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBaseListboxProps.base,
} as IBaseListbox;
