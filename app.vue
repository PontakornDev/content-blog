<template>
  <div class="dark:bg-[#0c0c0c] dark:text-white">
    <Nav />
    <NuxtPage class="relative" />
    <Footer />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { content } from './tailwind.config';

export default defineComponent ({
  setup() {
    useHead({
      titleTemplate: (title) => `Dev Learning - ${title}`,
      meta: [
        { name: "description", content: "" },
        {name: "robots", content:"index, follow"},
        {property: "og:title", content: ""},
        {property: "og:sitename", content: 'Dev Learning'},
        {property: "og:description", content: ""},
        {property: "og:image", content: "/icon.png"},
        {property: "og:image:width", content: "1024"},
        {property: "og:image:height", content: "576"},
        {property: "og:image:type", content: "image/png"},
        {property: "twitter:title", content: ""},
        {property: "twitter:sitename", content: "Dev Learning"},
        {property: "twitter:description", content: ""},
        {property: "twitter:image", content: "/icon.png"},
        {property: "twitter:image:width", content: "1024"},
        {property: "twitter:image:height", content: "576"},
        {property: "twitter:image:type", content: "image/png"}
        ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/icon.png" },
        {rel: "canonical", href: ""}
        ],
    })
  },
})
</script>