// @ts-expect-error
import { getStoryblokApi, StoryblokComponent } from '@storyblok/react/rsc'

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
