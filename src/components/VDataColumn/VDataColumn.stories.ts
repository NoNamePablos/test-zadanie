import type { Meta, StoryFn, StoryObj } from '@storybook/vue3';
import VDataColumn from '@/components/VDataColumn/VDataColumn.vue';

export default {
  title: 'Table/VDataColumn',
  component: VDataColumn,
  tags: ['autodocs'],
} as Meta;
const Template: StoryFn = (args) => ({
  components: { VDataColumn },
  setup() {
    return { args };
  },

  template: '<VDataColumn  v-bind="args"></VDataColumn>',
});
export const Default = {
  render: Template,
  args: {
    header: 'sort_value',
    field: 'sort_name',
  },
};
