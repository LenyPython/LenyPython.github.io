import RichText from '@/Global/components/RIchText/RichText'
import { renderRichText } from '@storyblok/react'

type Props = {
	blok: any
}

const WorkExperience: React.FC<Props> = ({ blok }) => {
	const { company, description, start, end, role } = blok

	return (
		<div className='relative w-full border-l-2 p-4'>
			<span className='absolute top-0 left-0 -translate-x-2 -translate-y-2 w-4 h-4 bg-font rounded-full'></span>
			<h3>{company}</h3>
			<h4>{role}</h4>
			<p>
				{start} - {end}
			</p>
			<RichText html={renderRichText(description)} />
		</div>
	)
}

export default WorkExperience
