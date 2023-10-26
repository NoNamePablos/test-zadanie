<script lang="ts" setup>
  import VDataTable from '@/components/VDataTable/VDataTable.vue';
  import VDataColumn from '@/components/VDataColumn/VDataColumn.vue';
  import VSortList from '@/components/VSortList/VSortList.vue';
  import VInput from '@/components/VInput/VInput.vue';
  import { VSortButton } from '@/components/VSortButton';
  import { useToast } from "primevue/usetoast";
  import { computed, ref, watch } from 'vue';
  import type { Ref } from 'vue';

  import type IProducts from '@/types/products';
  import { ESortDir } from '@/types/sorttypes';

  import { useProducts } from '@/api/products';
  import { useSort } from '@/composabe/useSort';
  import { useSearch } from '@/composabe/useSearch';
  import type { ISortButton } from '@/components/VSortButton/VSortButton.interface';
  import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid';
  import VRow from "@/components/VRow/VRow.vue";
  const { data } = await useProducts();
  const toast = useToast();
  const { searchedList, searchValue } =
    useSearch(data);
  const sortButtonList: Ref<ISortButton[]> = ref([
    {
      sortName: 'name',
      title: 'По названию',
    },
    {
      sortName: 'views',
      title: 'По просмотрам',
    },
    {
      sortName: 'start_date',
      title: 'По дате начала',
    },
    {
      sortName: 'end_date',
      title: 'По дате окончания',
    },
  ]);
  const { currentSort, currentSortDir, sorting } = useSort();
  currentSort.value = sortButtonList.value[0].sortName;

  const products: Ref<IProducts[]> = ref([]);

  watch(data, (newData) => {
    products.value = newData;
    toast.add({ severity: 'info', summary: 'Загрузка данных', detail: 'Данные были успешно загружены', life: 3000 });
  });
  watch(searchedList, (newData) => {
    products.value = newData;
  });
  const sortedProducts = computed(() => {
    return [...products.value].sort((a, b) => {
      let modifier = 1;
      if (currentSortDir.value === ESortDir.DESC) modifier = -1;
      if (a[currentSort.value] < b[currentSort.value]) return -1 * modifier;
      if (a[currentSort.value] > b[currentSort.value]) return 1 * modifier;
      return 0;
    });
  });
</script>
<template>
  <div class="home">
    <div class="home-title">Карточки контента</div>
    <v-row class="justify-between">
      <v-sort-list>
        <v-sort-button
            v-for="(button, idx) in sortButtonList"
            :key="idx"
            :sort-state="
            currentSort === button.sortName ? currentSortDir : ESortDir.NONE
          "
            :label="button.title"
            @click="sorting(button.sortName)" />
      </v-sort-list>
      <VInput v-model="searchValue" :left-icon="true">
        <MagnifyingGlassIcon />
      </VInput>
    </v-row>
    <div class="home-content mt-24">
      <v-data-table :item-per-page="3" :items="sortedProducts">
        <v-data-column field="image_url" header="Фото" :image="true" />
        <v-data-column field="name" header="Название" />
        <v-data-column field="views" header="Просмотры" />
        <v-data-column field="start_date" header="Начало ротации" />
        <v-data-column field="end_date" header="Конец ротации" />
      </v-data-table>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .home-title {
    @apply mb-24 font-bold text-2xl text-black;
  }
</style>
