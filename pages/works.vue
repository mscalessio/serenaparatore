<template>
  <main>
    <div v-if="works" class="container mx-auto">
      <div class="grid grid-flow-row md:grid-cols-2 gap-4">
        <div
          v-for="(work, index) in works"
          :key="index"
          :class="['relative', { 'md:col-span-2': index === 2 }]"
        >
          <Card :work="work" />
        </div>
      </div>
    </div>
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
