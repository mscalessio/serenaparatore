<template>
  <nuxt-link
    :to="`work/${work.slug}`"
    class="relative rounded-xl shadow-lg flex flex-col"
    :class="randormBgClass()"
  >
    <div class="pt-full"></div>
    <div class="absolute top-0 left-0 w-full h-full p-4 flex flex-col">
      <h4 class="bg-accent text-white font-medium rounded-sm">
        {{ work.project_type }}
      </h4>
      <h3 class="text-2xl text-purple-900">{{ work.title }}</h3>
      <span class="text-sm bg-accent">Show me the story</span>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    work: {
      type: Object,
      default: undefined,
    },
  },
  methods: {
    randormBgClass() {
      const colors = [
        'bg-white',
        'bg-black',
        'bg-gray-500',
        'bg-red-300',
        'bg-red-500',
        'bg-yellow-300',
        'bg-green-200',
        'bg-blue-400',
        'bg-indigo-100',
        'bg-indigo-400',
        'bg-purple-100',
        'bg-purple-500',
        'bg-pink-200',
        'bg-pink-400',
        'bg-pink-700',
      ]
      return colors[Math.floor(Math.random() * colors.length)]
    },
  },
}
</script>
