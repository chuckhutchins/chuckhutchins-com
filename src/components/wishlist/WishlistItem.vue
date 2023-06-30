<template>
  <li>
    <a :href="link">
      <div>
        <img :src='image' alt='' />
      </div>
      <h3>{{ name }}<sup v-if="hasFootnote">{{ footnote }}</sup></h3>
    </a>
  </li>
</template>

<script>
export default {
  name: 'WishlistItem',
  props: {
    footnote: {
      default: '',
      required: false,
      type: String,
    },
    image: {
      default: '',
      required: true,
      type: String,
    },
    link: {
      default: '',
      required: true,
      type: String,
    },
    name: {
      default: '',
      required: true,
      type: String,
    },
  },
  computed: {
    hasFootnote() {
      return this.footnote !== '';
    },
  },
};
</script>

<style scoped lang="scss">
a {
  display: block;
  border-bottom: none;

  &:hover,
  &:focus {
    img {
      background-color: transparent;
    }

    h4 {
      border-bottom-color: transparent;
    }
  }

  div {
    overflow: hidden;
    border-radius: .125rem;
    margin-bottom: .5rem;
    background: linear-gradient(-45deg, #ffa745 0%, #fe869f 30%, #ef7ac8 45%, #a083ed 70%, #43aeff 85%);
  }

  img {
    background-color: var(--stripes);
    transition: background-color .2s;
  }

  h4 {
    display: inline;
    border-bottom: .125rem dotted;
    transition: border-bottom-color .2s;
  }
}
</style>