<template>
  <main>
    <div class="container mx-auto">
      <div class="grid grid-flow-row md:grid-cols-2 gap-4">
        <Card v-for="(work, index) in works" :key="index" :work="work" />
      </div>
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
