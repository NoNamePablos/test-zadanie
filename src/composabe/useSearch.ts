import { useProducts } from '@/api/products';
import { computed, ref, watch } from 'vue';
import type { Ref } from 'vue';
import type IProducts from '@/types/products';

export function useSearch(data: Ref<IProducts[]>) {
  const searchValue: Ref<string> = ref('');
  const ddata: Ref<IProducts[]> = ref([]);
  const isEmptySearchField = computed(() => {
    return searchValue.value === '';
  });
  watch(
    data,
    (newVal) => {
      ddata.value = newVal;
    },
    { deep: true },
  );
  const searchedList = computed(() => {
    return ddata.value.filter((elem) => {
      return (
        elem.name?.toLowerCase()?.includes(searchValue.value.toLowerCase()) ||
        elem.category?.toLowerCase()?.includes(searchValue.value.toLowerCase())
      );
    });
  });
  return {
    ddata,
    searchedList,
    searchValue,
    isEmptySearchField,
  };
}
