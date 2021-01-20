<template>
  <figure :class="[ratio === 'video' ? 'pt-video' : 'pt-full']">
    <img
      v-lazy="src"
      class="absolute inset-0 w-full h-full object-cover bg-gray-100"
      :alt="alt"
    />
  </figure>
</template>

<script>
export default {
  name: 'GalleryImage',
  props: {
    lazy: {
      type: Boolean,
      default: true,
    },
    ratio: {
      type: String,
      default: 'square',
    },
    alt: {
      type: String,
      default: 'Alt text',
    },
    src: {
      type: String,
      required: true,
    },
  },
}
</script>
