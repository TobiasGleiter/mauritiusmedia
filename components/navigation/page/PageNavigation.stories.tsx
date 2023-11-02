import { Meta, StoryFn } from '@storybook/react';
import PageNavigation, { IPageNavigation } from './PageNavigation';
import { mockPageNavigationProps } from './PageNavigation.mocks';

export default {
  title: 'navigation/PageNavigation',
  component: PageNavigation,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta<typeof PageNavigation>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof PageNavigation> = (args) => (
  <PageNavigation {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockPageNavigationProps.base,
} as IPageNavigation;
