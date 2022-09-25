import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Code } from './code';
import type { Props } from './code.types';

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export default {
  title: 'Components/Code',
  component: Code,
} as ComponentMeta<typeof Code>;

export const Default = Template.bind({});
Default.args = { children: `const foo = 'bar';` } as Props;
