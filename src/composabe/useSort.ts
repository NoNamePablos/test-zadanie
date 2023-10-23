import { ref } from 'vue';
import { ESortDir } from '@/types/sorttypes';

export function useSort() {
  const currentSort = ref('');
  const currentSortDir = ref<ESortDir>(ESortDir.ASC);
  const sorting = (sort: string): void => {
    if (sort === currentSort.value) {
      currentSortDir.value =
        currentSortDir.value === ESortDir.ASC ? ESortDir.DESC : ESortDir.ASC;
    }
    currentSort.value = sort;
  };
  return {
    currentSort,
    currentSortDir,
    sorting,
  };
}
