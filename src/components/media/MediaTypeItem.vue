<template>
  <li class="type-item">
    <router-link :to="routeName">
      <component :is="iconComponent" /> {{ props.type }}
    </router-link>
  </li>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import IconBooks from '@/components/icons/IconBooks.vue';
import IconMovies from '@/components/icons/IconMovies.vue';
import IconTVShows from '@/components/icons/IconTVShows.vue';
import IconVideoGames from '@/components/icons/IconVideoGames.vue';

const props = defineProps<{
  type: string
}>();

const sanitizedType = computed(() => {
  return props.type.replace(/\s/g, '');
});

const icons = {
  Books: IconBooks,
  Movies: IconMovies,
  TVShows: IconTVShows,
  VideoGames: IconVideoGames,
};

const iconComponent = computed(() => icons[sanitizedType.value]);
const routeName = computed(() => ({ name: `MediaConsumption${sanitizedType.value}Page`}));
</script>

<style scoped lang="scss">
@mixin gradient($start) {
  --s: 80%;
  --l: 65%;

  $normal: 30deg;
  $hover: 30deg + 180deg;

  $end: $start + 90deg;

  background: hsl($start, var(--s), var(--l));
  background: -webkit-linear-gradient($normal, hsl($start, var(--s), var(--l)), hsl($end, var(--s), var(--l)));
  background: linear-gradient($normal, hsl($start, var(--s), var(--l)), hsl($end, var(--s), var(--l)));

  &::before {
    background: hsl($end, var(--s), var(--l));
    background: -webkit-linear-gradient($hover, hsl($start, var(--s), var(--l)), hsl($end, var(--s), var(--l)));
    background: linear-gradient($hover, hsl($start, var(--s), var(--l)), hsl($end, var(--s), var(--l)));
  }
}

.type-item {
  // TODO: work out a better way to handle the gradients
  &:nth-of-type(1) {
    a {
      @include gradient(55);
    }
  }

  &:nth-of-type(2) {
    a {
      @include gradient(145);
    }
  }

  &:nth-of-type(3) {
    a {
      @include gradient(235);
    }
  }

  &:nth-of-type(4) {
    a {
      @include gradient(325);
    }
  }

  a {
    position: relative;
    display: grid;
    grid-template-columns: 2rem auto;
    gap: 1rem;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-white);
    text-shadow: 0 0.0625rem 0.125rem hsla(0, 0%, 0%, 0.25);
    padding: 2rem;
    border-block-end: 0;
    border-radius: 0.25rem;
    overflow: hidden;
    z-index: 0;
    transition: box-shadow 0.25s ease;
    box-shadow: 0 0.0625rem 0.25rem -0.125rem hsla(0, 0%, 0%, 0.25);

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: -1;
      opacity: 0;
      transition: opacity 0.5s ease;
    }

    &:hover,
    &:focus {
      box-shadow: 0 0.1875rem 0.25rem -0.125rem hsla(0, 0%, 0%, 0.25);

      &::before {
        opacity: 1;
      }
    }

    &:focus {
      outline-color: var(--text);
    }

    svg {
      inline-size: 2rem;
      aspect-ratio: 1;
      fill: currentColor;
      margin-block-start: -0.0625rem;
      filter: drop-shadow(0 0.0625rem 0.125rem hsla(0, 0%, 0%, 0.25));
    }
  }
}
</style>
