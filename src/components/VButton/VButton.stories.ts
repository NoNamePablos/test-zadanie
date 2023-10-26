import type { Meta, StoryFn } from '@storybook/vue3';
import { VButton } from '@/components/VButton';
import { ChevronLeftIcon } from '@heroicons/vue/20/solid';

export default {
  title: 'Forms/VButton',
  component: VButton,
  tags: ['autodocs'],
} as Meta;

export const Template: StoryFn = (args) => ({
  components: { VButton },
  setup() {
    return { args };
  },
  template: '<VButton v-bind="args">Press me</VButton>',
});

export const Default = {
  render: Template,
  argTypes: {
    intent: {
      options: ['primary', 'secondary', 'danger', 'text'],
      control: { type: 'radio' },
    },
  },
  args: {
    intent: 'primary',
  },
};
export const LeftIcon = {
  render: Template,
  argTypes: {
    intent: {
      options: ['primary', 'secondary', 'danger', 'text'],
      control: { type: 'radio' },
    },
  },
  args: {
    leftIcon: ChevronLeftIcon,
  },
};
export const RightIcon = {
  render: Template,
  argTypes: {
    intent: {
      options: ['primary', 'secondary', 'danger', 'text'],
      control: { type: 'radio' },
    },
  },
  args: {
    rightIcon: ChevronLeftIcon,
  },
};
