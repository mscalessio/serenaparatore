<template>
  <main>
    <div class="container mx-auto">
      <Gallery :columns="2">
        <GalleryItem
          v-for="(item, i) in works"
          :key="i"
          :fullwidth="item.featured"
        >
          <Card :work="item" />
        </GalleryItem>
      </Gallery>
    </div>
    <Cta />
  </main>
</template>
<script>
export default {
  computed: {
    works() {
      return this.$store.state.works
    },
  },
}
</script>
