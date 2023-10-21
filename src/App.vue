<script lang="ts" setup>
  import { useLoadingStore } from '@/stores/loading';
  import { VLoadingView } from './views/VLoadingView';
  import { VDefaultLayout } from './layouts/VDefaultLayout';
  import Toast from 'primevue/toast';

  const loadingStore = useLoadingStore();
</script>

<template>
  <Toast />
  <VLoadingView v-if="loadingStore.isLoading" />
  <VDefaultLayout v-else>
    <RouterView />
  </VDefaultLayout>
</template>
