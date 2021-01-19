<template>
  <section class="bg-gray-200 py-8">
    <div class="container mx-auto">
      <p class="text-2xl font-semibold">They have already trusted us.</p>
      <Gallery :columns="6">
        <GalleryItem>
          <LogoTim />
        </GalleryItem>
        <GalleryItem>
          <LogoMercedes />
        </GalleryItem>
        <GalleryItem>
          <LogoPayback />
        </GalleryItem>
        <GalleryItem>
          <LogoSmart />
        </GalleryItem>
        <GalleryItem>
          <LogoColgate />
        </GalleryItem>
      </Gallery>
    </div>
  </section>
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
    return {
      site,
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
