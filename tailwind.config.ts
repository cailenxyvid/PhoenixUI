import type { Config } from 'tailwindcss';

export default {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		"./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
	  ],
	
	  plugins: [
		require('flowbite/plugin')
	  ],
	
	  darkMode: 'class',
	  
	  theme: {
		extend: {
		  colors: {
			// Ten Events
			primary: {
			'50': '#ecf3ff',
			'100': '#dde9ff',
			'200': '#c2d6ff',
			'300': '#9cb9ff',
			'400': '#7591ff',
			'500': '#4e65ff',
			'600': '#3640f5',
			'700': '#2a30d8',
			'800': '#252cae',
			'900': '#262e89',
			'950': '#161850',
		},
		
		  }
		}
	  }
} as Config;
