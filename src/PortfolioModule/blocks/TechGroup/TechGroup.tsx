import { TechGroupStoryblok } from '@/types/component-types-sb'
import SvgProvider, {
	SvgType
} from '@/Global/components/SvgProvider/SvgProvider'

type Props = {
	blok: TechGroupStoryblok
}

const TechGroup: React.FC<Props> = ({ blok }) => {
	const { advanced_tech, basic_tech } = blok
	const advTech = advanced_tech[0].techs
	const basicTech = basic_tech[0].techs
	const mainSVG = {
		width: 55,
		height: 55,
		color: 'hsl(120, 100%, 50%)'
	}
	const secSVG = {
		width: 50,
		height: 50,
		color: 'hsla(120, 100%, 50%, .4)'
	}
	return (
		<div className='w-full p-2 border-y border-y-font mb-3'>
			<h2>{blok.headline}</h2>
			<div className='w-full flex'>
				{advTech.length > 0 &&
					advTech.map((svg: SvgType) => (
						<SvgProvider
							type={svg}
							options={mainSVG}
							key={`${advanced_tech[0]._uid}-${svg}`}
						/>
					))}
			</div>
			<hr className='m-3 border-font' />
			<div className='w-full flex'>
				{basicTech.length > 0 &&
					basicTech.map((svg: SvgType) => (
						<SvgProvider
							type={svg}
							options={secSVG}
							key={`${basic_tech[0]._uid}-${svg}`}
						/>
					))}
			</div>
		</div>
	)
}

export default TechGroup
