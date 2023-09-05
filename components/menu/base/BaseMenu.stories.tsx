import { Meta, StoryFn } from '@storybook/react';
import BaseMenu, { IBaseMenu } from './BaseMenu';
import { mockBaseMenuProps } from './BaseMenu.mocks';

export default {
  title: 'menu/BaseMenu',
  component: BaseMenu,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta<typeof BaseMenu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof BaseMenu> = (args) => <BaseMenu {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBaseMenuProps.base,
} as IBaseMenu;
