<script lang="ts" setup>
  import VButton from '@/components/VButton/VButton.vue';
  import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/20/solid';
  interface Props {
    changePage: Function;
    prevPage: Function;
    nextPage: Function;
    pageCount: number;
  }
  defineProps<Props>();
</script>

<template>
  <div class="paginate flex gap-8 mt-24">
    <v-button @click="prevPage">
      <arrow-left-icon class="w-24" />
    </v-button>
    <v-button
      v-for="i in pageCount"
      :key="i"
      class="flex gap-8"
      @click="changePage(i)"
      >{{ i }}
    </v-button>
    <v-button @click="nextPage">
      <arrow-right-icon class="w-24" />
    </v-button>
  </div>
</template>
