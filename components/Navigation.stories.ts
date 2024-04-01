import type { Meta, StoryObj } from '@storybook/vue3';
import Navigation from './Navigation.vue';

const meta: Meta<typeof Navigation> = {
  component: Navigation,

};
export default meta;

type Story = StoryObj<typeof Navigation>;

export const Default: Story = {
  render: () => ({
    components: { Navigation },
    template: `<Navigation />`,
  }),
};