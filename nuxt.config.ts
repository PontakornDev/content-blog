import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: [
		"@nuxt/content", 
		"@nuxtjs/tailwindcss",
		'@nuxtjs/sitemap',
		'~/modules/sitemap'
	],
	content: {
		markdown: {
			toc: {
				depth: 3,
				searchDepth: 3,
			},
		},
		highlight: {
			theme: "dracula-soft",
		},
	},
	sitemap: {
		hostname: 'https://www.devlearning.dev',
	},
	ssr: true,
	target: "server",
});
