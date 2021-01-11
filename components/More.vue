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

    <transition
      enter-active-class="transition ease-out duration-200"
      enter-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div v-if="isOpen">
        <slot name="content"></slot>
      </div>
    </transition>
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
