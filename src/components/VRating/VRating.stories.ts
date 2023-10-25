import type { Meta, StoryObj } from '@storybook/vue3';
import { VRating } from '.';

const meta = {
  title: 'VRating',
  component: VRating,
  render: (args: any) => ({
    components: { VRating },
    setup() {
      return { args };
    },
    template: '<VRating v-bind="args" />',
  }),
  tags: ['autodocs'],
} satisfies Meta<typeof VRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
