<script lang="ts" setup>
import {useI18n} from 'vue-i18n';
import VInput from "@/components/VInput/VInput.vue";
import {ref} from "vue";
import {MagnifyingGlassIcon} from "@heroicons/vue/20/solid";

const {t} = useI18n({
  locale: 'en',
  messages: {},
});
const searchValue = ref<string>("");

</script>

<template>
  <div class="home">
    <div class="home-title">Карточки контента</div>
    <div class="row">
      <div class="sort">
        <div class="sort-title">Сортировать:</div>
        <div class="sort-list">
          <div class="sort-button">По названию</div>
          <div class="sort-button">По просмотрам</div>
          <div class="sort-button">По дате начала</div>
          <div class="sort-button">По дате окончания</div>
        </div>
      </div>
      <VInput v-model="searchValue" :left-icon="true">
        <MagnifyingGlassIcon />
      </VInput>
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
