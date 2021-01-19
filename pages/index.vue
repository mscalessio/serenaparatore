<template>
  <main>
    <section class="h-screen bg-purple-500">
      <div class="h-full flex items-center px-16">
        <p class="text-2xl font-bold text-white">
          Hi!<br />
          My name is Serena Paratore
        </p>
      </div>
    </section>
    <Clients />
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

    return {
      site,
    }
  },
  data() {
    return {
      site: {},
    }
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
}
</script>
