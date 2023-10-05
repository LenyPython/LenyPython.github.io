import { useEffect, useRef, useState } from 'react'
import { renderRichText } from '@storyblok/react'
import Link from 'next/link'
import gsap from 'gsap'

import RichText from '@/Global/components/RIchText/RichText'

import { HeroStoryblok } from '@/types/component-types-sb'
import { scrollToID } from '@/PortfolioModule/components/Navigation/Navigation'
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
	const { headline, rich_text, cta_link, call_to_action } = blok
	const headlineRef = useRef(null)
	const ctaRef = useRef(null)
	useEffect(() => {
		if (!headlineRef.current) return
		const tl = gsap.timeline()
		tl.to(headlineRef.current, {
			delay: 1,
			duration: 2,
			text: headline
		})
		if (!ctaRef.current) return
		tl.from(ctaRef.current, {
			duration: 2,
			y: 100,
			opacity: 0
		})
	})
	const handleLinkClick = (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
		id: string
	) => {
		e.preventDefault()
		scrollToID(id)
	}
	return (
		<div className='max-w-2xl mx-5 md:w-3/4 '>
			<div className='flex flex-col relative p-7 pb-20 md:px-14 md:pt-10 justify-center rounded-lg backdrop-blur-lg'>
				<div>
					<h2
						ref={headlineRef}
						className='text-2xl font-bold mb-10 max-w-2xl sm:text-5xl'
					>
						11010001 10101101
					</h2>
					<RichText
						delay={2}
						className='text-justify'
						html={renderRichText(rich_text)}
					/>
				</div>
				<div
					ref={ctaRef}
					className='flex items-center justify-end border-2 border-font bg-secondarybg px-8 py-4 rounded-lg absolute -bottom-8 right-1/2 scale-75 translate-x-1/2 -rotate-12 md:-bottom-5 md:right-1/4 md:scale-95'
				>
					<Link
						onClick={e => handleLinkClick(e, '#contact')}
						href={`#${cta_link.anchor}`}
						className='inline-block relative py-1 px-9 bg-background uppercase text-center no-underline text-xl leading-9 font-bold tracking-wide shadow-btnBlack hover:shadow-btnGreen duration-700 hover:rotate-45 hover:scale-125'
					>
						{call_to_action}
					</Link>
					<Link
						onClick={e => handleLinkClick(e, '#projects')}
						href={`#projects`}
						className='ml-14 text-xl'
					>
						See work
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Hero
