import { Meta, StoryFn } from '@storybook/react';
import CreateSundayServiceForm, {
  ICreateSundayServiceForm,
} from './CreateSundayServiceForm';
import { mockCreateSundayServiceFormProps } from './CreateSundayServiceForm.mocks';

export default {
  title: 'form/CreateSundayServiceForm',
  component: CreateSundayServiceForm,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta<typeof CreateSundayServiceForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof CreateSundayServiceForm> = (args) => (
  <CreateSundayServiceForm {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCreateSundayServiceFormProps.base,
} as ICreateSundayServiceForm;
