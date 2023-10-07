import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react'
import AlgoAndServices from '@/PortfolioModule/components/AlgoAndServices'
import { SocialsStoryblok } from '@/types/component-types-sb'

type Props = {
	blok: SocialsStoryblok
}

const Socials: React.FC<Props> = ({ blok }) => {
	const parentRef = useRef(null)
	useLayoutEffect(() => {
		if (!parentRef.current) return
		let ctx = gsap.context(() => {
			gsap.from('.cwContainer', {
				x: 200,
				opacity: 0,
				scrollTrigger: {
					trigger: '.cwContainer',
					start: '35% 75%',
					toggleActions: 'restart none none reverse'
				}
			})
			gsap.from('.lcContainer', {
				x: -200,
				opacity: 0,
				scrollTrigger: {
					trigger: '.lcContainer',
					start: 'start 85%',
					toggleActions: 'restart none none reverse'
				}
			})
			gsap.from('.otherContainer', {
				y: 200,
				opacity: 0,
				scrollTrigger: {
					trigger: '.otherContainer',
					start: '35% 75%',
					toggleActions: 'restart none none reverse'
				}
			})
		}, parentRef.current)
		return () => ctx.revert()
	}, [])
	return (
		<div
			ref={parentRef}
			className='relative flex flex-col justify-evenly items-center w-full max-w-5xl p-5'
		>
			<h2 className='absolute top-0 left-8 -translate-y-3/4 text-3xl'>
				{blok.headline}
			</h2>
			<div className='overflow-hidden'>
				<AlgoAndServices />
			</div>
		</div>
	)
}

export default Socials
