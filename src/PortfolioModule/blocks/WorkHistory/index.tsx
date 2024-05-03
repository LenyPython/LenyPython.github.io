'use client'
import { StoryblokComponent } from '@storyblok/react'
import { WorkHistoryStoryblok } from '@/types/component-types-sb'

type Props = {
	blok: WorkHistoryStoryblok
}
const WorkHistory: React.FC<Props> = ({ blok }) => {
	return (
		<div className='relative flex flex-col items-center pt-4 w-3/4 max-w-4xl'>
			<h2 className='absolute top-0 left-8 -translate-y-3/4 text-3xl md:text-5xl lg:translate-y-3/4 lg:rotate-45'>
				{blok.headline}
			</h2>
			{blok.experience?.map((component: any, i: number) => (
				<StoryblokComponent
					key={component._uid}
					blok={component}
					odd={(i & 1) === 1}
				/>
			))}
		</div>
	)
}

export default WorkHistory
