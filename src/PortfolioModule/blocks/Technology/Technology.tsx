'use client'
import { StoryblokComponent } from '@storyblok/react'
import { TechnologyStoryblok } from '@/types/component-types-sb'

type Props = {
	blok: TechnologyStoryblok
}

const Technology: React.FC<Props> = ({ blok }) => {
	return (
		<div className='relative flex flex-col items-center w-3/4 max-w-4xl p-7 pt-10 shadow-main shadow-font rounded-xl bg-black backdrop-blur-lg sm:p-10'>
			<h2 className='absolute top-0 left-8 -translate-y-3/4 text-3xl md:text-5xl'>
				{blok.headline}
			</h2>
			{blok.tech_groups.map((component: any) => (
				<StoryblokComponent blok={component} key={component._uid} />
			))}
		</div>
	)
}

export default Technology
