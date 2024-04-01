import type { Meta, StoryObj } from '@storybook/vue3';
import PricingCard from './PricingCard.vue';

const meta: Meta<typeof PricingCard> = {
  component: PricingCard,

};
export default meta;

type Story = StoryObj<typeof PricingCard>;

export const Default: Story = {
  render: (args) => ({
    components: { PricingCard },
    setup() {
      return { args };
    },
    template: `<PricingCard v-bind="args" style="max-width: 300px; margin: 0 auto"/>`,
  }),
  args: {
    data: {
      header: {
        icon: "leaf",
        title: "Basic",
      },
      features: {
        title: "Includes 1 year access to:",
        list: [
          {
            available: true,
            label: "All Video Courses",
            featured: false,
          },
          {
            available: true,
            label: "Vue.Js Master class",
            featured: false,
          },
          {
            available: true,
            label: "Developer assist Slack channel",
            featured: false,
          },
          {
            available: false,
            label: "Live Weekly QnA",
            featured: false,
          },
          {
            available: false,
            label: "1 x ws ticket per license",
            featured: false,
          },
        ],
      },
      monthlySeatPrice: 50,
    },
  },
};