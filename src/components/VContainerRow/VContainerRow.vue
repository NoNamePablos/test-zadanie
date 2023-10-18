<script lang="ts" setup>
  export interface Props{
    centered?:boolean,
  }
  withDefaults(defineProps<Props>(),{
    centered:false,
  })
</script>

<template>
  <div class="container-row" :class="{'mx-auto':centered}">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
.container-row {
  @apply max-w-screen-xl;
}
</style>
