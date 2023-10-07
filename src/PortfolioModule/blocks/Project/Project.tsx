import Link from 'next/link'
import { ProjectStoryblok } from '@/types/component-types-sb'
import { renderRichText } from '@storyblok/react'
import RichText from '@/Global/components/RIchText/RichText'
import SvgProvider, {
	SvgType
} from '@/Global/components/SvgProvider/SvgProvider'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

type Props = {
	blok: ProjectStoryblok
}

const Project: React.FC<Props> = ({ blok }) => {
	const { project_name, role, tech, description, live_page } = blok
	const { techs } = tech[0]
	const parentRef = useRef(null)
	const tlRef = useRef<GSAPTimeline>()
	const SvgOptions = {
		width: 25,
		height: 25,
		color: 'hsl(120, 100%, 50%)'
	}
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
			gsap.utils.toArray('.richText > p').forEach((para: any) => {
				tlRef.current!.from(para, { x: 100, opacity: 0 })
			})
			gsap.from('h2', {
				x: 100,
				opacity: 0,
				scrollTrigger: {
					trigger: 'h2',
					start: 'top 85%',
					toggleActions: 'restart pause resume reverse'
				}
			})
			gsap.from('h3', {
				x: 100,
				opacity: 0,
				scrollTrigger: {
					trigger: 'h3',
					start: 'top 85%',
					toggleActions: 'restart pause resume reverse'
				}
			})
			gsap.from('a', {
				y: 100,
				opacity: 0,
				scrollTrigger: {
					trigger: 'a',
					start: 'top 85%',
					toggleActions: 'restart pause resume reverse'
				}
			})
		}, parentRef.current)
		return () => ctx.revert()
	}, [])
	return (
		<div ref={parentRef} className='my-4 flex flex-col gap-5'>
			<div>
				<h2 className='text-4xl font-bold tracking-wider underline'>
					{project_name}
				</h2>
				<h3 className='text-md font-bold'>{role.join(', ')}</h3>
			</div>
			<RichText className='richText' html={renderRichText(description)} />
			{techs.length > 0 && (
				<div>
					<h3 className='text-xl font-bold'>Tech</h3>
					<div className='flex flex-wrap items-center'>
						{techs.map((svg: SvgType) => (
							<SvgProvider
								key={`${project_name}-${tech[0]._uid}-${svg}`}
								type={svg}
								options={SvgOptions}
							/>
						))}
					</div>
				</div>
			)}
			{live_page && (
				<Link
					href={live_page.url}
					className='inline-block text-xl text-center p-2 font-bold border border-font duration-500 hover:shadow-main hover:shadow-font'
					target={live_page.target}
				>
					Live page
				</Link>
			)}
		</div>
	)
}

export default Project
