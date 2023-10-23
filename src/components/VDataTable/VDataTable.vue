<script lang="ts" setup>
  import { toRefs, useSlots, watch, ref } from 'vue';
  import type { Ref } from 'vue';
  import type IProducts from '@/types/products';
  import VPagination from '@/components/VPagination/VPagination.vue';
  import { usePagination } from '@/composabe/usePagination';

  const slots = useSlots();

  interface Props {
    items: IProducts[];
  }

  const props = defineProps<Props>();

  const items = toRefs(props).items;
  const personalData: Ref<IProducts[]> = ref([]);
  const filteredItemsList: Ref<IProducts[]> = ref([]);
  watch(items, (newVal) => {
    personalData.value = newVal;
  });

  const { nextPage, prevPage, changePage, pageCount, filteredList } =
    usePagination(personalData);

  watch(filteredList, (newVal) => {
    filteredItemsList.value = newVal;
  });
</script>

<template>
  <div class="table-base">
    <table class="table-auto" v-if="filteredItemsList.length > 0">
      <thead>
        <tr>
          <slot></slot>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in filteredItemsList"
          :key="index"
          v-if="filteredItemsList.length > 0">
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
    <v-pagination
      :page-count="pageCount"
      :change-page="changePage"
      :next-page="nextPage"
      :prev-page="prevPage" />
  </div>
</template>
