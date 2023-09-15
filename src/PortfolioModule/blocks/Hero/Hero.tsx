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
			<div className='border flex flex-col px-24 py-12 justify-center rounded-lg backdrop-blur-lg'>
				<div>
					<h2 className='text-6xl font-bold mb-10'>{headline}</h2>
					<RichText html={renderRichText(rich_text)} />
				</div>
				<div className='flex items-center justify-end mt-20'>
					<Link href={`#${cta_link.anchor}`} className={styles.ctaLink}>
						<span></span>
						{call_to_action}
					</Link>
					<button onClick={copyEmailToClipboard} className='ml-20'>
						{isActive ? 'Copied!' : 'Get email'}
					</button>
				</div>
			</div>
		</div>
	)
}

export default Hero
