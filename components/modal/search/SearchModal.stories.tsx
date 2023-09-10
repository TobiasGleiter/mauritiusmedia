import { Meta, StoryFn } from '@storybook/react';
import SearchModal, { ISearchModal } from './SearchModal';
import { mockSearchModalProps } from './SearchModal.mocks';

export default {
  title: 'modals/SearchModal',
  component: SearchModal,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta<typeof SearchModal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof SearchModal> = (args) => (
  <SearchModal {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSearchModalProps.base,
} as ISearchModal;
