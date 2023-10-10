/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack']
		})

		return config
	},
	i18n: {
		locales: ['en'],
		defaultLocale: 'en'
	},
	images: {
		formats: ['image/webp'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'a.storyblok.com',
				port: '',
				pathname: '/*/**'
			},
			{
				protocol: 'https',
				hostname: 'leetcode.com',
				port: '',
				pathname: '/*/**'
			},
			{
				protocol: 'https',
				hostname: 'assets.leetcode.com',
				port: '',
				pathname: '/*/**'
			}
		]
	}
}

module.exports = nextConfig
