

<script lang="ts" setup>
  import { useI18n } from 'vue-i18n';
  import {ArrowSmallUpIcon} from "@heroicons/vue/20/solid";
  import {ArrowSmallDownIcon} from "@heroicons/vue/20/solid";
   enum StateSort{
    ASC=1,
    DESC,
    NONE,
  }
   interface VSortButtonProps {
    sortState:StateSort,
    label:string;
  }

  withDefaults(defineProps<VSortButtonProps>(),{
    sortState:StateSort.NONE,
  })

  const { t } = useI18n({
    locale: 'en',
    messages: {},
  });
</script>

<template>
  <div class="sort-button">
    <div class="sort-button__label">
      {{label}}
    </div>
    <div class="sort-button__ico" v-if="sortState===StateSort.ASC">
      <ArrowSmallUpIcon />
    </div>
    <div class="sort-button__ico" v-if="sortState===StateSort.DESC">
      <ArrowSmallDownIcon />
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .sort-button{
    @apply flex gap-8 items-center;
  }
  .sort-button__ico{
    @apply w-24 h-24 text-black;
  }
</style>
