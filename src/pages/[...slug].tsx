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
  console.log(props.story)
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

export const getStaticProps: GetStaticProps<storyblokProps> = async ({
  params
}) => {
  let slug = params?.slug
    ? typeof params.slug === 'string'
      ? params?.slug
      : params.slug.join('/')
    : 'home'
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

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi()
  let { data } = await storyblokApi.get('cdn/links/', {
    version: 'draft'
  })

  let paths: any[] = []
  Object.keys(data.links).forEach(linkKey => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === 'home')
      return

    const slug = data.links[linkKey].slug
    let splittedSlug = slug.split('/')

    paths.push({ params: { slug: splittedSlug } })
  })

  return {
    paths: paths,
    fallback: false
  }
}
