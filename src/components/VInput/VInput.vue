<script lang="ts" setup>
  import type { AllowedTags } from '@/components/VInput/VInput.types';
  export interface Props {
    label?: string;
    tip?: string;
    error?: boolean | string;
    errorMessage?: string | undefined;
    modelValue: string;
    type?: AllowedTags;
    rightIcon?: boolean;
    leftIcon?: boolean;
  }
  withDefaults(defineProps<Props>(), {
    modelValue: '',
    tags: 'text',
  });
  const emit = defineEmits<{
    'update:modelValue': [value: string];
  }>();
  const handleInput = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    emit('update:modelValue', value);
  };
</script>

<template>
  <div
    class="input"
    :class="{
      error: error,
    }">
    <div v-if="leftIcon" class="input-icon">
      <slot></slot>
    </div>
    <input
      :type="type"
      :placeholder="label"
      class="leading-1.5 block h-module mr-4 outline-none border-none p-module text-black placeholder:text-gray-700"
      data-testid="input"
      :value="modelValue"
      @input="handleInput" />
    <div v-if="rightIcon" class="input-icon">
      <slot></slot>
    </div>
    <div class="absolute -bottom-24 left-0 text-red-600" v-if="error">
      {{ errorMessage }}
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .input {
    @apply flex gap-4 h-32 rounded w-max border border-gray-700  px-8 relative;
    &.error {
      @apply border-red-600;
    }
  }
  .input-icon {
    @apply text-gray-700 w-16 items-center flex;
  }
</style>
