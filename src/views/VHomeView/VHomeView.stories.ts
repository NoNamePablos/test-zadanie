import type { Meta, StoryObj } from '@storybook/vue3';
import { VHomeView } from '.';

const meta = {
  title: 'VHomeView',
  component: VHomeView,
  render: (args: any) => ({
    components: { VHomeView },
    setup() {
      return { args };
    },
    template: '<VHomeView v-bind="args" />',
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof VHomeView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
