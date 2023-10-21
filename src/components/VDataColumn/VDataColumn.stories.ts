import type { Meta, StoryObj } from '@storybook/vue3';
import { VDataColumn } from '.';

const meta = {
  title: 'VDataColumn',
  component: VDataColumn,
  render: (args: any) => ({
    components: { VDataColumn },
    setup() {
      return { args };
    },
    template: '<VDataColumn v-bind="args" />',
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof VDataColumn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
