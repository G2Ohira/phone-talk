/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				'white': '#ffffff',
				'light-white': '#FBFBF9',
				'black': '#000000',
				'orange': '#E35228',
				'dark-gray': '#231815',
				'purple': '#A887B4',
				'light-black': '#221F24',
			},
			fontFamily: {
				sans: ['sans-serif'],
				yugothic: ['yu-gothic-pr6n'],
				futurapt: ['futura-pt'],
			},
			backgroundSize: {
				'220%': '220%',
				'300%': '300%',
			}
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
