import type { Meta, StoryObj } from '@storybook/vue3';
import WorkshopCard from './WorkshopCard.vue';

const meta: Meta<typeof WorkshopCard> = {
  component: WorkshopCard,

};
export default meta;

type Story = StoryObj<typeof WorkshopCard>;

export const Default: Story = {
  render: (args) => ({
    components: { WorkshopCard },
    setup() {
      return { args };
    },
    template: `<WorkshopCard v-bind="args" style="max-width: 300px; margin: 0 auto"/>`,
  }),
  args: {
    data: {
      date: "December 14th - 11:00 AM (GMT-3)",
      live: true,
      duration: "15 hours",
      title: "Vue 3 and Composition API",
      description:
        "Take a deep dive into the new and exciting features of Vue 3. Learn about Portals, Suspense, Composition API, Fragments, and much much more...",
      teacher: {
        name: "Steve Popoola",
        avatar: "avatar",
      },
    },
  },
};