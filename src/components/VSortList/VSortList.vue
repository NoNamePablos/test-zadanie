<script lang="ts" setup>
  interface VSortListProps {
    title?: string;
  }
  withDefaults(defineProps<VSortListProps>(), {
    title: 'Сортировать:',
  });
</script>

<template>
  <div class="sort">
    <div class="sort__title">{{ title }}</div>
    <div class="sort__list">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .sort {
    @apply flex flex-col items-center tablet:flex-row;
  }
  .sort__title {
    @apply mr-8 text-lg font-medium;
  }
  .sort__list {
    @apply flex flex-col gap-8 tablet:flex-row;
  }
</style>
