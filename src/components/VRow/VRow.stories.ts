import type { Meta, StoryObj } from '@storybook/vue3';
import { VRow } from '@/components/VRow/VRow.vue';

const meta = {
  title: 'utils/VRow',
  component: VRow,
  render: (args: any) => ({
    components: { VRow },
    setup() {
      return { args };
    },
    template: '<VRow v-bind="args" />',
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof VRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
