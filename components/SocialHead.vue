<template>
  <span v-if="false" />
</template>

<script>
// Test on: https://cards-dev.twitter.com/validator
// Test on: https://developers.facebook.com/tools/debug/
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: undefined,
    },
    url: {
      type: String,
      default: undefined,
    },
    type: {
      type: String,
      default: 'website',
    },
  },
  async fetch() {
    this.site = await this.$content('site/info')
      .fetch()
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err)
        this.error({ statusCode: 404, message: 'Page not found' })
      })
  },
  data() {
    return {
      site: {},
    }
  },
  head() {
    return {
      meta: [
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: this.url || this.$config.baseURL + this.$route.path,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.image || this.site.default_image || '',
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.title,
        },
        { hid: 'og:type', property: 'og:type', content: this.type },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.url || this.$config.baseURL + this.$route.path,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.image || this.site.default_image || '',
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.image || this.site.default_image || '',
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.title,
        },
      ],
    }
  },
}
</script>
