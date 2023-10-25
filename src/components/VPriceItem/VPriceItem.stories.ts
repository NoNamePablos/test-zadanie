import type { Meta, StoryObj } from '@storybook/vue3';
import { VPriceItem } from '.';

const meta = {
  title: 'VPriceItem',
  component: VPriceItem,
  render: (args: any) => ({
    components: { VPriceItem },
    setup() {
      return { args };
    },
    template: '<VPriceItem v-bind="args" />',
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof VPriceItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
