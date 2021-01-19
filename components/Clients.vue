<template>
  <section class="bg-gray-200 py-8">
    <div class="container mx-auto">
      <p class="text-2xl font-semibold">They have already trusted me.</p>
      <Gallery :columns="6">
        <GalleryItem v-for="(client, i) in clients" :key="i">
          <figure class="pt-ful">
            <img :src="client.logo" :alt="client.name" />
          </figure>
        </GalleryItem>
      </Gallery>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Clients',
  async fetch() {
    const clients = await this.$content('relation_files/clients')
      .fetch()
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err)
        this.error({ message: 'Clients not found' })
      })

    this.clients = clients.clients.filter((item) => item.show === true)
  },
  data() {
    return {
      clients: {},
    }
  },
}
</script>
