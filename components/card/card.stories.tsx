import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from './card';
import type { Props } from './card.types';

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export default {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

export const Default = Template.bind({});
Default.args = { url: '#', title: 'Title', children: 'Content' } as Props;
