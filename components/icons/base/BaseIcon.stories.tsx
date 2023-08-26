import { ComponentMeta, ComponentStory } from '@storybook/react';
import BaseIcon, { IBaseIcon } from './BaseIcon';
import { mockBaseIconProps } from './BaseIcon.mocks';

export default {
  title: 'icons/BaseIcon',
  component: BaseIcon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BaseIcon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BaseIcon> = (args) => (
  <BaseIcon {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBaseIconProps.base,
} as IBaseIcon;
