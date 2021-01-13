<template>
  <footer class="p-2 pb-0 mt-8">
    <div class="container mx-auto">
      <div class="block w-full py-4"><Logo /></div>
      <div class="md:flex py-4 space-y-4 sm:space-y-0">
        <div class="sm:w-1/5">
          <ul class="space-y-4">
            <li v-for="(item, i) in sitemap" :key="i">
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
            <a v-if="showEmail" :href="contacts.email.url" class="link">{{
              contacts.email.name
            }}</a>
            <span v-if="!showEmail" class="link" @click="showEmail = !showEmail"
              >Click to show</span
            ><br /><br />
            <span class="font-bold">Address</span><br />
            <span>Via Alessandro Minuziano 70/B, Rome - Italy</span><br /><br />
            <span class="font-bold">Phone</span><br />
            <a v-if="showPhone" :href="contacts.phone.url" class="link">{{
              contacts.phone.name
            }}</a>
            <span v-if="!showPhone" class="link" @click="showPhone = !showPhone"
              >Click to show</span
            >
          </p>
        </div>
        <div class="sm:w-1/5 md:text-right">
          <h5 class="text-xl font-thin mb-4">Follow</h5>
          <ul class="space-y-4">
            <li v-for="(social, i) in socials" :key="i">
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
          All rights reserved © 2009 - 2021 | Cod. Fisc.: PRTSRN91P44H501B |
          P.Iva: 13470581003
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      showEmail: false,
      showPhone: false,
      contacts: {
        email: {
          name: 'serena.paratore@gmail.com',
          url: 'mailto:serena.paratore@gmail.com',
        },
        phone: {
          name: '+393929002503',
          url: 'tel:+393929002503',
        },
      },
      sitemap: [
        {
          name: 'Works',
          url: '/works',
        },
        {
          name: 'About',
          url: '/about',
        },
      ],
      socials: [
        {
          name: 'Vimeo',
          url: 'https://vimeo.com/serenaparatore',
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/sp_motiondesigner/',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/serena-paratore-53722680/',
        },
        {
          name: 'Skype',
          url: 'skype:serena_paratore?call',
        },
        {
          name: 'Dribbble',
          url: 'https://dribbble.com/serenaparatore',
        },
        {
          name: 'Behance',
          url: 'https://www.behance.net/serenaparatore',
        },
      ],
    }
  },
}
</script>
