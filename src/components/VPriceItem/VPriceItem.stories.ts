import type { Meta, StoryFn, StoryObj } from '@storybook/vue3';
import VPriceItem from '@/components/VPriceItem/VPriceItem.vue';

export default {
  title: 'Other/VPriceItem',
  component: VPriceItem,
  tags: ['autodocs'],
} as Meta;
const Template: StoryFn = (args) => ({
  components: { VPriceItem },
  setup() {
    return { args };
  },

  template: '<VPriceItem  v-bind="args"></VPriceItem>',
});
export const Default = {
  render: Template,
  args: {
    price: 250,
    label: 'Старая цена',
  },
};
