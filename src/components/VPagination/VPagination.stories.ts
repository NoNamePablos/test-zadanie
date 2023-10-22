import type { Meta, StoryObj } from '@storybook/vue3';
import { VPagination } from '.';

const meta = {
  title: 'VPagination',
  component: VPagination,
  render: (args: any) => ({
    components: { VPagination },
    setup() {
      return { args };
    },
    template: '<VPagination v-bind="args" />',
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof VPagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
