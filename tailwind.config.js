/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      font: 'hsl(var(--main-font-color)/ <alpha-value>)',
      background: 'hsl(var(--main-background-color)/ <alpha-value>)',
    }
  },
  plugins: [],
}
