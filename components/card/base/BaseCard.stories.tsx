import { Meta, StoryFn } from '@storybook/react';
import BaseCard, { IBaseCard } from './BaseCard';
import { mockBaseCardProps } from './BaseCard.mocks';

export default {
  title: 'templates/BaseCard',
  component: BaseCard,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta<typeof BaseCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof BaseCard> = (args) => <BaseCard {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBaseCardProps.base,
} as IBaseCard;
