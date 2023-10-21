import type { Meta, StoryObj } from '@storybook/vue3';
import { VDataTable } from '.';

const meta = {
  title: 'VDataTable',
  component: VDataTable,
  render: (args: any) => ({
    components: { VDataTable },
    setup() {
      return { args };
    },
    template: '<VDataTable v-bind="args" />',
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof VDataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
