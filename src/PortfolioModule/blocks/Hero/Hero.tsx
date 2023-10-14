'use client'
import { useLayoutEffect, useRef, useState } from 'react'
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
	const {
		headline,
		rich_text,
		cta_link,
		call_to_action,
		secondary_cta,
		techskills,
		softskills
	} = blok

	const [isMobile, setIsMobile] = useState(false)
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
	const parentRef = useRef(null)
	const tlRef = useRef(gsap.timeline())
	const checkWindowSize = () => {
		if (window.matchMedia('only screen and (max-width: 640px)').matches)
			setIsMobile(true)
		else setIsMobile(false)
	}
	useLayoutEffect(() => {
		window.addEventListener('resize', checkWindowSize)
		checkWindowSize()
		if (!parentRef.current) return
		let ctx = gsap.context(() => {
			const tl = tlRef.current
			strings.forEach(str => {
				tl.to('.headline', {
					duration: 0.4,
					text: str
				})
			})
			gsap.utils.toArray('.window-3 > p').forEach((para: any) => {
				tl.fromTo(
					para,
					{
						text: ''
					},
					{
						duration: 0.6,
						text: para.innerText
					}
				)
			})
			tl.from('.call-to-action', {
				duration: 1,
				x: -300,
				y: 100,
				opacity: 0
			})
			if (!window.matchMedia('only screen and (max-width: 640px)').matches) {
				tl.from('.nonmobile-container', { height: 0 }).from('.window-1', {
					opacity: 0
				})
				gsap.utils.toArray('.window-1 p').forEach((para: any) => {
					tl.fromTo(
						para,
						{
							text: ''
						},
						{
							duration: 0.3,
							text: para.innerText
						}
					)
				})
				tl.from('.window-2', {
					opacity: 0
				})
				gsap.utils.toArray('.window-2 p').forEach((para: any) => {
					tl.fromTo(
						para,
						{
							text: ''
						},
						{
							duration: 0.3,
							text: para.innerText
						}
					)
				})
			}
		}, parentRef.current)
		return () => {
			ctx.revert()
			window.removeEventListener('resize', checkWindowSize)
		}
	}, [])
	const handleLinkClick = (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
		id: string
	) => {
		e.preventDefault()
		scrollToID(id)
	}
	return (
		<div ref={parentRef} className='max-w-3xl mx-5 md:w-3/4 sm:self-center'>
			<div className='flex flex-col gap-3 relative pb-20 justify-center sm:pb-28'>
				{!isMobile && (
					<div className='nonmobile-container flex justify-end gap-3 h-40 text-sm text-justify sm:text-base'>
						<div className='grow w-full flex justify-center items-center'>
							<span className='inline-block border-y-8 border-font rounded-full w-8 h-8  animate-spin'></span>
						</div>
						<div className='window-1 grow-[2.5] w-full p-3 rounded-lg backdrop-blur-lg sm:p-5'>
							<RichText html={renderRichText(techskills)} />
							<span className='inline-block bg-font rounded-full w-2 h-0.5 animate-pulse'></span>
						</div>
						<div className='window-2 grow-[1.5] w-full p-3 rounded-lg backdrop-blur-lg sm:p-5'>
							<RichText html={renderRichText(softskills)} />
							<span className='inline-block bg-font rounded-full w-2 h-0.5 animate-pulse'></span>
						</div>
					</div>
				)}
				<div>
					<h2 className='headline text-xl font-bold tracking-wider p-3 rounded-lg backdrop-blur-lg max-w-lg sm:px-7 sm:text-3xl'>
						11010 001 10101101
					</h2>
				</div>
				<RichText
					className='window-3 text-sm text-justify p-3 rounded-lg backdrop-blur-lg max-w-lg sm:p-7 sm:text-base'
					html={renderRichText(rich_text)}
				/>
				<div className='call-to-action z-10 flex items-center justify-end border-2 border-font bg-secondarybg px-8 py-4 rounded-lg absolute -bottom-8 right-1/2 scale-75 translate-x-1/2 -rotate-12 sm:bottom-5 sm:right-1/4 md:scale-95'>
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
						{secondary_cta}
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Hero
