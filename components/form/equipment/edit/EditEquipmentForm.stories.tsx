import { Meta, StoryFn } from '@storybook/react';
import EditEquipmentForm, { IEditEquipmentForm } from './EditEquipmentForm';
import { mockEditEquipmentFormProps } from './EditEquipmentForm.mocks';

export default {
  title: 'form/equipment/EditEquipmentForm',
  component: EditEquipmentForm,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta<typeof EditEquipmentForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof EditEquipmentForm> = (args) => (
  <EditEquipmentForm {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockEditEquipmentFormProps.base,
} as IEditEquipmentForm;
