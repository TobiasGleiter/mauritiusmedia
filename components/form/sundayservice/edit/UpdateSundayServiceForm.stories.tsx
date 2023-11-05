import { Meta, StoryFn } from '@storybook/react';
import UpdateSundayServiceForm, {
  IUpdateSundayServiceForm,
} from './UpdateSundayServiceForm';
import { mockUpdateSundayServiceFormProps } from './UpdateSundayServiceForm.mocks';

export default {
  title: 'form/UpdateSundayServiceForm',
  component: UpdateSundayServiceForm,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta<typeof UpdateSundayServiceForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof UpdateSundayServiceForm> = (args) => (
  <UpdateSundayServiceForm {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockUpdateSundayServiceFormProps.base,
} as IUpdateSundayServiceForm;
