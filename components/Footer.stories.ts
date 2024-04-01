import type { Meta, StoryObj } from '@storybook/vue3';
import Footer from './Footer.vue';

const meta: Meta<typeof Footer> = {
  component: Footer,

};
export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  render: () => ({
    components: { Footer },
    template: `<Footer style="padding: 40px"/>`,
  }),
};