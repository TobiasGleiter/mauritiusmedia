import { Meta, StoryFn } from '@storybook/react';
import SundayServiceDetail, {
  ISundayServiceDetail,
} from './SundayServiceDetail';
import { mockSundayServiceDetailProps } from './SundayServiceDetail.mocks';

export default {
  title: 'detail/SundayServiceDetail',
  component: SundayServiceDetail,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta<typeof SundayServiceDetail>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof SundayServiceDetail> = (args) => (
  <SundayServiceDetail {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSundayServiceDetailProps.base,
} as ISundayServiceDetail;
