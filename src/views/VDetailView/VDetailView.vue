<script setup lang="ts">
  import { useRoute, useRouter } from 'vue-router';
  import { onMounted, ref } from 'vue';
  import type { Ref } from 'vue';
  import { useProducts } from '@/api/products';
  import IProducts from '@/types/products';
  import { watch } from 'vue';
  import VButton from '@/components/VButton/VButton.vue';
  import { ChevronLeftIcon } from '@heroicons/vue/20/solid';

  const route = useRoute();
  const router = useRouter();
  const productID: Ref<number> = ref(-1);
  const { isFetching, error, data } = useProducts();
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
        <div class="row">
          <div class="badge" v-if="page.discount && +page.discount !== 0">
            -{{ page?.discount }}%
          </div>
          <div class="badge" v-else>Товар не участвует в акции</div>
          <div class="detail-logo">
            <img :src="page?.logo_url" alt="" />
          </div>
        </div>
        <div class="row gap-48 mt-24">
          <div class="detail-preview">
            <img :src="page?.image_url" alt="" />
          </div>
          <div class="detail-content flex flex-col gap-48">
            <div
              class="detail-content__title text-center font-bold text-3xl text-gray-700">
              {{ page?.name }}
            </div>
            <div class="detail-rating">
              <div class="rating flex justify-end">
                <div class="flex items-center space-x-1">
                  <svg
                    class="w-24 h-24"
                    :class="[
                      index < page?.stars
                        ? 'text-yellow-300'
                        : 'text-gray-300 dark:text-gray-500',
                    ]"
                    v-for="(item, index) in 5"
                    :key="index"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20">
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <p
                    class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                    {{ page?.stars }} из 5
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div
                class="price-item flex flex-col items-center justify-center"
                :class="[{ 'ml-auto': !page?.new_price }]"
                v-if="page?.old_price">
                <div
                  class="price-item__value font-bold text-4xl text-gray-400 px-4"
                  :class="[
                    {
                      'line-through decoration-red-700 decoration-4':
                        page?.new_price,
                    },
                  ]">
                  {{ page?.old_price }}₽
                </div>
                <div
                  class="price-item__text font-bold uppercase text-2xl text-gray-500">
                  Старая цена
                </div>
              </div>
              <div
                class="price-item flex flex-col items-center justify-center"
                v-if="page?.new_price">
                <div class="price-item__value font-bold text-4xl text-gray-500">
                  {{ page?.new_price }}₽
                </div>
                <div
                  class="price-item__text font-bold uppercase text-2xl text-gray-500">
                  Цена по акции
                </div>
              </div>
            </div>
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

  .detail-main {
    @apply bg-white mt-24 p-48 rounded-s;
  }

  .badge {
    @apply inline-flex items-center w-auto px-24 py-4 justify-center  text-lg font-medium text-center text-white bg-red-600 rounded-lg;
  }

  .detail-preview {
    @apply flex h-auto w-264;
  }
</style>
