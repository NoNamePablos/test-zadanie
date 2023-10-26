import type { Meta, StoryFn, StoryObj } from '@storybook/vue3';
import VSortButton from '@/components/VSortButton/VSortButton.vue';
import { ESortDir } from '@/types/sorttypes';
export default {
  title: 'sort/VSortButton',
  component: VSortButton,
  tags: ['autodocs'],
} as Meta;
const Template: StoryFn = (args) => ({
  components: { VSortButton },
  setup() {
    return { args };
  },
  template: '<VSortButton  v-bind="args"></VSortButton>',
});

export const Default = {
  render: Template,
  args: {
    label: 'sort title ',
    sortState: ESortDir.ASC,
  },
};

function enumOptions(someEnum) {
  return {
    options: Object.keys(someEnum)
      .filter((key) => !isNaN(parseInt(key)))
      .map((key) => parseInt(key)),
    mapping: someEnum,
    control: {
      type: 'select',
      labels: Object.values(someEnum).filter(
        (value) => typeof value === 'string',
      ),
    },
  };
}
