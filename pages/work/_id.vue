<template>
  <main v-if="work">
    <section
      class="relative py-40 bg-gray-100 bg-no-repeat bg-cover"
      :style="{ backgroundImage: `url('${work.cover}')` }"
    >
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold mb-2 text-white">
          {{ work.hero && work.hero.title }}
        </h2>
        <h3 class="text-2xl mb-8 text-gray-200">
          {{ work.project_type }}
        </h3>
      </div>
    </section>
    <article class="p-2 mt-8">
      <div class="container mx-auto">
        <div class="flex space-x-16">
          <div class="flex-auto">
            <h1 class="text-4xl font-bold">{{ work.title }}</h1>
          </div>
          <div class="flex-auto">
            <p>{{ work.description }}</p>
          </div>
        </div>
      </div>
    </article>
    <section class="p-2 mt-8">
      <div v-if="work.gallery" class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div v-for="image in work.gallery" :key="image.id" class="relative">
          <figure class="pt-full">
            <img
              class="absolute inset-0 w-full h-full object-cover bg-gray-100"
              :src="image"
            />
          </figure>
        </div>
      </div>
    </section>
  </main>
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
