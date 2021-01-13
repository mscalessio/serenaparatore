import path from 'path'
import glob from 'glob'
import * as SITE_INFO from './assets/content/settings/info.json'

const dynamicContentPath = 'assets/content' // ? No prepending/appending backslashes here
const dynamicRoutes = getDynamicPaths(
  {
    blog: 'blog/*.json',
    work: 'works/*.json',
  },
  dynamicContentPath
)

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: SITE_INFO.name || process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
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
    bodyAttrs: {
      class: 'antialiased',
    },
  },

  generate: {
    routes: dynamicRoutes,
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
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    dir: 'assets/content',
  },

  // Content module configuration (https://image.nuxtjs.org/options)
  image: {},

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
}

/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable - example below
 * {
 *   blog: 'blog/*.json',
 *   projects: 'projects/*.json'
 * }
 *
 * @return {Array} - Will return those files into urls for SSR generated .html's like
 * [
 *   /blog/2019-08-27-incidunt-laborum-e ,
 *   /projects/story-test-story-1
 * ]
 */
function getDynamicPaths(urlFilepathTable, cwdPath) {
  console.log(
    'Going to generate dynamicRoutes for these collection types: ',
    urlFilepathTable
  )
  const dynamicPaths = [].concat(
    ...Object.keys(urlFilepathTable).map((url) => {
      const filepathGlob = urlFilepathTable[url]
      return glob.sync(filepathGlob, { cwd: cwdPath }).map((filepath) => {
        return `/${url}/${path.basename(filepath, '.json')}`
      })
    })
  )
  console.log(
    'Found these dynamicPaths that will be SSR generated:',
    dynamicPaths
  )
  return dynamicPaths
}
