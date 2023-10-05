import {
	LangEnum,
	DevEnum,
	TechEnum
} from '@/Global/components/SvgProvider/SvgProvider'
import { useState } from 'react'
import StyledCheckbox from '../StyledCheckbox'

export type technologiesEnum = LangEnum | DevEnum | TechEnum

export enum role {
	any = 'any',
	dev = 'developer',
	main = 'maintenance',
	sup = 'support'
}

export enum projType {
	any = 'any',
	commercial = 'commercial',
	side = 'side'
}

type Props = {
	handlers: {
		onRoleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
		onTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
		onTechChange: (e: React.ChangeEvent<HTMLInputElement>) => void
		clearTechFilters: () => void
	}
	states: {
		roleFilter: role
		typeFilter: projType
		techFilter: Set<technologiesEnum>
	}
}
const ProjectFilters: React.FC<Props> = ({ handlers, states }) => {
	const [isTechInputOpen, setTechInputOpen] = useState(false)
	const toggleTechInput = () => setTechInputOpen(prev => !prev)
	const technologies: technologiesEnum[] = [
		...Object.values(LangEnum),
		...Object.values(DevEnum),
		...Object.values(TechEnum)
	]
	const handleClearTechFilter = () => {
		handlers.clearTechFilters()
		if (states.techFilter.size === 0) setTechInputOpen(false)
	}
	const labelStyles = 'flex justify-between p-1 m-0.5 text-center md:w-2/5'
	const selectStyles =
		'border border-font outline-0 w-1/2 mx-1 px-2 bg-background'
	return (
		<div className='sticky top-0 flex flex-col mb-5 px-5 py-2 w-full shadow-main shadow-font rounded-xl backdrop-blur-lg md:top-20 md:px-10 z-10'>
			<div className='flex flex-col w-full md:flex-row md:items-center md:justify-around'>
				<label htmlFor='work' className={labelStyles}>
					Type:
					<select
						className={selectStyles}
						onChange={handlers.onTypeChange}
						value={states.typeFilter}
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
						onChange={handlers.onRoleChange}
						value={states.roleFilter}
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
			<div className='relative'>
				<button
					className='w-full border-font border-2 py-1 bg-background text-center'
					onClick={toggleTechInput}
				>
					{isTechInputOpen ? (
						'Search'
					) : (
						<>
							Tech Stack:{' '}
							{states.techFilter.size > 0
								? states.techFilter.size === 1
									? states.techFilter.values().next().value
									: states.techFilter.size
								: 'all'}
						</>
					)}
				</button>
				{isTechInputOpen && (
					<>
						<button
							className='w-full border-font border-2 py-1 mt-2 bg-background text-center'
							onClick={handleClearTechFilter}
						>
							{states.techFilter.size === 0 ? 'Close' : 'Clear'}
						</button>
						<fieldset className='absolute top-[105%] left-0 right-0 max-h-[70vh] overflow-y-auto bg-background p-3 grid grid-cols-1 sm:text-left sm:gap-2 sm:grid-cols-3 lg:grid-cols-5'>
							{technologies.map((tech: technologiesEnum) => {
								return (
									<StyledCheckbox
										key={`tech-${tech}`}
										tech={tech}
										checked={states.techFilter.has(tech)}
										onChange={handlers.onTechChange}
									/>
								)
							})}
						</fieldset>
					</>
				)}
			</div>
		</div>
	)
}

export default ProjectFilters
