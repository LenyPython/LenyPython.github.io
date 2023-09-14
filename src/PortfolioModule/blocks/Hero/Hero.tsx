import { Suspense, useState } from 'react'
import { renderRichText } from '@storyblok/react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import Globe from '@/PortfolioModule/components/3D/Globe'
import RichText from '@/Global/components/RIchText/RichText'

import styles from './hero.module.scss'
import { HeroStoryblok } from '@/types/component-types-sb'
// find a way to import glb files nextjs
const Avatar = dynamic(
	() => import('@/PortfolioModule/components/Avatar').then(mod => mod.Avatar),
	{ ssr: false }
)

type Props = {
	blok: HeroStoryblok
}

const Hero: React.FC<Props> = ({ blok }) => {
	const { headline, Image: img, rich_text, cta_link, call_to_action } = blok
	const [isActive, setIsActive] = useState<boolean>(false)
	const copyEmailToClipboard = () => {
		navigator.clipboard.writeText('piotr.lenartowicz@yahoo.com')
		setIsActive(true)
		setTimeout(() => setIsActive(false), 5000)
	}
	return (
		<div className='w-3/4 max-w-4xl justify-between flex'>
			<div className='flex flex-col h-1/2 p-10 self-start justify-center bg-secondarybg/40 rounded-lg backdrop-blur-lg'>
				<div>
					<h2 className='text-6xl font-bold mb-10'>{headline}</h2>
					<RichText html={renderRichText(rich_text)} />
				</div>
				<div className='flex items-center mt-20'>
					<Link href={`#${cta_link.anchor}`} className={styles.ctaLink}>
						<span></span>
						{call_to_action}
					</Link>
					<button onClick={copyEmailToClipboard} className='ml-10'>
						{isActive ? 'Copied!' : 'Get email'}
					</button>
				</div>
			</div>
			<Canvas>
				<OrbitControls />
				<ambientLight intensity={0.1} />
				<directionalLight color='green' position={[1, 2, 5]} />
				<Suspense fallback={null}>
					<Globe />
				</Suspense>
			</Canvas>
		</div>
	)
}

export default Hero
