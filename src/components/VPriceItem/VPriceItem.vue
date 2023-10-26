<script lang="ts" setup>
  interface Props {
    isOld?: boolean;
    price: number;
    symbol?: string;
    label: string;
  }
  withDefaults(defineProps<Props>(), {
    isOld: false,
    symbol: '₽',
  });
</script>

<template>
  <div class="price-item flex flex-col items-center justify-center">
    <div
      class="price-item__value font-bold text-4xl text-gray-400 px-4"
      :class="[
        {
          'line-through decoration-red-700 decoration-4': isOld,
        },
      ]">
      {{ price }}{{ symbol }}
    </div>
    <div class="price-item__text font-bold uppercase text-2xl text-gray-500">
      {{ label }}
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
