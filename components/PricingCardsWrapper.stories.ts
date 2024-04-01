import type { Meta, StoryObj } from '@storybook/vue3';
import PricingCardsWrapper from './PricingCardsWrapper.vue';

const meta: Meta<typeof PricingCardsWrapper> = {
  component: PricingCardsWrapper,

};
export default meta;

type Story = StoryObj<typeof PricingCardsWrapper>;

export const Default: Story = {
  render: () => ({
    components: { PricingCardsWrapper },
    template: `<PricingCardsWrapper />`,
  }),
};