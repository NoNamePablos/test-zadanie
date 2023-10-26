<script setup lang="ts">
import {useRoute, useRouter} from 'vue-router';
import {onMounted, ref} from 'vue';
import type {Ref} from 'vue';
import {useProducts} from '@/api/products';
import IProducts from '@/types/products';
import {watch} from 'vue';
import VButton from '@/components/VButton/VButton.vue';
import {ChevronLeftIcon} from '@heroicons/vue/20/solid';
import VRating from "@/components/VRating/VRating.vue";
import VRow from "@/components/VRow/VRow.vue";
import VPriceItem from "@/components/VPriceItem/VPriceItem.vue";

const route = useRoute();
const router = useRouter();
const productID: Ref<number> = ref(-1);
const {isFetching, error, data} = await useProducts();
const page: Ref<IProducts | undefined> = ref({});

watch(data, (newData) => {
  page.value = newData.find((item) => item.id === productID.value);
});
onMounted(() => {
  productID.value = Number(route.params?.id);
});
</script>
<template>
  <div class="detail">
    <div class="detail__container">
      <div class="detail-header">
        <v-button
            intent="primary"
            :left-icon="ChevronLeftIcon"
            @click="router.push('/')">
          Назад
        </v-button>
      </div>
      <div class="detail-main">
        <div class="detail-main__header flex justify-between">
          <div class="badge" v-if="page.discount && +page.discount !== 0">
            -{{ page?.discount }}%
          </div>
          <div class="badge" v-else>Товар не участвует в акции</div>
          <div class="detail-logo">
            <img :src="page?.logo_url" alt=""/>
          </div>
        </div>
        <div
            class="detail-main__content">
          <div class="detail-preview">
            <img :src="page?.image_url" alt="" v-if="page?.image_url" class="w-full h-full max-w-full object-contain "/>
            <img src="/not-found.png" v-else class="w-full h-full max-w-full object-contain " alt="">
          </div>
          <div class="detail-content ">
            <div
                class="detail-content__title">
              {{ page?.name }}
            </div>
            <div class="detail-rating">
              <v-rating :count-stars="page?.stars">
                <p
                    class="ml-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                  {{ page?.stars }} из 5
                </p>
              </v-rating>
            </div>
            <v-row>
              <v-price-item label="Старая цена" :price="page?.old_price" v-if="page?.old_price" :is-old="page?.new_price" />
              <v-price-item label="Цена по акции" :price="page?.new_price" v-if="page?.new_price" :is-old="page?.old_price?false:true" />
            </v-row>
          </div>
        </div>
      </div>
      <div class="detail-disclaimer">
        <div
            class="detail-description bg-gray-300 text-gray-500 text-center py-32 font-bold text-2xl">
          {{ page?.disclaimer }}
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.row {
  @apply flex justify-between;
}

.container {
  @apply px-24;
}

.detail-logo {
  @apply flex h-48 w-auto;
}

.detail {
  @apply pt-24;

  &__container {
  }
}

.detail-rating {
  @apply flex justify-center tablet:justify-end;
}

.detail-header {
  @apply px-24 desktop:p-0;
}

.detail-main {
  @apply bg-white mt-24 p-24 rounded-s desktop:p-48;
  &__content {
    @apply flex flex-col gap-24 mt-24  tablet:grid tablet:gap-40 tablet:grid-cols-[200px_1fr]  desktop:gap-120;
  }
}

.detail-content {
  @apply flex flex-col gap-24 tablet:gap-48 desktop:px-48;
  &__title {
    @apply text-center font-bold text-xl text-gray-700 tablet:text-left tablet:text-2xl desktop:tablet:text-4xl
  }
}

.badge {
  @apply inline-flex items-center w-auto px-24 py-4 justify-center  text-lg font-medium text-center text-white bg-red-600 rounded-lg;
}

.detail-preview {
  @apply w-full h-full max-h-[250px] h-[250px];
}
</style>
