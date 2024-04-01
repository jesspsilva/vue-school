import type { Meta, StoryObj } from '@storybook/vue3';
import VideoCard from './VideoCard.vue';

const meta: Meta<typeof VideoCard> = {
  component: VideoCard,

};
export default meta;

type Story = StoryObj<typeof VideoCard>;

export const Default: Story = {
  render: () => ({
    components: { VideoCard },
    template: `<VideoCard />`,
  }),
};