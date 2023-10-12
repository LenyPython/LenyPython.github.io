'use client'
import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import Navigation from '@/PortfolioModule/components/Navigation/Navigation'
import { PortfolioContentLayoutStoryblok } from '@/types/component-types-sb'

import { Canvas } from '@react-three/fiber'
import MatrixBg from '@/PortfolioModule/components/MatrixBg/MatrixBg'
import Globe from '@/PortfolioModule/components/3D/Globe'
// animation lib
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import { TextPlugin } from 'gsap/dist/TextPlugin'

gsap.registerPlugin(TextPlugin, ScrollTrigger, ScrollToPlugin)

type Props = {
	blok: PortfolioContentLayoutStoryblok
}

const PortfolioContentLayout: React.FC<Props> = ({ blok }) => {
	return (
		<>
			<nav>
				<Navigation config={blok.Sections} />
			</nav>
			<main>
				<div className='w-full' {...storyblokEditable(blok)}>
					{blok.Sections.map((component: any) => (
						<StoryblokComponent blok={component} key={component._uid} />
					))}
				</div>
			</main>
			<MatrixBg />
			<div className='fixed inset-0 -z-10'>
				<Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}>
					<ambientLight intensity={0.1} />
					<directionalLight color='hsla(120,100%,50%,1)' position={[0, 0, 5]} />
					<Globe position={[2, 0, 1]} />
				</Canvas>
			</div>
		</>
	)
}

export default PortfolioContentLayout
