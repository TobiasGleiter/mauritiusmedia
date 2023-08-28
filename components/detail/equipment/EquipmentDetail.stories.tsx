import { Meta, StoryFn } from '@storybook/react';
import EquipmentDetail, { IEquipmentDetail } from './EquipmentDetail';
import { mockEquipmentDetailProps } from './EquipmentDetail.mocks';

export default {
  title: 'templates/EquipmentDetail',
  component: EquipmentDetail,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta<typeof EquipmentDetail>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof EquipmentDetail> = (args) => (
  <EquipmentDetail {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockEquipmentDetailProps.base,
} as IEquipmentDetail;
