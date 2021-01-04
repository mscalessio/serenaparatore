<template>
  <main v-if="works" class="main">
    <h1 class="title text-left">Projects</h1>
    <ul v-for="(work, index) in works" :key="index" class="articles">
      <nuxt-link class="article article--clickable" :to="`work/${work.slug}`">
        <h3 class="article-title">{{ work.title }}</h3>
        <div class="mt-4 mb-2">
          <h2
            class="inline py-1 px-2 mr-1 bg-accent text-white font-medium rounded-sm dark:bg-accent"
          >
            {{ work.project_type }}
          </h2>
          <p class="inline">{{ work.description }}</p>
        </div>
      </nuxt-link>
    </ul>
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
