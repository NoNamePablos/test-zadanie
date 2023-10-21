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
  import { useProducts } from '@/api/products';
  import type IProducts from '@/types/products';
  import VDataTable from '@/components/VDataTable/VDataTable.vue';
  import VDataColumn from '@/components/VDataColumn/VDataColumn.vue';

  const { isFetching, error, data } = useProducts();
  const { t } = useI18n({
    locale: 'en',
    messages: {},
  });
  const searchValue = ref<string>('');

  interface ISortButton {
    sortName: string;
    title: string;
  }

  enum ESortDir {
    ASC = 1,
    DESC,
    NONE,
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
  const currentSort = ref<string>(sortButtonList.value[0].sortName);
  const currentSortDir = ref<ESortDir>(ESortDir.ASC);
  const sorting = (sort: string): void => {
    console.log('sort :', sort);
    console.log('currDir: ', currentSortDir.value);
    //if s == current sort, reverse
    if (sort === currentSort.value) {
      currentSortDir.value =
        currentSortDir.value === ESortDir.ASC ? ESortDir.DESC : ESortDir.ASC;
    }
    currentSort.value = sort;
  };
  const personalData: Ref<IProducts[]> = ref([]);
  const pageCountPerPage: Ref<number> = ref(2);
  const currentPage: Ref<number> = ref(1);
  const pageCount = computed(() => {
    return Math.ceil(personalData.value.length / pageCountPerPage.value);
  });
  const nextPage = () => {
    if (currentPage.value * pageCountPerPage.value < personalData.value.length)
      currentPage.value++;
  };
  const prevPage = () => {
    if (currentPage.value > 1) currentPage.value--;
  };
  const changePage = (page_num: number): void => {
    currentPage.value = page_num;
  };

  watch(data, (dts) => {
    personalData.value = dts;
  });
  const sortedProducts = computed(() => {
    return personalData.value
      .sort((a: IProducts, b: IProducts) => {
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
    </div>
    <div class="paginate flex gap-8 mt-24">
      <button @click="prevPage">Prev</button>
      <div
        v-for="i in pageCount"
        :key="i"
        class="flex gap-8"
        @click="changePage(i)">
        {{ i }}
      </div>
      <button @click="nextPage">Next</button>
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
