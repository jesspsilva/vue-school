import type { Meta, StoryObj } from '@storybook/vue3';
import Hero from './Hero.vue';

const meta: Meta<typeof Hero> = {
  component: Hero,

};
export default meta;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  render: () => ({
    components: { Hero },
    template: `<Hero />`,
  }),
};