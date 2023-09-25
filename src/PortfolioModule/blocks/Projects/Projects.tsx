import { StoryblokComponent } from '@storyblok/react'
import { useState } from 'react'
import { ProjectStoryblok, ProjectsStoryblok } from '@/types/component-types-sb'
import {
	DevEnum,
	LangEnum,
	TechEnum
} from '@/Global/components/SvgProvider/SvgProvider'

type Props = {
	blok: ProjectsStoryblok
}

type technologiesEnum = LangEnum & DevEnum & TechEnum

enum role {
	any = 'any',
	dev = 'developer',
	main = 'maintenance',
	sup = 'support'
}
enum projType {
	any = 'any',
	commercial = 'commercial',
	side = 'side'
}

const Projects: React.FC<Props> = ({ blok }) => {
	let { projects } = blok
	const [isTechInputOpen, setTechInputOpen] = useState(false)
	const technologies: technologiesEnum[] = [
		...Object.values(LangEnum),
		...Object.values(DevEnum),
		...Object.values(TechEnum)
	]
	const [roleFilter, setRoleFilter] = useState(role.any)
	const [techFilter, setTechFilter] = useState(new Set<TechEnum>())
	const [typeFilter, setTypeFilter] = useState(projType.any)
	const toggleTechInput = () => setTechInputOpen(prev => !prev)
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
	const labelStyles = 'flex justify-between p-1 m-0.5 text-center md:w-2/5'
	const selectStyles =
		'border border-font outline-0 w-1/2 mx-1 px-2 bg-background'
	return (
		<div className='relative flex flex-col items-center  w-3/4 max-w-4xl'>
			<h2 className='absolute top-0 left-8 -translate-y-3/4 text-3xl z-10'>
				{blok.headline}
			</h2>
			<div className='sticky top-0 flex flex-col mb-5 px-5 py-2 w-full shadow-main shadow-font rounded-xl backdrop-blur-lg md:top-16 md:px-10 z-10'>
				<div className='flex flex-col w-full md:flex-row md:items-center md:justify-around'>
					<label htmlFor='work' className={labelStyles}>
						Type:
						<select
							className={selectStyles}
							onChange={onTypeChange}
							value={typeFilter}
							name='work'
							id='work'
						>
							<option value={projType.any}>{projType.any}</option>
							<option value={projType.commercial}>{projType.commercial}</option>
							<option value={projType.side}>{projType.side}</option>
						</select>
					</label>
					<label htmlFor='role' className={labelStyles}>
						Role:
						<select
							className={selectStyles}
							onChange={onRoleChange}
							value={roleFilter}
							name='role'
							id='role'
						>
							{Object.values(role).map((role: string) => (
								<option value={role} key={`role-${role}`}>
									{role}
								</option>
							))}
						</select>
					</label>
				</div>
				<div className='relative w-full border-font border-2 py-1 bg-background text-center'>
					<button onClick={toggleTechInput}>
						{isTechInputOpen ? (
							'Search'
						) : (
							<>
								Tech Stack:{' '}
								{techFilter.size > 0
									? techFilter.size === 1
										? techFilter.values().next().value
										: techFilter.size
									: 'all'}
							</>
						)}
					</button>
					{isTechInputOpen && (
						<fieldset className='absolute top-[105%] left-0 right-0 bg-background text-center p-3 grid grid-cols-1 sm:text-left sm:gap-2 sm:grid-cols-3 lg:grid-cols-5'>
							{technologies.map((tech: technologiesEnum) => {
								return (
									<label key={`tech-${tech}`} htmlFor={tech} className='m-1'>
										<input
											className='mr-2'
											type='checkbox'
											name='technology'
											value={tech}
											id={tech}
											checked={techFilter.has(tech as technologiesEnum)}
											onChange={onTechChange}
										/>
										{tech}
									</label>
								)
							})}
						</fieldset>
					)}
				</div>
			</div>
			<div className='w-full px-5 shadow-main shadow-font rounded-xl backdrop-blur-lg md:p-10'>
				{projects.map((project: any) => (
					<StoryblokComponent blok={project} key={project._uid} />
				))}
			</div>
		</div>
	)
}

export default Projects
