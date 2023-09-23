/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			boxShadow: {
				main: 'inset 0 0 17px 1px rgba(0,0,0,0.3)',
				btnBlack:
					'0 0 10px hsl(var(--main-background-color)), 0 0 40px hsl(var(--main-background-color)), 0 0 80px hsl(var(--main-background-color))',
				btnGreen:
					'0 0 10px hsl(var(--main-font-color)), 0 0 30px hsl(var(--main-font-color)), 0 0 40px hsl(var(--main-font-color)), 0 0 70px hsl(var(--main-font-color)), 0 0 90px hsl(var(--main-font-color))'
			},
			colors: {
				font: 'hsl(var(--main-font-color)/ <alpha-value>)',
				background: 'hsl(var(--main-background-color)/ <alpha-value>)',
				secondarybg: 'hsl(var(--secondary-background-color)/ <alpha-value>)'
			}
		}
	},
	plugins: []
}
