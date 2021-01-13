<template>
  <div class="relative" :class="{ 'col-span-full': fullwidth }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GalleryItem',
  props: {
    fullwidth: { type: Boolean, default: false },
  },
}
</script>
