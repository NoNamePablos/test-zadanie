<script lang="ts" setup>
  type Appearance = 'button' | 'link';
  interface Props {
    appearance?: Appearance;
  }
  withDefaults(defineProps<Props>(), {
    appearance: 'button',
  });
</script>

<template>
  <button
    class="h-module py-8 px-16 w-max"
    type="button"
    :class="{
      button: appearance === 'button',
      link: appearance === 'link',
    }">
    <slot />
  </button>
</template>
