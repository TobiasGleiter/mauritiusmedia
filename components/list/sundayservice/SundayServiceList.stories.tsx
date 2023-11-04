import { Meta, StoryFn } from '@storybook/react';
import SundayServiceList, { ISundayServiceList } from './SundayServiceList';
import { mockSundayServiceListProps } from './SundayServiceList.mocks';

export default {
  title: 'templates/SundayServiceList',
  component: SundayServiceList,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta<typeof SundayServiceList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof SundayServiceList> = (args) => (
  <SundayServiceList {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSundayServiceListProps.base,
} as ISundayServiceList;
