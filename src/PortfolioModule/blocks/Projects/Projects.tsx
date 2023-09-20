import { StoryblokComponent } from '@storyblok/react'
import { useState } from 'react'
import {
	ProjectStoryblok,
	ProjectsStoryblok,
	TechnologiesStoryblok
} from '@/types/component-types-sb'
import { TechEnum } from '@/Global/components/SvgProvider/SvgProvider'

type Props = {
	blok: ProjectsStoryblok
}
enum role {
	any = 'any',
	dev = 'developer',
	main = 'maintenance',
	sup = 'support'
}
enum work {
	any = 'any',
	commercial = 'commercial',
	side = 'side'
}

const Projects: React.FC<Props> = ({ blok }) => {
	let { projects } = blok
	const [isTechInputOpen, setTechInputOpen] = useState(false)
	const technologies: TechEnum[] = Object.values(TechEnum)
	const [roleFilter, setRoleFilter] = useState(role.any)
	const [techFilter, setTechFilter] = useState(new Set<TechEnum>())
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
	if (roleFilter !== role.any) {
		projects = projects.filter((proj: ProjectStoryblok) =>
			proj.role.includes(roleFilter)
		)
	}
	if (techFilter.size > 0) {
		projects = projects.filter((proj: ProjectStoryblok) =>
			proj.tech.some((tech: TechnologiesStoryblok) =>
				techFilter.has(tech.svg_type as TechEnum)
			)
		)
	}
	const labelStyles = 'flex justify-between p-1 m-0.5 text-center md:w-2/5'
	const selectStyles = 'border outline-0 w-1/2 mx-1 px-2 bg-background'
	return (
		<div className='relative w-3/4 max-w-4xl p-5 shadow-main shadow-font rounded-xl backdrop-blur-lg md:p-10'>
			<h2 className='absolute top-0 left-8 -translate-y-3/4 text-3xl'>
				{blok.headline}
			</h2>
			<div className='w-full flex flex-col mb-5 md:flex-row md:justify-around'>
				<label htmlFor='work' className={labelStyles}>
					Type:
					<select
						className={selectStyles}
						onChange={onRoleChange}
						value={roleFilter}
						name='work'
						id='work'
					>
						<option value={work.any}>{work.any}</option>
						<option value={work.commercial}>{work.commercial}</option>
						<option value={work.side}>{work.side}</option>
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
			<div className='relative border-2 p-1 m-0.5 bg-background text-center'>
				<button className='w-full' onClick={toggleTechInput}>
					{isTechInputOpen ? (
						'Close'
					) : (
						<p>
							Tech Stack:{' '}
							{techFilter.size > 0
								? techFilter.size === 1
									? techFilter.values().next().value
									: techFilter.size
								: 'all'}
						</p>
					)}
				</button>
				{isTechInputOpen && (
					<fieldset className='absolute top-[105%] left-0 right-0 bg-background text-center p-3 grid grid-cols-1 sm:text-left sm:gap-2 sm:grid-cols-3 lg:grid-cols-5'>
						{technologies.map((tech: TechEnum) => {
							return (
								<label key={`tech-${tech}`} htmlFor={tech} className='m-1'>
									<input
										className='mr-2'
										type='checkbox'
										name='technology'
										value={tech}
										id={tech}
										checked={techFilter.has(tech)}
										onChange={onTechChange}
									/>
									{tech}
								</label>
							)
						})}
					</fieldset>
				)}
			</div>
			{projects.map((project: any) => (
				<StoryblokComponent blok={project} key={project._uid} />
			))}
		</div>
	)
}

export default Projects
