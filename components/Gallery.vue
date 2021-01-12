<template>
  <div class="grid auto-cols-max gap-4" :class="[gridCols]">
    <nuxt-image
      v-for="(item, index) in items"
      :key="index"
      :placeholder="true"
      width="400"
      height="225"
      :src="item"
      :class="[itemFullClass(index)]"
    />
    <!-- <div v-for="image in items" :key="image.id" class="relative">
      <figure class="pt-full">
        <img
          class="absolute inset-0 w-full h-full object-cover bg-gray-100"
          :src="image"
        />
      </figure>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  props: {
    items: { type: Array, default: undefined },
  },
  data() {
    return {
      columns: 2,
    }
  },
  computed: {
    gridCols() {
      return `sm:grid-cols-${this.columns}`
    },
  },
  methods: {
    itemFullClass(i) {
      const nth = this.columns + 1
      return i % nth === nth - 1 ? 'col-span-full' : ''
    },
  },
}
</script>
