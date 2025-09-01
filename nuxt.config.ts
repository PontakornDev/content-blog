import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "@nuxtjs/sitemap"],
  content: {
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3,
      },
    },
    highlight: {
      theme: "dracula-soft",
      langs: [
        "go",
        "javascript",
        "typescript",
        "json",
        "yaml",
        "bash",
        "shell",
        "html",
      ],
    },
  },
  ssr: true,
});
