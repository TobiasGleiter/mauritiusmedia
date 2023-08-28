import { Meta, StoryFn } from '@storybook/react';
import EquipmentList, { IEquipmentList } from './EquipmentList';
import { mockEquipmentListProps } from './EquipmentList.mocks';

export default {
  title: 'list/EquipmentList',
  component: EquipmentList,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta<typeof EquipmentList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof EquipmentList> = (args) => (
  <EquipmentList {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockEquipmentListProps.base,
} as IEquipmentList;
