<script lang="ts" setup>
  import VContainerRow from '@/components/VContainerRow/VContainerRow.vue';
</script>

<template>
  <div class="wrapper">
    <div class="header">
      <v-container-row>
        <router-link to="/" class="header__logo">
          <img src="/logo.svg" alt="logo" />
        </router-link>
      </v-container-row>
    </div>
    <VContainerRow class="mt-64" :centered="true">
      <slot />
    </VContainerRow>
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

  .wrapper {
    @apply w-full;
  }
</style>
