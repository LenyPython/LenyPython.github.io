import Head from 'next/head'

import { StoryblokComponent, getStoryblokApi } from '@storyblok/react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

type storyblokProps = {
  story?: any
  key?: string
}

export const getStaticProps: GetStaticProps<storyblokProps> = async context => {
  const storyblokApi = getStoryblokApi()
  let { data } = await storyblokApi.get(`cdn/stories/home`, {
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

const Home: React.FC<
  InferGetStaticPropsType<typeof getStaticProps>
> = props => {
  console.log(props)
  console.log(props.story)
  return (
    <div>
      <Head>
        <title>Portfolio Piotr Lenartowicz</title>
      </Head>
      <header>
        <h1>{props.story ? props.story.name : 'My Site'}</h1>
      </header>

      <main>
        <StoryblokComponent blok={props.story.content} />
      </main>
    </div>
  )
}

export default Home
