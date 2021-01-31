<template>
  <main>
    <section class="h-screen">
      <CoverVideo
        :sources="[
          'https://res.cloudinary.com/serenaparatore/video/upload/remote/animation/animation-home.mp4',
        ]"
        img="demo/assets/bg.jpg"
      ></CoverVideo>
    </section>
    <section class="mt-16">
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
      <div class="flex flex-col justify-center items-center my-16">
        <nuxt-link
          to="/works"
          class="text-xl sm:text-2xl py-4 px-8 bg-purple-600 text-white hover:bg-white hover:text-purple-600"
        >
          Load more
        </nuxt-link>
      </div>
    </section>
    <Clients />
    <Cta />
  </main>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    const site = await $content('site/info')
      .fetch()
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err)
        error({ statusCode: 404, message: 'Page not found' })
      })
    const works = await $content('work')
      .sortBy('date', 'desc')
      .limit(6)
      .fetch()
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err)
        error({ statusCode: 404, message: 'Page not found' })
      })
    return {
      site,
      works,
    }
  },
  data() {
    return {
      site: {},
    }
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
}
</script>
