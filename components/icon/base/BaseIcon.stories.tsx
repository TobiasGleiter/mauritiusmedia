import { Meta, StoryFn } from '@storybook/react';
import BaseIcon, { IBaseIcon } from './BaseIcon';
import { mockBaseIconProps } from './BaseIcon.mocks';

export default {
  title: 'icon/BaseIcon',
  component: BaseIcon,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta<typeof BaseIcon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof BaseIcon> = (args) => <BaseIcon {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBaseIconProps.base,
} as IBaseIcon;
