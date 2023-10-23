import { computed, onMounted, ref, watch } from 'vue';
import type { Ref } from 'vue';
import type { IProducts } from '@/types/products';

export function usePagination(data: Ref<IProducts[]>) {
  const paginationData: Ref<IProducts[]> = ref([...data.value]);
  const pageCountPerPage: Ref<number> = ref(4);
  const currentPage: Ref<number> = ref(1);
  watch(
    data,
    (newVal) => {
      paginationData.value = newVal;
      currentPage.value = 1;
    },
    { deep: true },
  );

  const pageCount = computed(() => {
    return Math.ceil(paginationData.value.length / pageCountPerPage.value);
  });
  const nextPage = () => {
    if (
      currentPage.value * pageCountPerPage.value <
      paginationData.value.length
    )
      currentPage.value++;
  };
  const prevPage = () => {
    if (currentPage.value > 1) currentPage.value--;
  };
  const changePage = (page_num: number): void => {
    currentPage.value = page_num;
  };
  const filteredList = computed(() => {
    return paginationData.value.filter((row, index) => {
      let start = (currentPage.value - 1) * pageCountPerPage.value;
      let end = currentPage.value * pageCountPerPage.value;
      if (index >= start && index < end) return true;
    });
  });

  return {
    paginationData,
    nextPage,
    prevPage,
    changePage,
    pageCount,
    pageCountPerPage,
    currentPage,
    filteredList,
  };
}
