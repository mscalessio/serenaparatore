import * as siteInfo from './assets/content/site/info.json'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: siteInfo.name || process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: siteInfo.description || process.env.npm_package_name || '',
      },
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', sizes: '192x192', href: '/favicon.png' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;700&display=swap',
      },
    ],
    script: [
      {
        hid: 'organization',
        innerHTML: JSON.stringify(
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            url: process.env.BASE_URL || 'https://serenaparatore.com',
            name: siteInfo.name,
            logo: siteInfo.logo,
          },
          null,
          ''
        ),
        type: 'application/ld+json',
      },
      {
        hid: 'website',
        innerHTML: JSON.stringify(
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            url: process.env.BASE_URL || 'https://serenaparatore.com',
            name: siteInfo.name,
            publisher: {
              '@type': 'Person',
              name: 'Serena Paratore',
              jobTitle: 'Motion Designer',
              url: process.env.BASE_URL || 'https://serenaparatore.com',
            },
          },
          null,
          ''
        ),
        type: 'application/ld+json',
      },
    ],
    bodyAttrs: {
      class: 'antialiased',
    },
    __dangerouslyDisableSanitizers: ['script'],
  },

  generate: {
    fallback: true,
    subFolders: false,
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/css/tailwind.css', '@/assets/css/main.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://google-analytics.nuxtjs.org/
    '@nuxtjs/google-analytics',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/markdownit',
    'portal-vue/nuxt',
    // https://sitemap.nuxtjs.org/
    '@nuxtjs/sitemap',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    dir: 'assets/content',
  },

  // Image module configuration (https://image.nuxtjs.org/options)
  image: {},

  // Google-Anbalytics module configuration (https://google-analytics.nuxtjs.org/options)
  googleAnalytics: {
    id: siteInfo.analytics_id || 'UA-XXX-X',
  },

  // Sitemap module configuration (https://google-analytics.nuxtjs.org/options)
  sitemap: {
    hostname: process.env.BASE_URL || 'https://serenaparatore.com',
    routes: async () => {
      const { $content } = require('@nuxt/content')
      const files = await $content('work').only(['slug']).fetch()
      return files.map((file) => `/work/${file.slug}`)
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true,
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    exposeConfig: false, // enables `import { theme } from '~tailwind.config'`
  },

  markdownit: {
    injected: true,
  },

  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'https://serenaparatore.com',
  },
}
