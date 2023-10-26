<script lang="ts" setup>
  import VButton from '@/components/VButton/VButton.vue';
  import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/20/solid';

  interface Props {
    changePage?: Function;
    prevPage?: Function;
    nextPage?: Function;
    pageCount: number;
    currentPage?: number;
  }

  defineProps<Props>();
</script>

<template>
  <div class="paginate flex gap-8 mt-24">
    <v-button intent="primary" :left-icon="ArrowLeftIcon" @click="prevPage">
    </v-button>
    <v-button
      intent="secondary"
      v-for="i in pageCount"
      data-testid="buttons"
      :key="i"
      class="flex gap-8"
      :class="{ 'is-active': i == currentPage }"
      @click="changePage(i)"
      >{{ i }}
    </v-button>
    <v-button intent="primary" @click="nextPage">
      <arrow-right-icon class="w-24" />
    </v-button>
  </div>
</template>
<style lang="scss" scoped>
  .is-active {
    @apply bg-blue-700 border border-white border-solid text-white hover:bg-blue-700 hover:text-white;
  }
</style>
