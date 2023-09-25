import { StoryblokComponent } from '@storyblok/react'
import { useState } from 'react'
import { ProjectStoryblok, ProjectsStoryblok } from '@/types/component-types-sb'
import {
	DevEnum,
	LangEnum,
	TechEnum
} from '@/Global/components/SvgProvider/SvgProvider'
import ProjectFilters, {
	projType,
	role,
	technologiesEnum
} from '@/PortfolioModule/components/ProjectsFilters'

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
	}
	const onTechChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTechFilter(set => {
			if (e.target.checked) set.add(e.target.value as TechEnum)
			else set.delete(e.target.value as TechEnum)
			return new Set(set)
		})
	}
	const onTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setTypeFilter(e.target.value as projType)
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
			proj.tech[0]?.techs?.some((tech: technologiesEnum) => {
				return techFilter.has(tech as technologiesEnum)
			})
		)
	}
	return (
		<div className='relative flex flex-col items-center  w-3/4 max-w-4xl'>
			<h2 className='absolute top-0 left-8 -translate-y-3/4 text-3xl z-10'>
				{blok.headline}
			</h2>
			<ProjectFilters
				handlers={{ onRoleChange, onTechChange, onTypeChange }}
				states={{ techFilter, roleFilter, typeFilter }}
			/>
			<div className='w-full px-5 shadow-main shadow-font rounded-xl backdrop-blur-lg md:p-10'>
				{projects.map((project: any) => (
					<StoryblokComponent blok={project} key={project._uid} />
				))}
			</div>
		</div>
	)
}

export default Projects
