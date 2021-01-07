<template>
  <nuxt-link :to="`work/${work.slug}`" class="relative flex flex-col">
    <div class="shadow-xl pt-media-sm md:pt-media-md lg:pt-media-lg">
      <img
        :src="work.cover.image"
        alt=""
        class="absolute inset-0 w-full h-full object-cover bg-gray-100"
      />
    </div>
    <div class="absolute bottom-0 left-0 w-full">
      <div class="relative z-10 px-4 pt-40 pb-3 bg-gradient-to-t from-black">
        <p class="text-sm font-medium text-white">{{ work.project_type }}</p>
        <h2 class="text-xl font-semibold text-white sm:text-2xl md:text-3xl">
          {{ work.title }}
        </h2>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ['work'],
}
</script>
