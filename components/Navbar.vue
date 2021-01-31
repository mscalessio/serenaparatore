<template>
  <nav class="px-2" :class="[navClass, { 'bg-white': fillBg }]">
    <div class="container mx-auto">
      <div
        class="relative flex items-center justify-between h-24 z-20 text-purple-600"
      >
        <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            class="inline-flex items-center justify-center p-2 h-16 w-16 text-purple-600 focus:outline-none focus:ring-0 focus:ring-transparent"
            :aria-expanded="open"
            @click="handleBurgerClick"
          >
            <span class="sr-only">Open main menu</span>
            <Lottie
              id="burger-menu"
              :options="{
                path: '/remote/animation/close.json',
                loop: false,
                autoplay: false,
              }"
              @animCreated="handleBurgerAnimation"
            />
            <VStyle>
              #burger-menu path { fill: {{ burgerFillColor }};
              transition-property: fill, stroke; transition-duration: 0.2s;
              transition-timing-function: ease-out; }
            </VStyle>
          </button>
        </div>
        <div class="flex-1 flex justify-start">
          <nuxt-link to="/">
            <LogoAnim :color="burgerFillColor" />
          </nuxt-link>
        </div>
        <div class="flex items-center">
          <div class="hidden sm:block sm:ml-6">
            <div class="flex">
              <nuxt-link class="link" to="/works">Works</nuxt-link>
              <nuxt-link class="link" to="/about">About</nuxt-link>
              <a
                class="link"
                href="#footer"
                @click.prevent="scrollInto('footer')"
                >Contact</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <transition
      :duration="{ enter: 200, leave: 75 }"
      enter-active-class="transition-transform ease-out duration-200"
      enter-class="transform-gpu translate-x-full"
      enter-to-class="transform-gpu translate-x-0"
      leave-active-class="transition-transform ease-in duration-75"
      leave-class="transform-gpu translate-x-0"
      leave-to-class="transform-gpu translate-x-full"
    >
      <div
        v-if="open"
        class="sm:hidden fixed inset-0 w-full h-full bg-purple-600 pt-24"
      >
        <div
          class="flex flex-col items-center justify-center px-2 pt-2 pb-3 space-y-2"
        >
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <nuxt-link to="/works" class="mobile-link">Works</nuxt-link>
          <nuxt-link to="/about" class="mobile-link">About</nuxt-link>
          <a
            class="mobile-link"
            href="#footer"
            @click.prevent="scrollInto('footer')"
            >Contact</a
          >
        </div>
      </div>
    </transition>
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
    fillBg: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      open: false,
      navbarHeight: 10,
      isUserScrolling: false,
      anim: null,
      animStartFrame: 30,
      animEndFrame: 90,
    }
  },
  computed: {
    burgerFillColor() {
      return this.open ? '#fff' : 'currentColor'
    },
    navClass() {
      return {
        'bg-transparent': this.sticky && !this.isUserScrolling && !this.fillBg,
        'bg-white': this.sticky && this.isUserScrolling && !this.fillBg,
        'text-white': this.sticky && !this.isUserScrolling && !this.fillBg,
        'fixed top-0 left-0 w-full z-20': this.sticky,
      }
    },
  },
  watch: {
    $route() {
      this.open = false
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
    scrollInto(el) {
      const element = document.querySelector(el)
      this.open && (this.open = false)
      element &&
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
          inline: 'nearest',
        })
    },
    handleScroll(event) {
      this.isUserScrolling = window.scrollY > this.navbarHeight
    },
    handleBurgerAnimation(anim) {
      this.anim = anim
    },
    handleBurgerClick() {
      this.open === false ? this.openMobileMenu() : this.closeMobileMenu()
    },
    openMobileMenu() {
      this.anim.setDirection(1)
      this.anim.playSegments([this.animStartFrame, this.animEndFrame], true)
      this.open = true
    },
    closeMobileMenu() {
      this.anim.setDirection(-1)
      this.anim.playSegments([this.animEndFrame, this.animStartFrame], true)
      // this.anim.goToAndPlay(this.animEndFrame, true)
      this.open = false
    },
  },
}
</script>
