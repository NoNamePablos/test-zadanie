import {ref, watch} from 'vue';
import {ESortDir} from '@/types/sorttypes';

export function useSort() {
  const currentSort = ref('');
  const currentSortDir = ref<ESortDir>(ESortDir.NONE);
  watch(currentSort,(val)=>{
    localStorage.setItem("currentSort",JSON.stringify(val));
  })
  watch(currentSortDir,(val)=>{
    localStorage.setItem("currentSortDir",JSON.stringify(val));
  })

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
