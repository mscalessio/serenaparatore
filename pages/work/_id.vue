<template>
  <main v-if="work">
    <section
      v-if="work.cover"
      class="relative py-40 bg-gray-100 bg-no-repeat bg-cover"
      :style="{ backgroundImage: `url('${work.cover.image}')` }"
    >
      <div class="container mx-auto px-6">
        <h2 v-if="work.cover.title" class="text-4xl font-bold mb-2 text-white">
          {{ work.cover.title }}
        </h2>
        <h3 v-if="work.cover.subtitle" class="text-2xl mb-2 text-white">
          {{ work.cover.subtitle }}
        </h3>
        <h4 class="text-2xl mb-8 text-gray-200">
          {{ work.project_type }}
        </h4>
      </div>
    </section>
    <article class="p-2 mt-8">
      <div class="container mx-auto">
        <div class="flex flex-col md:flex-row md:space-x-16">
          <div class="flex-auto">
            <h1 class="text-4xl font-bold">{{ work.title }}</h1>
          </div>
          <div class="flex-auto" v-html="$md.render(work.description)" />
        </div>
      </div>
    </article>
    <section v-if="work.video" class="p-2 mt-8">
      <div class="container mx-auto">
        <div class="relative pt-video">
          <iframe
            :src="`https://player.vimeo.com/video/${work.video.id}?title=0&byline=0&portrait=0`"
            class="absolute inset-0 w-full h-full"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </div>
    </section>
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
    <section v-if="work.credits" class="p-2 mt-8">
      <div class="container mx-auto">
        <h4 class="text-xl font-extralight mb-2">Credits:</h4>
        <div
          class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-16"
        >
          <div
            v-for="(credit, i) in work.credits"
            :key="i"
            v-html="$md.render(credit)"
          ></div>
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
