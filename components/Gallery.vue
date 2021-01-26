<template>
  <div class="grid sm:gap-4 md:gap-8" :class="gridCols">
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
      return {
        'sm:auto-cols-max': this.columns >= 1,
        'sm:grid-cols-1': this.columns === 1,
        'sm:grid-cols-2': this.columns === 2,
        'sm:grid-cols-3': this.columns === 3,
        'sm:grid-cols-4': this.columns === 4,
        'sm:grid-cols-5': this.columns === 5,
        'sm:grid-cols-6': this.columns === 6,
      }
    },
  },
}
</script>
