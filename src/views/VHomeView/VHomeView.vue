<script lang="ts" setup>
  import { useI18n } from 'vue-i18n';
  import VInput from '@/components/VInput/VInput.vue';
  import {
    computed,
    onBeforeMount,
    onMounted,
    reactive,
    ref,
    watch,
  } from 'vue';
  import type { Ref } from 'vue';
  import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid';
  import VSortList from '@/components/VSortList/VSortList.vue';
  import { VSortButton } from '@/components/VSortButton';
  import type IProducts from '@/types/products';
  import VDataTable from '@/components/VDataTable/VDataTable.vue';
  import VDataColumn from '@/components/VDataColumn/VDataColumn.vue';
  import { ESortDir } from '@/types/sorttypes';
  import VPagination from '@/components/VPagination/VPagination.vue';
  import { usePagination } from '@/composabe/usePagination';
  import { useProducts } from '@/api/products';
  import { useSearch } from '@/composabe/useSearch';

  const { isFetching, error, data } = useProducts();
  const { ddata, searchedList, searchValue, isEmptySearchField } = useSearch();

  const { t } = useI18n({
    locale: 'en',
    messages: {},
  });
  interface ISortButton {
    sortName: string;
    title: string;
  }

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
  const currentSort = ref(sortButtonList.value[0].sortName);
  const currentSortDir = ref<ESortDir>(ESortDir.ASC);
  const sorting = (sort: string): void => {
    if (sort === currentSort.value) {
      currentSortDir.value =
        currentSortDir.value === ESortDir.ASC ? ESortDir.DESC : ESortDir.ASC;
    }
    currentSort.value = sort;
  };

  const personalData: Ref<IProducts[]> = ref([]);
  const sortedProducts = computed(() => {
    return [...personalData.value]
      .sort((a, b) => {
        let modifier = 1;
        if (currentSortDir.value === ESortDir.DESC) modifier = -1;
        if (a[currentSort.value] < b[currentSort.value]) return -1 * modifier;
        if (a[currentSort.value] > b[currentSort.value]) return 1 * modifier;
        return 0;
      })
      .filter((row, index) => {
        let start = (currentPage.value - 1) * pageCountPerPage.value;
        let end = currentPage.value * pageCountPerPage.value;
        if (index >= start && index < end) return true;
      });
  });
  const {
    paginationData,
    nextPage,
    prevPage,
    changePage,
    pageCount,
    pageCountPerPage,
    currentPage,
  } = usePagination();
  watch(data, (dts) => {
    personalData.value = dts;
    ddata.value = personalData.value;
    paginationData.value = personalData.value;
  });
  watch(searchValue, (newValue) => {
    console.log('nre: ', newValue);
    console.log('sl: ', searchedList.value);
    console.log(isEmptySearchField.value);
    if (isEmptySearchField.value) {
      personalData.value = data.value;
      paginationData.value = data.value;
    } else {
      personalData.value = searchedList.value;
      paginationData.value = personalData.value;
    }
  });
</script>

<template>
  <div class="home">
    <div class="home-title">Карточки контента</div>
    <div class="row">
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
    </div>
    <div class="content">
      <div v-if="isFetching">Loading....</div>
      <v-data-table :items="sortedProducts" v-else>
        <v-data-column field="image_url" header="Фото" :image="true" />
        <v-data-column field="name" header="Название" />
        <v-data-column field="views" header="Просмотры" />
        <v-data-column field="start_date" header="Начало ротации" />
        <v-data-column field="end_date" header="Конец ротации" />
      </v-data-table>
      <v-pagination
        v-if="sortedProducts.length > 0"
        :page-count="pageCount"
        :prev-page="prevPage"
        :next-page="nextPage"
        :change-page="changePage" />
    </div>

    debug: sort={{ currentSort }}, dir={{ currentSortDir }}
  </div>
</template>
<style lang="scss" scoped>
  .home-title {
    @apply mb-24 font-bold text-2xl text-black;
  }

  .row {
    @apply flex justify-between;
  }
</style>
