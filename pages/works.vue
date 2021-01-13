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
  async asyncData({ $content, error }) {
    const site = await $content('site/info')
      .fetch()
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err)
        error({ statusCode: 404, message: 'Page not found' })
      })
    const works = await $content('work')
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
  head() {
    return {
      title: `Selected works | ${this.site.name}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'A collection of selected works.',
        },
      ],
    }
  },
}
</script>
