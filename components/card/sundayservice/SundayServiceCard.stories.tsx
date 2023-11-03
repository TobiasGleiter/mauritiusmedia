import { Meta, StoryFn } from '@storybook/react';
import SundayServiceCard, { ISundayServiceCard } from './SundayServiceCard';
import { mockSundayServiceCardProps } from './SundayServiceCard.mocks';

export default {
  title: 'card/SundayServiceCard',
  component: SundayServiceCard,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta<typeof SundayServiceCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof SundayServiceCard> = (args) => (
  <SundayServiceCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSundayServiceCardProps.base,
} as ISundayServiceCard;
