import type { Meta, StoryFn, StoryObj } from '@storybook/vue3';
import VSortList from '@/components/VSortList/VSortList.vue';

export default {
  title: 'sort/VSortList',
  component: VSortList,
  tags: ['autodocs'],
} as Meta;
const Template: StoryFn = (args) => ({
  components: { VSortList },
  setup() {
    return { args };
  },

  template: '<VSortList  v-bind="args"></VSortList>',
});
export const Default = {
  render: Template,
  args: {
    title: 'Basic text ',
  },
};
