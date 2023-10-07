import { useLayoutEffect, useRef } from 'react'
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
	const getRandomString = (str?: string): string => {
		if (!str) return ''
		let result = ''
		for (let letter of str) {
			if (letter === ' ') result += ' '
			else result += Math.random() > 0.45 ? '1' : '0'
		}
		return result
	}
	const strings = [
		getRandomString(headline),
		getRandomString(headline),
		getRandomString(headline),
		getRandomString(headline),
		headline
	]
	const headlineRef = useRef(null)
	const richTextRef = useRef(null)
	const ctaRef = useRef(null)
	const tlRef = useRef(gsap.timeline())
	useLayoutEffect(() => {
		if (!headlineRef.current || !ctaRef.current || !richTextRef.current) return
		let ctx = gsap.context(() => {
			const tl = tlRef.current
			strings.forEach(str => {
				tl.to(headlineRef.current, {
					duration: 0.5,
					text: str
				})
			})
			gsap.utils.toArray('p').forEach((para: any) => {
				tl.fromTo(
					para,
					{
						text: ''
					},
					{
						duration: 1.5,
						text: para.innerText
					}
				)
			})
			tl.from(ctaRef.current, {
				delay: 0.2,
				duration: 2,
				x: -300,
				y: 100,
				opacity: 0
			})
		}, richTextRef.current)
		return () => ctx.revert()
	}, [])
	const handleLinkClick = (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
		id: string
	) => {
		e.preventDefault()
		scrollToID(id)
	}
	return (
		<div className='max-w-3xl mx-5 md:w-3/4 '>
			<div className='flex flex-col relative p-7 pb-20 md:px-14 md:pt-10 justify-center rounded-lg backdrop-blur-lg'>
				<div>
					<h2
						ref={headlineRef}
						className='text-xl font-bold tracking-wider mb-5 max-w-2xl sm:text-5xl'
					>
						11010001 10101101
					</h2>
					<div ref={richTextRef}>
						<RichText
							className='text-sm text-justify sm:text-base'
							html={renderRichText(rich_text)}
						/>
					</div>
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
