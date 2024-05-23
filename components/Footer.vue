<template>
  <footer
    class="p-4 mt-8 bg-gray-200 rounded-lg shadow md:flex md:items-center md:p-6 dark:bg-gray-800"
  >
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
      >© {{ currentYear }} <b>DEV PAI</b>. All Rights Reserved.
    </span>
    <ul
      class="flex flex-wrap items-center mt-3 md:ml-5 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
    >
      <li>
        <a
          href="https://github.com/PontakornDev"
          class="mr-4 hover:text-fuchsia-700 md:mr-6"
        >
          <Icon class="inline" icon="mdi:github" width="30" height="30" />
          Github
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/pontakorn.changpat/"
          class="mr-4 hover:text-fuchsia-700 md:mr-6"
        >
          <Icon class="inline" icon="mdi:facebook" width="30" height="30" />
          Facebook
        </a>
      </li>
    </ul>
  </footer>
</template>

<script setup>
import { Icon } from "@iconify/vue";

const currentYear = new Date().getFullYear();
</script>
