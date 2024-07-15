// @ts-expect-error
import { getStoryblokApi, StoryblokComponent } from '@storyblok/react/rsc'
import { Metadata, ResolvingMetadata } from 'next'

type Props = {
	params: { slug: string[] }
	searchParams: { [key: string]: string | string | undefined }
}

export async function generateMetadata(
	{ params, searchParams }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	// read route params
	const slug = params?.slug?.length > 0 ? params.slug.join('/') : ''

	// fetch data
	const { data } = await fetchData(slug)
	const { title, description } = data?.story?.content

	return {
		title,
		description
	}
}

const BlogPage: React.FC<Props> = async ({ params }) => {
	const slug = params?.slug?.length > 0 ? params.slug.join('/') : ''
	const { data } = await fetchData(slug)
	const name = data.story ? data.story.name : 'My Site'
	return (
		<div>
			<StoryblokComponent name={name} blok={data.story.content} />
		</div>
	)
}

export default BlogPage

async function fetchData(slug: string) {
	let sbParams = {
		version: process.env.NODE_ENV === 'production' ? 'published' : 'draft'
	}
	const storyblokApi = getStoryblokApi()
	return storyblokApi.get(`cdn/stories/blog/${slug}`, sbParams)
}
