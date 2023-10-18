import type { Meta, StoryObj } from '@storybook/vue3';
import { VSortButton } from '.';

const meta = {
  title: 'VSortButton',
  component: VSortButton,
  render: (args: any) => ({
    components: { VSortButton },
    setup() {
      return { args };
    },
    template: '<VSortButton v-bind="args" />',
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof VSortButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
