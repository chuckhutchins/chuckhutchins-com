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

<script>
import IconRatingDislike from '@/components/icons/IconRatingDislike.vue';
import IconRatingGhost from '@/components/icons/IconRatingGhost.vue';
import IconRatingHeart from '@/components/icons/IconRatingHeart.vue';

export default {
  name: 'MediaList',
  props: {
    item: {
      default() {
        return {};
      },
      required: true,
      type: Object,
    }
  },
  components: {
    IconRatingDislike,
    IconRatingGhost,
    IconRatingHeart,
  },
  computed: {
    hasBadge() {
      return this.isLiked ||
        this.isDisliked ||
        this.isAbandoned;
    },
    isLiked() {
      return this.item.rating === 'Like';
    },
    isDisliked() {
      return this.item.rating === 'Dislike';
    },
    isAbandoned() {
      return this.item.finish === 0 && this.item.end !== '';
    },
    hasAuthor() {
      return !!this.item.author;
    },
    hasPlatform() {
      return !!this.item.platform;
    },
    hasSeason() {
      return !!this.item.season;
    },
  }
};
</script>

<style scoped lang="scss">
.media-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  .image-wrapper {
    --special-border-width: 0.25rem;
    --image-border-radius: 0.25rem;

    align-self: start;
    position: relative;
    border-radius: var(--image-border-radius);
    overflow: hidden;

    &.has-badge {
      &:before {
        content: ' ';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border: var(--special-border-width) solid;
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
        top: 0;
        left: 0;
        display: flex;
        gap: 0.25rem;
        padding: var(--special-border-width);
        border-bottom-right-radius: var(--image-border-radius);
        line-height: 0;
        z-index: 1;

        svg {
          width: 1rem;
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