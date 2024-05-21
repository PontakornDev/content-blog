<template>
  <header
    class="flex sticky z-10 top-0 items-center justify-between h-20 w-full px-[5%] lg:px-[15%] bg-blue-500"
  >
    <NuxtLink to="/" class="font-bold inline text-xl md:text-4xl">
      <span class="text-primary">D</span>ev
      <span class="text-amber-600">L</span>earning
    </NuxtLink>
    <nav class="flex items-center space-x-7 text-gray-600">
      <div v-for="(n, i) in links" :key="`navLink-${i}`">
        <NuxtLink
          :to="n.link"
          class="inline-block nav-link hover:text-primary group"
        >
          <div class="flex items-center space-x-2">
            <Icon :icon="n.icon" class="w-4 h-4" />
            <span class="font-bold"> {{ n.name }}</span>
          </div>
          <div
            class="h-0.5 w-5/5 bg-primary mt-1 -translate-y-full scale-0 group-hover:scale-100 group-hover:translate-y-full transition-all"
          ></div>
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { Icon } from "@iconify/vue";
const links = [
  {
    name: "Blog Posts",
    icon: "carbon:blog",
    link: "/",
  },
  // {
  // 	name: "Merch",
  // 	icon: "ion:shirt-outline",
  // 	link: "/merch",
  // },
];
</script>

<style scoped>
.nav-link.router-link-active.router-link-exact-active {
  @apply text-primary;
}
</style>
