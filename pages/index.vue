<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">serenaparatore</h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
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
    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          url: `${this.$config.baseURL}/`,
          name: this.site.name,
          logo: this.site.logo,
        },
        {
          '@type': 'WebSite',
          '@id': `${this.$config.baseURL}/#website`,
          url: `${this.$config.baseURL}/`,
          name: this.site.name,
          publisher: {
            '@id': `${this.$config.baseURL}/#organization`,
          },
        },
        {
          '@type': 'WebPage',
          '@id': `${this.$config.baseURL}#webpage`,
          url: `${this.$config.baseURL}${this.$route.path}`,
          inLanguage: this.site.lang,
          name: this.site.name,
          isPartOf: {
            '@id': `${this.$config.baseURL}/#website`,
          },
          // breadcrumb: {
          //   '@id':
          //     'https://www.key-one.it/rich-snippet-cosa-sono-i-dati-strutturati-e-come-usarli-al-meglio/#breadcrumblist',
          // },
          description: this.site.desccription,
          // image: {
          //   '@type': 'ImageObject',
          //   '@id':
          //     'https://www.key-one.it/rich-snippet-cosa-sono-i-dati-strutturati-e-come-usarli-al-meglio/#primaryimage',
          //   url:
          //     'https://www.key-one.it/wp-content/uploads/2019/06/dati-strutturali_ridimensionata.jpg',
          //   width: 1200,
          //   height: 800,
          // },
          // primaryImageOfPage: {
          //   '@id':
          //     'https://www.key-one.it/rich-snippet-cosa-sono-i-dati-strutturati-e-come-usarli-al-meglio/#primaryimage',
          // },
          datePublished: '2021-01-14T16:07:31+02:00',
          dateModified: '2021-01-14T16:07:31+02:00',
        },
      ],
    }
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
        // {
        //   hid: 'jsonLd',
        //   innerHTML: JSON.stringify(jsonLd, null, ''),
        //   type: 'application/ld+json',
        // },
      ],
    }
  },
}
</script>
