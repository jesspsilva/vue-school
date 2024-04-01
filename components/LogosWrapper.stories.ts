import type { Meta, StoryObj } from '@storybook/vue3';
import LogosWrapper from './LogosWrapper.vue';

const meta: Meta<typeof LogosWrapper> = {
  component: LogosWrapper,

};
export default meta;

type Story = StoryObj<typeof LogosWrapper>;

export const Default: Story = {
  render: () => ({
    components: { LogosWrapper },
    template: `<LogosWrapper />`,
  }),
};