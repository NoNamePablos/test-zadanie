import type { Meta, StoryObj } from '@storybook/vue3';
import { VDetailView } from '.';

const meta = {
  title: 'VDetailView',
  component: VDetailView,
  render: (args: any) => ({
    components: { VDetailView },
    setup() {
      return { args };
    },
    template: '<VDetailView v-bind="args" />',
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof VDetailView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
