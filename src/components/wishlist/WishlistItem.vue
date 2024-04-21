<template>
  <li>
    <a :href="props.link">
      <div>
        <img :src='props.image' alt='' />
      </div>
      <h3>{{ props.name }}</h3>
    </a>
  </li>
</template>

<script setup lang="ts">
import type { Wishlist } from '@/types';
const props = defineProps<Wishlist>();
</script>

<style scoped lang="scss">
a {
  display: block;
  border-block-end: none;

  &:hover,
  &:focus {
    img {
      background-color: transparent;
    }

    h4 {
      border-block-end-color: transparent;
    }
  }

  div {
    overflow: hidden;
    border-radius: .125rem;
    margin-block-end: .5rem;
    background: linear-gradient(-45deg, #ffa745 0%, #fe869f 30%, #ef7ac8 45%, #a083ed 70%, #43aeff 85%);
  }

  img {
    background-color: var(--stripes);
    transition: background-color .2s;
  }

  h4 {
    display: inline;
    border-block-end: .125rem dotted;
    transition: border-bottom-color .2s;
  }
}
</style>
