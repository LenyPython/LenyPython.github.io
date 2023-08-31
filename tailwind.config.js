/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			boxShadow: {
				main: 'inset 0 0 17px 1px rgba(0,0,0,0.3)'
			}
		},
		colors: {
			font: 'hsl(var(--main-font-color)/ <alpha-value>)',
			background: 'hsl(var(--main-background-color)/ <alpha-value>)',
			secondarybg: 'hsl(var(--secondary-background-color)/ <alpha-value>)'
		}
	},
	plugins: []
}
