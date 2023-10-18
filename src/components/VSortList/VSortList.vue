<script lang="ts" setup>
  import { useI18n } from 'vue-i18n';

  export interface VSortListProps{
      title?:string;
  }

  withDefaults(defineProps<VSortListProps>(),{
    title:'Сортировать:'
  })

  const { t } = useI18n({
    locale: 'en',
    messages: {},
  });
</script>

<template>
  <div class="sort">
    <div class="sort-title">{{title}}</div>
    <div class="sort-list">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.sort{
  @apply flex;
}
.sort-title{
  @apply mr-8;
}
.sort-list{
  @apply flex gap-8;
}
</style>
