import { Meta, StoryFn } from '@storybook/react';
import StatusBar, { IStatusBar } from './StatusBar';
import { mockStatusBarProps } from './StatusBar.mocks';

export default {
  title: 'templates/StatusBar',
  component: StatusBar,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta<typeof StatusBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof StatusBar> = (args) => <StatusBar {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockStatusBarProps.base,
} as IStatusBar;
