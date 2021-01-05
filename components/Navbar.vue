<template>
  <nav class="bg-white">
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
          <div class="flex-shrink-0 flex items-center space-x-4">
            <img
              class="block h-16 w-auto"
              src="/images/serena_paratore_logo.png"
              alt="Serena Paratore Logo"
            />
            <p class="hidden lg:block w-auto">Serena Paratore</p>
          </div>
        </div>
        <div class="flex items-center">
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <nuxt-link class="link" to="/works">Works</nuxt-link>
              <nuxt-link class="link" to="/about">About</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="open" class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <nuxt-link to="/works" class="mobile-link">Works</nuxt-link>
        <nuxt-link to="/about" class="mobile-link">About</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      open: false,
    }
  },
}
</script>

<style lang="css" scoped>
.link {
  @apply p-2;
}

.mobile-link {
  @apply block px-3 py-2 rounded-md text-base font-medium;
}

.mobile-link.nuxt-link-exact-active {
  @apply bg-gray-900 text-white;
}

.mobile-link:not(.nuxt-link-exact-active):hover {
  @apply text-gray-300 bg-gray-700 text-white;
}

.link.nuxt-link-exact-active {
  @apply border-b-4 border-purple-600;
}

.link:hover {
  @apply text-purple-600;
}
</style>
