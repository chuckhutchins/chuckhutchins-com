<template>
  <div class="media-item">
    <div class="image-wrapper" :class="{'has-badge': hasBadge, 'is-liked': isLiked, 'is-disliked': isDisliked || isAbandoned}">
      <img
        :src="item.image"
        alt=""
        class="image"
        width="315"
        height="475"
        loading="lazy"
      >
      <div v-if="hasBadge" class="badge">
        <IconRatingHeart v-if="isLiked" />
        <IconRatingDislike v-if="isDisliked" />
        <IconRatingGhost v-if="isAbandoned" />
      </div>
    </div>
    <div class="text-wrapper">
      <h3>{{ item.title }}</h3>
      <p v-if="hasSeason">{{ item.season }}</p>
      <p v-if="hasAuthor">{{ item.author }}</p>
      <p v-if="hasPlatform">{{ item.platform }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import IconRatingDislike from '@/components/icons/IconRatingDislike.vue';
import IconRatingGhost from '@/components/icons/IconRatingGhost.vue';
import IconRatingHeart from '@/components/icons/IconRatingHeart.vue';
import type { Media } from '@/types';

const props = defineProps<{
  item: Media
}>();

// badges
const hasBadge = computed((): boolean => isLiked.value || isDisliked.value || isAbandoned.value);
const isLiked = computed((): boolean => props.item.rating === 'Like');
const isDisliked = computed((): boolean => props.item.rating === 'Dislike');
const isAbandoned = computed((): boolean => !props.item.finish && props.item.end !== '');

// data
const hasAuthor = computed((): boolean => !!props.item.author);
const hasPlatform = computed((): boolean => !!props.item.platform);
const hasSeason = computed((): boolean => !!props.item.season);
</script>

<style scoped lang="scss">
.media-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  .image-wrapper {
    --special-border-inline-size: 0.25rem;
    --image-border-radius: 0.25rem;

    align-self: start;
    position: relative;
    border-radius: var(--image-border-radius);
    overflow: hidden;

    &.has-badge {
      &:before {
        content: ' ';
        position: absolute;
        inset: 0;
        border: var(--special-border-inline-size) solid;
        z-index: 1;
      }

      &.is-liked {
        &:before {
          border-image: var(--fancy-gradient) 1;
        }

        .badge {
          background-color: var(--fancy-blue);
          color: var(--color-white);
        }
      }

      &.is-disliked {
        &:before {
          border-image: linear-gradient(to bottom, var(--stripes) 33%, transparent) 1;
        }

        .badge {
          background-color: var(--stripes);
        }
      }

      .badge {
        position: absolute;
        inset-block-start: 0;
        inset-inline-start: 0;
        display: flex;
        gap: 0.25rem;
        padding: var(--special-border-inline-size);
        border-bottom-right-radius: var(--image-border-radius);
        line-height: 0;
        z-index: 1;

        svg {
          inline-size: 1rem;
          aspect-ratio: 1;
        }
      }
    }
  }

  .text-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    h3 {
      font-size: 1rem;
    }

    p {
      font-size: 0.875rem;
      line-height: 1.125;
    }
  }
}
</style>
