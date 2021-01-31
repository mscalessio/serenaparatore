<template>
  <main>
    <SocialHead
      :title="page.title"
      :description="page.description || site.description"
      :image="page.cover.image"
    />
    <section
      class="relative px-4 py-40 bg-purple-500 bg-no-repeat bg-cover h-60screen"
      :style="{
        backgroundImage: page.cover.image ? `url('${page.cover.image}')` : null,
      }"
    >
      <span class="sr-only"> </span>
      <!-- <div class="container mx-auto">
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
      </div> -->
    </section>
    <section class="px-4 max-w-screen-lg mx-auto mt-16 mb-8">
      <h2 class="text-purple-600 font-bold text-2xl md:text-4xl">
        {{ page.title }}
      </h2>
      <div
        class="text-xl md:text-2xl mt-8"
        v-html="$md.render(page.description)"
      ></div>
    </section>
    <div
      v-if="page.intro"
      class="px-4 flex flex-col items-center justify-center md:items-start md:flex-row my-8 max-w-screen-lg mx-auto"
    >
      <figure v-if="page.intro.image" class="flex-shrink-0 md:mr-8">
        <img class="w-60" :src="page.intro.image" alt="My pic" />
      </figure>
      <div class="md:self-center">
        <h3
          v-if="page.intro.title"
          class="text-purple-600 font-light text-2xl md:text-4xl"
        >
          {{ page.intro.title }}
        </h3>
        <div
          v-if="page.intro.description"
          class="mt-4"
          v-html="$md.render(page.intro.description)"
        ></div>
      </div>
    </div>
    <div
      v-if="page.content"
      class="px-4 max-w-screen-lg mx-auto mb-16"
      v-html="$md.render(page.content)"
    ></div>
    <Cta />
  </main>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    const site = await $content('site/info')
      .fetch()
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err)
        error({ statusCode: 404, message: 'Page not found' })
      })
    const page = await $content('about')
      .fetch()
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err)
        error({ statusCode: 404, message: 'Page not found' })
      })

    return {
      site,
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
  head() {
    return {
      title: `${this.page.metadata.title} | ${this.site.name}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.metadata.description,
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `${this.$config.baseURL}${this.$route.path}`,
        },
      ],
    }
  },
}
</script>
