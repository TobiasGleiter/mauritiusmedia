import { Meta, StoryFn } from '@storybook/react';
import Sidebar, { ISidebar } from './Sidebar';
import { mockSidebarProps } from './Sidebar.mocks';

export default {
  title: 'navigation/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta<typeof Sidebar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSidebarProps.base,
} as ISidebar;
