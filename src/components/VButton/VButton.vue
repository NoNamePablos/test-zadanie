<script lang="ts" setup>
  import { computed } from 'vue';
  import { cva, type VariantProps } from 'class-variance-authority';

  type intent = 'primary' | 'secondary' | 'danger' | 'text';

  interface Props {
    leftIcon?: Object | Function;
    rightIcon?: Object | Function;
    intent?: intent;
  }

  const props = withDefaults(defineProps<Props>(), {
    intent: 'primary',
  });

  const buttonClass = computed(() => {
    return cva(
      'inline-flex items-center text-sm rounded min-h-[32px] font-semibold  h-module py-8 px-16 w-max',
      {
        variants: {
          intent: {
            primary:
              'text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
            secondary:
              'text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700',
            danger:
              'focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900',
            text: '',
          },
          size: {},
        },
      },
    )({
      intent: props.intent,
    });
  });
</script>

<template>
  <button :class="buttonClass" type="button">
    <component :is="leftIcon" class="w-auto h-24 mr-4"></component>
    <slot />
    <component :is="rightIcon" class="w-auto h-24 ml-4" />
  </button>
</template>
