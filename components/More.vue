<template>
  <div class="relative">
    <button
      type="button"
      class="inline-flex items-center px-4 py-2"
      @click="isOpen = !isOpen"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        class="h-6 w-6"
      >
        <path d="M6 0h2v14H6z" />
        <path d="M0 6h14v2H0z" />
      </svg>
      <span class="ml-4 text-xl font-extralight">{{ title }}</span>
    </button>

    <div
      class="overflow-hidden transition-max-height ease-in duration-300 h-auto max-h-0"
      :class="{ 'max-h-96': isOpen }"
    >
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'More',
  props: {
    title: {
      type: String,
      default: 'More',
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
  computed: {
    classObject() {
      return {
        'ease-out': !this.isOpen,
        'duration-300': !this.isOpen,
        'max-h-96': this.isOpen,
        'ease-in': this.isOpen,
        'duration-75': this.isOpen,
      }
    },
  },
  methods: {
    beforeEnter(el) {
      // el.classList.toggle('ease-out')
      // el.classList.toggle('duration-1000')
      // el.classList.toggle('')
    },
    enter(el, done) {
      el.classList.toggle('max-h-96')
      done()
    },
    afterEnter(el) {
      // setTimeout(function () {
      //   el.classList.toggle('ease-out')
      //   el.classList.toggle('duration-1000')
      //   el.classList.toggle('max-h-0')
      // }, 1000)
    },
    beforeLeave(el) {
      // el.classList.toggle('ease-in')
      // el.classList.toggle('duration-1000')
    },
    leave(el, done) {
      el.classList.toggle('max-h-96')
      done()
      // setTimeout(function () {
      // }, 1000)
    },
    afterLeave(el) {
      // el.classList.toggle('ease-in')
      // el.classList.toggle('duration-1000')
      // el.classList.toggle('max-h-0')
      // el.classList.toggle('max-h-96')
    },
  },
}
</script>
