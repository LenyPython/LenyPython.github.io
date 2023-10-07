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
		<div className='flex justify-center items-center cursor-pointer hover:border-x border-font'>
			<SvgProvider type={tech} options={SvgOptions} />
			<label
				htmlFor={tech}
				className={`text-center uppercase cursor-pointer m-1${
					checked ? '' : ' opacity-60'
				}`}
			>
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
