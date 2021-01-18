<template>
  <main v-if="work">
    <section
      v-if="work.cover"
      class="relative px-4 py-40 bg-gray-100 bg-no-repeat bg-cover"
      :style="{ backgroundImage: `url('${work.cover.image}')` }"
    >
      <div class="container mx-auto">
        <div class="sm:w-2/3 lg:w-1/2">
          <h2
            v-if="work.cover.title"
            class="text-xl md:text-4xl font-bold mb-2"
            :class="coverTextClasses"
          >
            {{ work.cover.title }}
          </h2>
          <h3
            v-if="work.cover.subtitle"
            class="text-lg md:text-2xl mb-2"
            :class="coverTextClasses"
          >
            {{ work.cover.subtitle }}
          </h3>
          <h4 class="md:text-2xl font-thin mb-8" :class="coverTextClasses">
            {{ work.project_type }}
          </h4>
        </div>
      </div>
    </section>
    <article class="p-4 mt-8">
      <div class="container mx-auto">
        <div class="flex flex-col md:flex-row md:space-x-16">
          <div class="flex-auto">
            <h1 class="text-4xl font-bold">{{ work.title }}</h1>
          </div>
          <div class="flex-auto">
            <div class="md:px-4 py-4" v-html="$md.render(work.description)" />
            <div v-if="work.extras">
              <More title="Extra info:">
                <template v-slot:content>
                  <div
                    class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-16 bg-gray-200 p-4"
                  >
                    <div
                      v-for="(extra, i) in work.extras"
                      :key="i"
                      class="text-sm"
                      v-html="$md.render(extra)"
                    ></div>
                  </div>
                </template>
              </More>
            </div>
          </div>
        </div>
      </div>
    </article>
    <section v-if="work.video" class="p-4 pb-0 mt-8 mb-0">
      <div class="relative">
        <figure class="pt-video">
          <img
            :src="work.video.cover || work.cover.image"
            alt="Video Cover"
            class="absolute inset-0 w-full h-full object-cover bg-gray-100"
          />
        </figure>
        <span
          class="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 origin-center w-auto"
        >
          <button
            class="inline-flex items-center px-8 py-4 border border-transparent text-base leading-6 font-medium text-white bg-purple-600 hover:bg-purple-500 focus:border-purple-700 active:bg-purple-700 transition ease-in-out duration-150"
            type="button"
            @click.prevent="showVideo = true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="animate-bounce w-6 h-6 mr-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Play Video
          </button>
        </span>
      </div>
    </section>
    <section v-if="work.gallery" class="p-4 mt-0">
      <!-- for auto-arrangment use grid-flow-row-dense -->
      <Gallery :columns="work.gallery.columns">
        <GalleryItem
          v-for="(item, i) in work.gallery.items"
          :key="i"
          :fullwidth="item.fullwidth"
        >
          <!-- for USE THIS ONLY IN SSR -->
          <!-- <nuxt-image
            v-for="(item, index) in items"
            :key="index"
            :placeholder="true"
            width="400"
            height="225"
            :src="item"
            :class="[itemFullClass(index)]"
          /> -->
          <figure class="pt-full">
            <img
              class="absolute inset-0 w-full h-full object-cover bg-gray-100"
              :class="{ 'col-span-full': item.fullwidth }"
              :alt="item.alt || `${work.title} Image ${i}`"
              :src="item.image"
            />
          </figure>
        </GalleryItem>
      </Gallery>
    </section>
    <section v-if="work.credits" class="p-2 mt-8">
      <div class="container mx-auto">
        <More title="Credits:">
          <template v-slot:content>
            <div
              class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-16 bg-gray-200 p-4"
            >
              <div
                v-for="(credit, i) in work.credits"
                :key="i"
                class="text-sm"
                v-html="$md.render(credit)"
              ></div>
            </div>
          </template>
        </More>
      </div>
    </section>
    <Cta />

    <Portal to="end-body">
      <Modal v-if="showVideo" @close="showVideo = !showVideo">
        <div class="relative pt-video">
          <iframe
            :src="`https://player.vimeo.com/video/${work.video.id}?title=0&byline=0&portrait=0`"
            class="absolute inset-0 w-full h-full"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </Modal>
    </Portal>
  </main>
</template>
<script>
import capitalize from 'lodash/capitalize'

export default {
  async asyncData({ $content, params, error }) {
    const work = await $content('work', params.slug)
      .fetch()
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err)
        error({ statusCode: 404, message: 'Page not found' })
      })
    const site = await $content('site/info')
      .fetch()
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err)
        error({ statusCode: 404, message: 'Page not found' })
      })

    return {
      work,
      site,
    }
  },
  data() {
    return {
      showVideo: false,
    }
  },
  head() {
    return {
      title: `${this.work.metadata.title} | ${capitalize(
        this.work.project_type
      )} | ${this.site.name}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.work.metadata.description || this.site.description,
        },
      ],
    }
  },
  computed: {
    coverTextClasses() {
      const textColor = this.work.cover.text_color

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
