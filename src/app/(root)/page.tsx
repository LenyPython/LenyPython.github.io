// @ts-expect-error
import { getStoryblokApi, StoryblokComponent } from '@storyblok/react/rsc'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Piotr Lenartowicz Portfolio',
	description:
		"Hi, I'm a frontend engineer and this is my personal portfolio page. Feel free to check it out and reach out to me"
}
const Home: React.FC = async () => {
	const { data } = await fetchData()
	const name = data.story ? data.story.name : 'My Site'
	return (
		<div>
			<StoryblokComponent name={name} blok={data.story.content} />
		</div>
	)
}

export default Home

async function fetchData() {
	let sbParams = {
		version: process.env.NODE_ENV === 'production' ? 'published' : 'draft'
	}
	const storyblokApi = getStoryblokApi()
	return storyblokApi.get(`cdn/stories/home`, sbParams)
}
