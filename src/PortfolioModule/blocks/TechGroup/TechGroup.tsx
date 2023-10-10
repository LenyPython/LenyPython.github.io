import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react'
import { TechGroupStoryblok } from '@/types/component-types-sb'
import SvgProvider, {
	SvgType
} from '@/Global/components/SvgProvider/SvgProvider'

type Props = {
	blok: TechGroupStoryblok
}

const TechGroup: React.FC<Props> = ({ blok }) => {
	const { advanced_tech, basic_tech } = blok
	const advTech = advanced_tech[0].techs
	const basicTech = basic_tech[0].techs
	const parentRef = useRef(null)
	const tlRef = useRef<GSAPTimeline>()
	useLayoutEffect(() => {
		if (!parentRef.current) return
		tlRef.current = gsap.timeline({
			scrollTrigger: {
				start: 'start-=65px 85%',
				trigger: parentRef.current,
				toggleActions: 'restart none none reset'
			}
		})
		let ctx = gsap.context(() => {
			const tl = tlRef.current as GSAPTimeline
			tl.from(parentRef.current, {
				y: 50,
				opacity: 0
			})
			gsap.utils.toArray('.advanced > svg').forEach((svg: any) => {
				tl.from(svg, { y: 25, opacity: 0, duration: 0.2 })
			})
			gsap.utils.toArray('.basic > svg').forEach((svg: any) => {
				tl.from(svg, { y: 25, opacity: 0, duration: 0.2 })
			})
		}, parentRef.current)
		return () => ctx.revert()
	}, [])
	const mainSVG = {
		width: 55,
		height: 55,
		color: 'hsl(120, 100%, 50%)'
	}
	const secSVG = {
		width: 50,
		height: 50,
		color: 'hsla(120, 100%, 50%, .4)'
	}
	return (
		<div
			ref={parentRef}
			className='relative w-full p-2 border-y border-font mb-14'
		>
			<h2 className='absolute left-1 bottom-full underline text-xl'>
				{blok.headline}
			</h2>
			<div className='advanced w-full flex flex-wrap'>
				{advTech &&
					advTech.length > 0 &&
					advTech.map((svg: SvgType) => (
						<SvgProvider
							type={svg}
							options={mainSVG}
							key={`${advanced_tech[0]._uid}-${svg}`}
						/>
					))}
			</div>
			<hr className='m-4 border-font' />
			<div className='basic w-full flex flex-wrap'>
				{basicTech &&
					basicTech.length > 0 &&
					basicTech.map((svg: SvgType) => (
						<SvgProvider
							type={svg}
							options={secSVG}
							key={`${basic_tech[0]._uid}-${svg}`}
						/>
					))}
			</div>
		</div>
	)
}

export default TechGroup
