import type { Meta, StoryObj } from '@storybook/vue3';
import PricingSlider from './PricingSlider.vue';

const meta: Meta<typeof PricingSlider> = {
  component: PricingSlider,

};
export default meta;

type Story = StoryObj<typeof PricingSlider>;

export const Default: Story = {
  render: (args) => ({
    components: { PricingSlider },
    setup() {
      return { args };
    },
    template: `<PricingSlider v-bind="args" />`,
  }),
  args: {
    price: 50
  },
};