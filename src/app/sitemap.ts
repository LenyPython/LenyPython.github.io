import { MetadataRoute } from 'next'
// @ts-expect-error
import { apiPlugin, storyblokInit, getStoryblokApi } from '@storyblok/react/rsc'

storyblokInit({
	accessToken: process.env.STORYBLOK_API_TOKEN,
	use: [apiPlugin]
})

const DOMAIN = 'https://lenypython.github.io'
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	let sbParams = {
		version: process.env.NODE_ENV === 'production' ? 'published' : 'draft'
	}
	const storyblokApi = getStoryblokApi()
	const result = await storyblokApi.get('cdn/links', sbParams)
	const linkObj = result.data.links
	const sitemap = [] as MetadataRoute.Sitemap
	for (const props of Object.values(linkObj)) {
		sitemap.push({
			url: `${DOMAIN}${(props as { path: string })?.path}`,
			lastModified: new Date()
		})
	}
	return sitemap
}
