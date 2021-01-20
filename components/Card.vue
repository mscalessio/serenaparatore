<template>
  <nuxt-link :to="`work/${work.slug}`" class="relative flex flex-col">
    <div class="shadow-xl pt-media-sm md:pt-media-md lg:pt-media-lg">
      <img
        v-lazy="work.cover.image"
        alt=""
        class="absolute inset-0 w-full h-full object-cover bg-gray-100"
      />
    </div>
    <div
      class="absolute inset-0 w-full bg-purple-300 opacity-0 transition-opacity ease-out hover:opacity-90"
    >
      <div
        class="flex flex-col h-full justify-center items-center text-center z-10 p-4"
      >
        <h2 class="text-xl font-semibold text-white sm:text-2xl md:text-3xl">
          {{ work.title }}
        </h2>
        <p class="pt-4 text-sm font-medium text-white">
          {{ work.project_type }}
        </p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'Card',
  props: {
    work: {
      type: Object,
      default: undefined,
    },
  },
}
</script>
