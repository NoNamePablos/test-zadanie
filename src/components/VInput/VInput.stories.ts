import type { Meta, StoryObj } from '@storybook/vue3';
import { VInput } from '.';

const meta = {
  title: 'VInput',
  component: VInput,
  render: (args: any) => ({
    components: { VInput },
    setup() {
      return { args };
    },
    template: '<VInput v-bind="args" />',
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof VInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
