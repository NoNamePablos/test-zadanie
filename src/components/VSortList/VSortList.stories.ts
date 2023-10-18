import type { Meta, StoryObj } from '@storybook/vue3';
import { VSortList } from '.';

const meta = {
  title: 'VSortList',
  component: VSortList,
  render: (args: any) => ({
    components: { VSortList },
    setup() {
      return { args };
    },
    template: '<VSortList v-bind="args" />',
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof VSortList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
