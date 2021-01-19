<template>
  <section class="bg-gray-200 py-8">
    <div class="p-4 container mx-auto max-w-screen-lg">
      <p class="text-2xl font-semibold">They have already trusted me.</p>
      <div class="grid gap-4 grid-cols-3 sm:grid-cols-4 md:grid-cols-6 mt-16">
        <div v-for="(client, i) in clients" :key="i">
          <figure class="relative pt-full">
            <img
              class="absolute inset-0 w-full h-full"
              :src="client.logo"
              :alt="client.name"
            />
          </figure>
        </div>
      </div>
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
