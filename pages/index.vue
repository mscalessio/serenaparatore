<template>
  <main>
    <section class="h-screen">
      <video
        ref="videoCover"
        class="w-full h-full object-cover"
        autoplay
        playsinline
        loop
        muted
      >
        <source
          src="https://res.cloudinary.com/serenaparatore/video/upload/v1612106712/remote/animation/animation-home.mp4"
          type="video/mp4"
        />
      </video>
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
