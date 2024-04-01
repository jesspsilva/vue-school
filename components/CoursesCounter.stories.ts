import type { Meta, StoryObj } from '@storybook/vue3';
import CoursesCounter from './CoursesCounter.vue';

const meta: Meta<typeof CoursesCounter> = {
  component: CoursesCounter,

};
export default meta;

type Story = StoryObj<typeof CoursesCounter>;

export const Default: Story = {
  render: () => ({
    components: { CoursesCounter },
    template: `<CoursesCounter style="padding: 40px"/>`,
  }),
};