import { useState } from 'react'
import { renderRichText } from '@storyblok/react'
import Link from 'next/link'

import RichText from '@/Global/components/RIchText/RichText'

import styles from './hero.module.scss'
import { HeroStoryblok } from '@/types/component-types-sb'
// find a way to import glb files nextjs
/* import dynamic from 'next/dynamic'
const Avatar = dynamic(
	() => import('@/PortfolioModule/components/Avatar').then(mod => mod.Avatar),
	{ ssr: false }
) */

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
		<div className='w-3/4 max-w-5xl justify-self-start mt-5'>
			<div className='flex flex-col relative px-14 py-12 justify-center rounded-lg backdrop-blur-lg'>
				<div>
					<h2 className='text-6xl font-bold mb-10'>{headline}</h2>
					<RichText html={renderRichText(rich_text)} />
				</div>
				<div className='flex items-center justify-end border absolute bottom-0 right-0 bg-secondarybg px-6 py-3 rounded-lg translate-x-1/3 -rotate-45'>
					<Link
						href={`#${cta_link.anchor}`}
						className='inline-block relative py-1 px-9 bg-background uppercase text-center no-underline text-xl leading-9 font-bold tracking-wide shadow-btnBlack hover:shadow-btnGreen duration-700 hover:rotate-45 hover:scale-125'
					>
						<span></span>
						{call_to_action}
					</Link>
					<button onClick={copyEmailToClipboard} className='ml-10'>
						{isActive ? 'Copied!' : 'Get email'}
					</button>
				</div>
			</div>
		</div>
	)
}

export default Hero
