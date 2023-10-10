import { Suspense } from 'react'
import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import Navigation from '@/PortfolioModule/components/Navigation/Navigation'
import MatrixBg from '@/PortfolioModule/components/MatrixBg/MatrixBg'
import { PortfolioContentLayoutStoryblok } from '@/types/component-types-sb'
import Footer from '@/PortfolioModule/components/Footer'
import { Canvas } from '@react-three/fiber'
import Globe from '@/PortfolioModule/components/3D/Globe'

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
					<Suspense fallback={null}>
						<Globe position={[2, 0, 1]} />
					</Suspense>
				</Canvas>
			</div>
			<Footer />
		</>
	)
}

export default PortfolioContentLayout
