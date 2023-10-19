<script lang="ts" setup>
import {useI18n} from 'vue-i18n';
import VInput from "@/components/VInput/VInput.vue";
import {computed, onMounted, Ref, ref, watch} from "vue";
import {MagnifyingGlassIcon} from "@heroicons/vue/20/solid";
import VSortList from "@/components/VSortList/VSortList.vue";
import {VSortButton} from "@/components/VSortButton";
import {useProducts} from "@/api/products";
const {t} = useI18n({
  locale: 'en',
  messages: {},
});
const searchValue = ref<string>("");


 interface ISortButton {
  sortName: string,
  title: string,
}
 enum ESortDir{
  ASC=1,
  DESC,
  NONE,
}

const sortButtonList = ref<Array<ISortButton>>([
  {
    sortName: 'name',
    title: 'По названию',
  },
  {
    sortName: 'views',
    title: 'По просмотрам',
  },
  {
    sortName: 'onDateStart',
    title: 'По дате начала',
  },
  {
    sortName: 'onDateEnd',
    title: 'По дате окончания',
  }
])
const currentSort = ref<string>(sortButtonList.value[0].sortName);
const currentSortDir=ref<ESortDir>(ESortDir.ASC)
const sorting = (sort: string): void => {
  console.log("sort :",sort);
  console.log("currDir: ",currentSortDir.value);
}
const {  data }=useProducts();
const personlData=ref([]);
watch(data,(dts)=>{
  console.log(dts);
  personlData.value=dts;
  console.log(personlData.value)
})
const lust=computed(()=>{
  return personlData.value.sort((a,b)=>b.discount-a.discount);
})
onMounted(()=>{
  console.log(data.value);
})
</script>

<template>
  <div class="home">
    <div class="home-title">Карточки контента</div>
    <div class="row">
      <v-sort-list>
        <v-sort-button v-for="(button,idx) in sortButtonList" :key="idx"
                       :sort-state="currentSort===button.sortName?currentSortDir:ESortDir.NONE"
                       :label="button.title"
                       @click="sorting(button.sortName)" />
      </v-sort-list>
      <VInput v-model="searchValue" :left-icon="true">
        <MagnifyingGlassIcon/>
      </VInput>
    </div>
    <div class="content">
      {{lust}}
    </div>
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
