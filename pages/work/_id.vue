<template>
  <article v-if="work" class="main article">
    <h1 class="article-title">{{ work.title }}</h1>
    <p class="mt-4">{{ work.description }}</p>
    <img class="cover-image" :src="work.cover" />
    <div class="content block mt-8 mb-4" v-html="$md.render(work.body)" />
    <div v-if="work.gallery">
      <img
        v-for="image in work.gallery"
        :key="image.id"
        class="image"
        :src="image"
      />
    </div>
  </article>
</template>
<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { work: payload }
    else
      return {
        work: await require(`~/assets/content/works/${params.id}.json`),
      }
  },
}
</script>
