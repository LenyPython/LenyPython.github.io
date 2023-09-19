import { StoryblokComponent } from '@storyblok/react'
import React from 'react'

type Props = {
	blok: any
}
const WorkHistory: React.FC<Props> = ({ blok }) => {
	return (
		<div className='relative flex flex-col items-center pt-4 w-3/4 max-w-4xl'>
			<h2 className='absolute top-0 left-8 -translate-y-3/4 text-3xl lg:text-4xl lg:translate-y-3/4 lg:rotate-45'>
				{blok.headline}
			</h2>
			{
				// define type later
			}
			{blok.experience.map((component: any, i: number) => (
				<StoryblokComponent key={component._uid} blok={component} odd={i % 2} />
			))}
		</div>
	)
}

export default WorkHistory
