<script lang="ts" setup>
  interface IDataColumn {
    header: string;
    field: string;
    image?: boolean;
  }
  defineProps<IDataColumn>();
</script>

<template>
  <th class="table-head-cell">
    <div class="flex items-center">
      <span>
        {{ header }}
      </span>
    </div>
  </th>
</template>
<style lang="scss" scoped>
  .table-head-cell {
    @apply text-left border border font-bold text-gray-500  transition-shadow duration-[0.2s] px-16 py-8 border-solid border-[0_0_1px_0] bg-[#f9fafb];
  }
</style>
