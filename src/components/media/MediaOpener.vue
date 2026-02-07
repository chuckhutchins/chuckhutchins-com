<template>
  <div class="opener">
    <h1>
      <slot name="header" />
    </h1>
    <slot />
  </div>
  <TheHr />
</template>

<script setup>
import TheHr from '@/components/common/TheHr.vue';
</script>

<style scoped lang="scss">
.opener {
  h1 {
    margin-block-end: 1rem;
  }

  :slotted(p:not(:last-child)) {
    margin-block-end: 0.5rem;
  }
}
</style>
