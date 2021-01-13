<template>
  <div class="grid auto-cols-max gap-4" :class="[gridCols]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  props: {
    columns: { type: Number, default: 2 },
  },
  computed: {
    gridCols() {
      return `sm:grid-cols-${this.columns}`
    },
  },
}
</script>
