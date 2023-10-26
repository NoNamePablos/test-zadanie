import type { Meta, StoryFn, StoryObj } from '@storybook/vue3';
import VRating from '@/components/VRating/VRating.vue';

export default {
  title: 'Rating/VRating',
  component: VRating,
  tags: ['autodocs'],
} as Meta;
const Template: StoryFn = (args) => ({
  components: { VRating },
  setup() {
    return { args };
  },

  template: '<VRating  v-bind="args"></VRating>',
});
export const Default = {
  render: Template,
  args: {
    countStars: 3,
    totalStars: 10,
  },
};
