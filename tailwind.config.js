const colors = require("tailwindcss/colors");

module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./content/**/*.{md,yml,json,yaml,toml,csv}",
		"./app.vue",
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: colors.rose[700],
					...colors.rose,
				},
			},
			fontFamily: {
				sansSerif: ["Kanit"],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
