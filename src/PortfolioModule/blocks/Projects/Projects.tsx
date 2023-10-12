'use client'
import { StoryblokComponent } from '@storyblok/react'
import { useState } from 'react'
import { ProjectStoryblok, ProjectsStoryblok } from '@/types/component-types-sb'
import { TechEnum } from '@/Global/components/SvgProvider/SvgProvider'
import ProjectFilters, {
	projType,
	role
} from '@/PortfolioModule/components/ProjectsFilters'
import { scrollToID } from '@/PortfolioModule/components/Navigation/Navigation'

type Props = {
	blok: ProjectsStoryblok
}

const Projects: React.FC<Props> = ({ blok }) => {
	let { projects } = blok
	const [roleFilter, setRoleFilter] = useState(role.any)
	const [techFilter, setTechFilter] = useState(new Set<TechEnum>())
	const [typeFilter, setTypeFilter] = useState(projType.any)
	const onRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setRoleFilter(e.target.value as role)
		scrollToID('#projects')
		window.dispatchEvent(new Event('resize'))
	}
	const onTechChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTechFilter(set => {
			if (e.target.checked) set.add(e.target.value as TechEnum)
			else set.delete(e.target.value as TechEnum)
			return new Set(set)
		})
		scrollToID('#projects')
		window.dispatchEvent(new Event('resize'))
	}
	const clearTechFilters = () => {
		setTechFilter(new Set<TechEnum>())
		window.dispatchEvent(new Event('resize'))
	}
	const onTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setTypeFilter(e.target.value as projType)
		scrollToID('#projects')
		window.dispatchEvent(new Event('resize'))
	}
	if (roleFilter !== role.any) {
		projects = projects.filter((proj: ProjectStoryblok) =>
			proj.role.includes(roleFilter)
		)
	}

	if (typeFilter !== projType.any) {
		projects = projects.filter(
			(proj: ProjectStoryblok) => proj.type === typeFilter
		)
	}
	if (techFilter.size > 0) {
		projects = projects.filter((proj: ProjectStoryblok) =>
			proj.tech[0]?.techs?.some((tech: any) => {
				return techFilter.has(tech)
			})
		)
	}
	return (
		<div className='relative flex flex-col items-center w-3/4 max-w-4xl'>
			<h2 className='absolute top-0 left-8 -translate-y-3/4 text-3xl z-20 md:text-5xl'>
				{blok.headline}
			</h2>
			<ProjectFilters
				handlers={{
					onRoleChange,
					onTechChange,
					onTypeChange,
					clearTechFilters
				}}
				states={{ techFilter, roleFilter, typeFilter }}
			/>
			<div className='w-full h-full px-5 shadow-main shadow-font rounded-xl backdrop-blur-lg overflow-hidden md:p-10'>
				{projects.length === 0 ? (
					<p className='text-center m-4'>No results</p>
				) : (
					projects.map((project: ProjectStoryblok) => (
						<StoryblokComponent blok={project} key={project._uid} />
					))
				)}
			</div>
		</div>
	)
}

export default Projects
