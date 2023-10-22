<script lang="ts" setup>
  interface IDataColumn {
    header: string;
    field: string;
    image?: boolean;
  }
  defineProps<IDataColumn>();
</script>

<template>
  <th class="table-header-cell">
    <div class="flex items-center">
      <span>
        {{ header }}
      </span>
    </div>
  </th>
</template>
<style lang="scss" scoped>
  .table-header-cell {
    @apply text-left border border font-bold text-gray-500  transition-shadow duration-[0.2s] p-4 border-solid border-[0_0_1px_0] bg-[#f9fafb];
  }
</style>
