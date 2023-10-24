<script lang="ts" setup>
  import { toRefs, useSlots, watch, ref } from 'vue';
  import type { Ref } from 'vue';
  import type IProducts from '@/types/products';
  import VPagination from '@/components/VPagination/VPagination.vue';
  import { usePagination } from '@/composabe/usePagination';
  import {useRouter} from "vue-router";
  const router=useRouter();
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

  const {
    nextPage,
    prevPage,
    changePage,
    pageCount,
    filteredList,
    currentPage,
  } = usePagination(personalData);

  watch(filteredList, (newVal) => {
    filteredItemsList.value = newVal;
  });

  const changeRoute=(index:number)=>{
    router.push({ name: 'detail', params: { id: `${index}` } })
  }

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
          @click="changeRoute(index)"
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
      v-if="pageCount > 1"
      :page-count="pageCount"
      :change-page="changePage"
      :current-page="currentPage"
      :next-page="nextPage"
      :prev-page="prevPage" />
  </div>
</template>
