import SvgProvider from '@/Global/components/SvgProvider/SvgProvider'
import { technologiesEnum } from '../ProjectsFilters'

type Props = {
	tech: technologiesEnum
	checked: boolean
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const StyledCheckbox: React.FC<Props> = ({ tech, onChange, checked }) => {
	const SvgOptions = {
		width: 25,
		height: 25,
		color: checked ? 'hsl(120, 100%, 50%)' : 'hsla(120, 100%, 50%,.6)'
	}
	return (
		<div className='cursor-pointer hover:border-x border-font'>
			<label
				htmlFor={tech}
				className={`flex justify-center items-center gap-1 w-full text-center uppercase cursor-pointer${
					checked ? ' border-x border-font ' : ' opacity-60'
				}`}
			>
				<SvgProvider type={tech} options={SvgOptions} />
				<input
					className='hidden'
					type='checkbox'
					name='technology'
					value={tech}
					id={tech}
					checked={checked}
					onChange={onChange}
				/>
				{tech}
			</label>
		</div>
	)
}

export default StyledCheckbox
