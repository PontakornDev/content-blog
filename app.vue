<template>
  <div class="dark:bg-[#0c0c0c] dark:text-white body">
    <Nav />
    <NuxtPage class="relative" />
    <Footer />
  </div>
</template>
<script lang="ts">
export default defineComponent({
  setup() {
    useHead({
      titleTemplate: (title?: string) => `CodeUp - ${title}`,
      title: "",
      meta: [
        { name: "description", content: "" },
        { name: "robots", content: "index, follow" },
        { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" },
        { property: "og:title", content: "" },
        { property: "og:sitename", content: "CodeUp" },
        { property: "og:description", content: "" },
        { property: "og:image", content: "" },
        { property: "og:image:width", content: "" },
        { property: "og:image:height", content: "" },
        { property: "og:image:type", content: "image/png" },
        { property: "og:image:alt", content: "" },
        { property: "og:locale", content: "" },
        { property: "og:type", content: "" },
        { property: "og:url", content: "" },
        { property: "twitter:title", content: "" },
        { property: "twitter:sitename", content: "CodeUp" },
        { property: "twitter:description", content: "" },
        { property: "twitter:image", content: "" },
        { property: "twitter:image:width", content: "" },
        { property: "twitter:image:height", content: "" },
        { property: "twitter:image:type", content: "image/png" },
        { property: "twitter:image:alt", content: "" },
        { property: "twitter:locale", content: "" },
        { property: "twitter:type", content: "" },
        { property: "twitter:url", content: "" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    });
  },
});
</script>
