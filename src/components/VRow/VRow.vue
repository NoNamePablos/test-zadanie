<script lang="ts" setup></script>

<template>
  <div class="row">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
  .row {
    @apply flex flex-col tablet:flex-row;
  }
</style>
