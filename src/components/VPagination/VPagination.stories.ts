import type { Meta, StoryFn, StoryObj } from '@storybook/vue3';
import VPagination from '@/components/VPagination/VPagination.vue';

export default {
  title: 'Pagination/VPagination',
  component: VPagination,
  tags: ['autodocs'],
} as Meta;
const Template: StoryFn = (args) => ({
  components: { VPagination },
  setup() {
    return { args };
  },

  template: '<VPagination  v-bind="args"></VPagination>',
});
export const Default = {
  render: Template,
  args: {
    pageCount: 5,
    currentPage: 1,
  },
};
