import Link from 'next/link'
import RichText from '@/Global/components/RIchText/RichText'
import { ProjectStoryblok } from '@/types/component-types-sb'
import { renderRichText } from '@storyblok/react'
import SvgProvider, {
	SvgType
} from '@/Global/components/SvgProvider/SvgProvider'
import { useRef } from 'react'
import useGsapFrom from '@/Global/hooks/useGsapFrom'

type Props = {
	blok: ProjectStoryblok
}

const Project: React.FC<Props> = ({ blok }) => {
	const { project_name, role, tech, description, live_page } = blok
	const { techs } = tech[0]
	const nameRef = useRef(null)
	const roleRef = useRef(null)
	useGsapFrom(nameRef, { x: 200, opacity: 0, scrollTrigger: nameRef.current })
	useGsapFrom(roleRef, {
		x: 250,
		opacity: 0,
		delay: 0.5,
		scrollTrigger: roleRef.current
	})
	const SvgOptions = {
		width: 25,
		height: 25,
		color: 'hsl(120, 100%, 50%)'
	}
	return (
		<div className='my-4 flex flex-col gap-5'>
			<div>
				<h2
					ref={nameRef}
					className='text-4xl font-bold tracking-wider underline'
				>
					{project_name}
				</h2>
				<h3 ref={roleRef} className='text-md font-bold'>
					{role.join(', ')}
				</h3>
			</div>
			<RichText delay={1} html={renderRichText(description)} />
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
