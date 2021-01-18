<template>
  <nav
    :class="[sticky ? 'fixed top-0 right-0 w-full z-10' : 'bg-white', navClass]"
  >
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-24">
        <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            :aria-expanded="open"
            @click="open = !open"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              :aria-hidden="open"
            >
              <path
                v-if="open"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div class="flex-1 flex justify-start">
          <nuxt-link to="/" class="flex-shrink-0 flex items-center space-x-4">
            <Logo />
          </nuxt-link>
        </div>
        <div class="flex items-center">
          <div class="hidden sm:block sm:ml-6">
            <div class="flex">
              <nuxt-link class="link" to="/works">Works</nuxt-link>
              <nuxt-link class="link" to="/about">About</nuxt-link>
              <nuxt-link class="link" to="#footer">Contact</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="open" class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-2">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <nuxt-link to="/works" class="mobile-link">Works</nuxt-link>
        <nuxt-link to="/about" class="mobile-link">About</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
import debounce from 'lodash/debounce'

export default {
  name: 'Navbar',
  props: {
    sticky: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      open: false,
      navbarHeight: 50,
      isUserScrolling: false,
    }
  },
  computed: {
    navClass() {
      return {
        'bg-transparent': this.sticky && !this.isUserScrolling,
        'bg-white': this.sticky && this.isUserScrolling,
        'shadow-2xl': this.sticky && this.isUserScrolling,
      }
    },
  },
  beforeMount() {
    this.handleDebouncedScroll = debounce(this.handleScroll)
    window.addEventListener('scroll', this.handleDebouncedScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleDebouncedScroll)
  },
  methods: {
    handleScroll(event) {
      this.isUserScrolling = window.scrollY > this.navbarHeight
    },
  },
}
</script>
