import { Meta, StoryFn } from '@storybook/react';
import BaseModal, { IBaseModal } from './BaseModal';
import { mockBaseModalProps } from './BaseModal.mocks';

export default {
  title: 'modals/BaseModal',
  component: BaseModal,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta<typeof BaseModal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof BaseModal> = (args) => <BaseModal {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBaseModalProps.base,
} as IBaseModal;
