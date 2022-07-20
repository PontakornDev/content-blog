<template>
  <div class="dark:bg-[#0c0c0c] dark:text-white">
    <Nav />
    <NuxtPage class="relative" />
    <Footer />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
  setup() {
    useHead({
      titleTemplate: (title) => `Dev Learning - ${title}`,
      title: "",
      meta: [
        { name: "keywords", content: "",},
        { name: "description", content: "",},
        {name: "robots", content:"index, follow",},
        {"http-equiv": "Content-Type", content:"text/html; charset=utf-8",},
        {property: "og:title", content: "",},
        {property: "og:sitename", content: 'Dev Learning',},
        {property: "og:description", content: "",},
        {property: "og:image", content: "",},
        {property: "og:image:width", content: "",},
        {property: "og:image:height", content: "",},
        {property: "og:image:type", content: "image/png",},
        {property: "og:locale", content: "",},
        {property: "og:type", content: "",},
        {property: "twitter:title", content: "",},
        {property: "twitter:sitename", content: "Dev Learning",},
        {property: "twitter:description", content: "",},
        {property: "twitter:image", content: "",},
        {property: "twitter:image:width", content: "",},
        {property: "twitter:image:height", content: "",},
        {property: "twitter:image:type", content: "image/png",},
        {property: "twitter:locale", content: "",},
        {property: "twitter:type", content: "",},
        ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico",},
        ],
    })
  },
})
</script>