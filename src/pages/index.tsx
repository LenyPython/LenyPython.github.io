import Head from 'next/head'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { StoryblokComponent, getStoryblokApi } from '@storyblok/react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Globe from '@/PortfolioModule/components/3D/Globe'

type storyblokProps = {
	story?: any
	key?: string
}

const Home: React.FC<
	InferGetStaticPropsType<typeof getStaticProps>
> = props => {
	const name = props.story ? props.story.name : 'My Site'
	return (
		<div>
			<Head>
				<title>Portfolio Piotr Lenartowicz</title>
			</Head>
			<StoryblokComponent name={name} blok={props.story.content} />
			<div className='fixed inset-0 -z-10'>
				<Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}>
					<ambientLight intensity={0.1} />
					<directionalLight color='hsla(120,100%,50%,1)' position={[0, 0, 5]} />
					<Suspense fallback={null}>
						<Globe position={[2, 0, 1]} />
					</Suspense>
				</Canvas>
			</div>
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
