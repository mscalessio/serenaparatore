<template>
  <main>
    <section
      class="relative px-4 py-40 bg-purple-500 bg-no-repeat bg-cover"
      :style="{
        backgroundImage: page.cover.image ? `url('${page.cover.image}')` : null,
      }"
    >
      <div class="container mx-auto">
        <div class="sm:w-2/3 lg:w-1/2">
          <h2
            v-if="page.cover.title"
            class="text-xl md:text-4xl font-bold mb-2"
            :class="coverTextClasses"
          >
            {{ page.cover.title }}
          </h2>
          <h3
            v-if="page.cover.subtitle"
            class="text-lg md:text-2xl mb-2"
            :class="coverTextClasses"
          >
            {{ page.cover.subtitle }}
          </h3>
        </div>
      </div>
    </section>
    <article class="my-8" v-html="$md.render(page.intro)" />
  </main>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    const page = await $content('about')
      .fetch()
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err)
        error({ statusCode: 404, message: 'Page not found' })
      })

    return {
      page,
    }
  },
  computed: {
    coverTextClasses() {
      const textColor = this.page.cover.text_color

      return {
        'text-black': textColor === 'black',
        'text-white': textColor === 'white',
        'text-gray-500': textColor === 'gray',
        'text-red-600': textColor === 'red',
        'text-yellow-300': textColor === 'yellow',
        'text-green-400': textColor === 'green',
        'text-blue-500': textColor === 'blue',
        'text-indigo-700': textColor === 'indigo',
        'text-purple-600': textColor === 'purple',
        'text-pink-500': textColor === 'pink',
      }
    },
  },
}
</script>
