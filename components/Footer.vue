<template>
  <footer class="p-2 pb-0 mt-8">
    <div class="container mx-auto">
      <div class="block w-full py-4"><Logo /></div>
      <div class="md:flex py-4 space-y-4 sm:space-y-0">
        <div class="sm:w-1/5">
          <ul class="space-y-4">
            <li v-for="(item, i) in site.sitemap" :key="i">
              <a :href="item.url" class="link text-xl font-light">{{
                item.name
              }}</a>
            </li>
          </ul>
        </div>
        <div class="sm:w-3/5">
          <h5 class="text-xl font-thin mb-4">Contacts</h5>
          <p class="text-sm">
            <span class="font-bold">General inquiries</span><br />
            <a v-if="showEmail" :href="`mailto:${site.email}`" class="link">{{
              site.email
            }}</a>
            <span v-if="!showEmail" class="link" @click="showEmail = !showEmail"
              >Click to show</span
            ><br /><br />
            <span class="font-bold">Address</span><br />
            <span>{{ site.address }}</span>
            <br /><br />
            <span class="font-bold">Phone</span><br />
            <a v-if="showPhone" :href="`tel:${site.phone}`" class="link">{{
              site.phone
            }}</a>
            <span v-if="!showPhone" class="link" @click="showPhone = !showPhone"
              >Click to show</span
            >
          </p>
        </div>
        <div class="sm:w-1/5 md:text-right">
          <h5 class="text-xl font-thin mb-4">Follow</h5>
          <ul class="space-y-4">
            <li v-for="(social, i) in site.socials" :key="i">
              <a
                :href="social.url"
                class="font-light link"
                target="_blank"
                rel="nofollow"
                >{{ social.name }}</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="border-t border-gray-300 mt-4 py-4">
        <p class="text-center text-xs font-thin">
          All rights reserved © 2009 - 2021 | Cod. Fisc.:
          {{ site.cod_fiscale }} | P.Iva: {{ site.p_iva }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  async fetch() {
    this.site = await this.$content('site/info')
      .fetch()
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err)
        this.error({ statusCode: 404, message: 'Page not found' })
      })
  },
  data() {
    return {
      site: {},
      showEmail: false,
      showPhone: false,
    }
  },
}
</script>
