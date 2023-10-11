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
		if (window.innerWidth <= 640) setIsMobile(true)
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
					duration: 0.2,
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
						duration: 1,
						text: para.innerText
					}
				)
			})
			tl.from('.call-to-action', {
				delay: 0.2,
				duration: 2,
				x: -300,
				y: 100,
				opacity: 0
			})
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
				<div>
					<h2 className='headline text-xl font-bold tracking-wider p-3 rounded-lg backdrop-blur-lg max-w-2xl sm:px-7 sm:text-3xl'>
						11010001 10101101
					</h2>
				</div>
				{!isMobile && (
					<div className='flex justify-end gap-3 h-40 text-sm text-justify sm:text-base'>
						<div className='grow w-full'>
							<span className='inline-block bg-font border-font rounded-full w-2 h-1/4 animate-pulse'></span>
						</div>
						<div className='grow-[2.5]  p-3 rounded-lg backdrop-blur-lg'>
							<RichText
								className='window-1'
								html={renderRichText(techskills)}
							/>
						</div>
						<div className='grow-[1.5]  p-3 rounded-lg backdrop-blur-lg'>
							<RichText
								className='window-2'
								html={renderRichText(softskills)}
							/>
						</div>
					</div>
				)}
				<RichText
					className='window-3 text-sm text-justify p-3 rounded-lg backdrop-blur-lg sm:p-7 sm:text-base'
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
