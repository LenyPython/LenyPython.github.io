import { StoryblokComponent } from '@storyblok/react'
import React from 'react'

type Props = {
	blok: any
}
const WorkHistory: React.FC<Props> = ({ blok }) => {
	console.log(blok)

	return (
		<div className='relative flex flex-col items-center w-3/4 max-w-4xl p-5 shadow-main shadow-font rounded-xl backdrop-blur-lg'>
			<h2 className='absolute top-0 left-8 -translate-y-3/4 text-3xl'>
				{blok.headline}
			</h2>
			{
				// define type later
			}
			{blok.experience.map((component: any) => (
				<StoryblokComponent key={component._uid} blok={component} />
			))}
		</div>
	)
}

export default WorkHistory
