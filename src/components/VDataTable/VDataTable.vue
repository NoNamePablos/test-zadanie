<script lang="ts" setup>
  import { toRefs, useSlots, watch, ref } from 'vue';
  import type { Ref } from 'vue';
  import type IProducts from '@/types/products';
  import VPagination from '@/components/VPagination/VPagination.vue';
  import { usePagination } from '@/composabe/usePagination';
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const slots = useSlots();

  interface Props {
    items: IProducts[];
    itemPerPage?:number;
  }

  const props = withDefaults(defineProps<Props>(),{
    itemPerPage:5,
  });

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
    setCountPerPage,
  } = usePagination(personalData);

  watch(filteredList, (newVal) => {
    filteredItemsList.value = newVal;
  });
  watch(()=>props.itemPerPage,(newItems)=>{
    setCountPerPage(newItems);
  })

  const changeRoute = (index: number) => {
    router.push({ name: 'detail', params: { id: `${index}` } });
  };
</script>

<template>
  <div class="table-base w-full   ">
    <div class="table-base__wrapper overflow-hidden overflow-x-auto mb-24" v-if="filteredItemsList.length > 0">
      <table class="table table-auto w-full min-w-[1024px] " >
        <thead>
        <tr class="table-head__row">
          <slot></slot>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="(item, index) in filteredItemsList"
            :key="item?.id"
            @click="changeRoute(item?.id)"
            v-if="filteredItemsList.length > 0"
        class="cursor-pointer hover:shadow-lg  transition-all duration-150"
        >
          <td v-for="column in slots.default()" :key="column.props.field"
          class="table-body__cell"
          >
            <div v-if="!column.props.image">
              {{ item[column.props.field] }}
            </div>
            <div class="image h-64 w-64" v-else>
              <img :src="item[column.props.field]" class="w-full h-full object-contain" alt="" />
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
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
<style lang="scss" scoped>

.table-body__cell{
  @apply px-16 py-8 pt-16;
}
</style>
