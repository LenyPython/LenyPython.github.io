//@ts-ignore
import { getStoryblokApi } from '@storyblok/react/rsc'
//@ts-ignore
import StoryblokStory from '@storyblok/react/story'

export default async function Home() {
  const { data } = await fetchData()

  return (
    <div>
      <StoryblokStory story={data.story} />
    </div>
  )
}

export async function fetchData() {
  const storyblokApi = getStoryblokApi()
  return storyblokApi.get(`cdn/stories/home`, { version: 'draft' })
}
