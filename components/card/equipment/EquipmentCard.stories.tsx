import { Meta, StoryFn } from '@storybook/react';
import EquipmentCard, { IEquipmentCard } from './EquipmentCard';
import { mockEquipmentCardProps } from './EquipmentCard.mocks';

export default {
  title: 'templates/EquipmentCard',
  component: EquipmentCard,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta<typeof EquipmentCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof EquipmentCard> = (args) => (
  <EquipmentCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockEquipmentCardProps.base,
} as IEquipmentCard;
