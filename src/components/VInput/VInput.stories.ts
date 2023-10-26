import type { Meta, StoryFn, StoryObj } from '@storybook/vue3';
import { VInput } from '@/components/VInput';

export default {
  title: 'Forms/VInput',
  component: VInput,
  tags: ['autodocs'],
} as Meta;
const Template: StoryFn = (args) => ({
  components: { VInput },
  setup() {
    return { args };
  },

  template: '<VInput  v-bind="args"></VInput>',
});
export const Default = {
  render: Template,
  argTypes: {
    type: {
      options: [
        'text',
        'date',
        'datetime-local',
        'email',
        'month',
        'number',
        'password',
        'search',
        'tel',
        'url',
        'week',
      ],
      control: { type: 'radio' },
    },
  },
  args: {
    modelValue: '',
    label: 'Basic text input',
  },
};
export const LeftIcon = {
  render: Template,
  args: {
    leftIcon: true,
    modelValue: '',
    label: 'Basic text input',
  },
};
export const RightIcon = {
  render: Template,

  args: {
    rightIcon: true,
    modelValue: '',
    label: 'Basic text input',
  },
};
export const Error = {
  render: Template,
  args: {
    error: true,
    errorMessage: 'Invalid Error',
    modelValue: 'Error value',
    label: 'Basic text input',
  },
};
