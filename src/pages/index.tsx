import Head from 'next/head'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { StoryblokComponent, getStoryblokApi } from '@storyblok/react'

type storyblokProps = {
  story?: any
  key?: string
}

const Home: React.FC<
  InferGetStaticPropsType<typeof getStaticProps>
> = props => {
  console.log(props)
  const name = props.story ? props.story.name : 'My Site'
  return (
    <div>
      <Head>
        <title>Portfolio Piotr Lenartowicz</title>
      </Head>
      <StoryblokComponent name={name} blok={props.story.content} />
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<storyblokProps> = async context => {
  let slug = 'home'
  const storyblokApi = getStoryblokApi()
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: 'draft'
  })

  return {
    props: {
      story: data ? data.story : null,
      key: data ? data.story.id : null
    },
    revalidate: 3600 // revalidate every hour
  }
}
