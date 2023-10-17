<script lang="ts">
export interface VDefaultLayoutProps {
  title?: string;
}
</script>

<script lang="ts" setup>
import {useTitle} from '@vueuse/core';

const props = withDefaults(defineProps<VDefaultLayoutProps>(), {
  title: 'App',
});

useTitle(props.title);
</script>

<template>
  <div class="container">
    <div class="header">
      <router-link to="/" class="header__logo">
        <img src="/logo.svg" alt="logo" />
      </router-link>
    </div>
    <div class="page">
      <slot/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  @apply flex items-center justify-between fixed h-64 px-24 top-0 w-full bg-white shadow-md;
  &__logo {
    & img {
      @apply h-32;
    }
  }
}
.page{
  @apply mt-64;
}
</style>
