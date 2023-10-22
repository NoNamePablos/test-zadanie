<script lang="ts" setup>
  import { useSlots } from 'vue';
  import type IProducts from '@/types/products';
  const slots = useSlots();
  interface Props {
    items: IProducts[];
  }
  const props = defineProps<Props>();
</script>

<template>
  <div class="table-base">
    <table class="table-auto" v-if="items.length > 0">
      <thead>
        <tr>
          <slot></slot>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index" v-if="items.length > 0">
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
    <div v-else>По вашему запросу ничего нет</div>
  </div>
</template>
