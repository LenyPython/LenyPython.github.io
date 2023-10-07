import RichText from '@/Global/components/RIchText/RichText'
import { renderRichText } from '@storyblok/react'
import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react'

type Props = {
	blok: any
	odd: boolean
}

const WorkExperience: React.FC<Props> = ({ blok, odd }) => {
	const { company, description, start, end, role } = blok
	const parentRef = useRef(null)
	const tlRef = useRef<GSAPTimeline>()
	useLayoutEffect(() => {
		if (!parentRef.current) return
		let ctx = gsap.context(() => {
			tlRef.current = gsap.timeline({
				scrollTrigger: {
					trigger: '.richText',
					start: 'top 85%',
					toggleActions: 'restart pause resume reverse'
				}
			})
			gsap.from('.company', {
				x: 100,
				opacity: 0,
				scrollTrigger: {
					start: 'top 80%',
					trigger: '.company',
					toggleActions: 'restart pause resume reverse'
				}
			})
			gsap.from('.role', {
				x: 100,
				opacity: 0,
				scrollTrigger: {
					start: 'top 80%',
					trigger: '.role',
					toggleActions: 'restart pause resume reverse'
				}
			})
			gsap.from('.date', {
				x: 100,
				opacity: 0,
				scrollTrigger: {
					start: 'top 80%',
					trigger: '.date',
					toggleActions: 'restart pause resume reverse'
				}
			})
			gsap.utils.toArray('.richText > p').forEach((para: any) => {
				tlRef.current!.from(para, { x: 100, opacity: 0 })
			})
		}, parentRef.current)
		return () => ctx.revert()
	}, [])

	let experienceStyle =
		'relative w-full border-font border-l-2 border-t-2 p-6 backdrop-blur-lg overflow-hidden lg:w-1/2'
	if (odd) experienceStyle += ' lg:-translate-x-1/2'
	else experienceStyle += ' lg:translate-x-1/2'

	return (
		<div ref={parentRef} className={experienceStyle}>
			{odd ? (
				<>
					<span className='absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-background border-font border-2 rounded-full lg:left-full'></span>
					<span className='absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-font rounded-full'></span>
				</>
			) : (
				<span className='absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-font rounded-full'></span>
			)}
			<h3 className='company text-xl font-bold md:text-3xl'>{company}</h3>
			<h4 className='role text-md font-medium underline my-2 md:text-xl'>
				{role}
			</h4>
			<p className='date mb-2 font-bold'>
				{start} - {end}
			</p>
			<RichText className='richText' html={renderRichText(description)} />
		</div>
	)
}

export default WorkExperience
