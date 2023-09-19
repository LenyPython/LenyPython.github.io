import RichText from '@/Global/components/RIchText/RichText'
import { renderRichText } from '@storyblok/react'

type Props = {
	blok: any
	odd: boolean
}

const WorkExperience: React.FC<Props> = ({ blok, odd }) => {
	const { company, description, start, end, role } = blok
	let experienceStyle =
		'relative w-full border-l-2 border-t-2 p-6 backdrop-blur-lg lg:w-1/2'
	if (odd) experienceStyle += ' lg:-translate-x-1/2'
	else experienceStyle += ' lg:translate-x-1/2'

	return (
		<div className={experienceStyle}>
			{odd ? (
				<>
					<span className='absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-background border-2 rounded-full lg:left-full'></span>
					<span className='absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-font rounded-full'></span>
				</>
			) : (
				<span className='absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-font rounded-full'></span>
			)}
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
