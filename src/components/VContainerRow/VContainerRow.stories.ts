import type { Meta, StoryObj } from '@storybook/vue3';
import { VContainerRow } from '.';

const meta = {
  title: 'utils/VContainerRow',
  component: VContainerRow,
  render: (args: any) => ({
    components: { VContainerRow },
    setup() {
      return { args };
    },
    template: '<VContainerRow v-bind="args" />',
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof VContainerRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
