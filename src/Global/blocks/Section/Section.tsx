import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import { SectionStoryblok } from '@/types/component-types-sb'

type Props = {
	blok: SectionStoryblok
}

const Section: React.FC<Props> = ({ blok }) => {
	return (
		<section
			id={blok.ID}
			className='flex justify-center mb-16 min-h-[90vh]'
			{...storyblokEditable(blok)}
		>
			{blok.Blocks.map((component: any) => (
				<StoryblokComponent blok={component} key={component._uid} />
			))}
		</section>
	)
}

export default Section
