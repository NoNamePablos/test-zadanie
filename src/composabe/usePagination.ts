import { computed, onMounted, ref, watch } from 'vue';
import type { Ref } from 'vue';
import type { IProducts } from '@/types/products';

export function usePagination() {
  const paginationData: Ref<IProducts[]> = ref([]);
  const pageCountPerPage: Ref<number> = ref(4);
  const currentPage: Ref<number> = ref(1);
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

  return {
    paginationData,
    nextPage,
    prevPage,
    changePage,
    pageCount,
    pageCountPerPage,
    currentPage,
  };
}
