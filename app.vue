<template>
  <div class="dark:bg-[#0c0c0c] dark:text-white">
    <NuxtPage />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
  setup() {
    useHead({
      titleTemplate: (title) => `Dev Learning - ${title}`,
      meta: [{ name: "description", content: "" }],
      link: [{ rel: "icon", type: "image/x-icon", href: "/icon.png" }],
    })
  },
})
</script>