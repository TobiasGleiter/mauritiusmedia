import { Meta, StoryFn } from '@storybook/react';
import SundayServiceDetailsCard, {
  ISundayServiceDetailsCard,
} from './SundayServiceDetailsCard';
import { mockSundayServiceDetailsCardProps } from './SundayServiceDetailsCard.mocks';

export default {
  title: 'card/SundayServiceDetailsCard',
  component: SundayServiceDetailsCard,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta<typeof SundayServiceDetailsCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof SundayServiceDetailsCard> = (args) => (
  <SundayServiceDetailsCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSundayServiceDetailsCardProps.base,
} as ISundayServiceDetailsCard;
