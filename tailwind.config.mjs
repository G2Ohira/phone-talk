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
				'dark-purple': '#62339C',
				'gold': '#A78245',
				'light-gray': '#D9D9D9',
			},
			fontFamily: {
				sans: ['sans-serif'],
				yugothic: ['yu-gothic-pr6n'],
				futurapt: ['futura-pt'],
				koburina: ['koburina'],
				bodoni: ['Libre Bodoni'],
			},
			backgroundSize: {
				'large': '220%',
				'small': '230%',
			},
      keyframes: {
        loopslide: {
					from: {
						transform: "translateX(0)"
					},
					to: {
						transform: "translateX(-100%)"
					}
        },
        loopslide_reserve: {
					from: {
						transform: "translateX(-100%)"
					},
					to: {
						transform: "translateX(0)"
					}
        }
      },
      animation: {
        loopslide: 'loopslide 50s linear infinite',
        loopslide_reserve: 'loopslide_reserve 50s linear infinite',
      }
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
