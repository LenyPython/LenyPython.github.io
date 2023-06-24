//@ts-ignore
import { getStoryblokApi } from '@storyblok/react/rsc'
//@ts-ignore
import StoryblokStory from '@storyblok/react/story'

export default async function Home({ params }: { params: { slug: string[] } }) {
  const slug = params.slug.join('/')
  const { data } = await fetchData(slug)
  console.log(slug)

  return (
    <main>
      <StoryblokStory story={data.story} />
    </main>
  )
}

export async function fetchData(slug: string) {
  const storyblokApi = getStoryblokApi()
  return storyblokApi.get(`cdn/stories/${slug}`, { version: 'draft' })
}
