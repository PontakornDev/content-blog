import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  compatibilityDate: "2025-09-01",
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
  tailwindcss: {
    viewer: false, // Disable Tailwind viewer to avoid the warning
  },
  ssr: true,
});
