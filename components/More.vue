<template>
  <div class="relative">
    <button
      type="button"
      class="inline-flex items-center px-4 py-2 focus:outline-none focus:ring-0 focus:ring-transparent"
      @click="isOpen = !isOpen"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        class="h-4 w-4"
      >
        <path d="M6 0h2v14H6z" />
        <path d="M0 6h14v2H0z" />
      </svg>
      <span class="ml-2 text-xl font-extralight">{{ title }}</span>
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
}
</script>
