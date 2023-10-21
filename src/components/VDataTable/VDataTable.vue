<script lang="ts" setup>
  import { useSlots, useAttrs, onMounted } from 'vue';
  import type IProducts from '@/types/products';

  const slots = useSlots();
  interface Props {
    items: {
      type: IProducts[];
    };
  }

  defineProps<Props>();

  onMounted(() => {
    console.log(slots.default());
  });
</script>

<template>
  <table class="table-auto">
    <thead>
      <tr>
        <slot></slot>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in items" :key="index">
        <td v-for="column in slots.default()" :key="column.props.field">
          <div v-if="!column.props.image">
            {{ item[column.props.field] }}
          </div>
          <div class="image h-64 w-64" v-else>
            <img :src="item[column.props.field]" alt="" />
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
