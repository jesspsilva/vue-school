import type { Meta, StoryObj } from '@storybook/vue3';
import WorkshopsWrapper from './WorkshopsWrapper.vue';

const meta: Meta<typeof WorkshopsWrapper> = {
  component: WorkshopsWrapper,

};
export default meta;

type Story = StoryObj<typeof WorkshopsWrapper>;

export const Default: Story = {
  render: () => ({
    components: { WorkshopsWrapper },
    template: `<WorkshopsWrapper />`,
  }),
};