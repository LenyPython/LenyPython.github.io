import Link from 'next/link'
import { SectionStoryblok } from '@/types/component-types-sb'
import SvgProvider, {
	DevEnum,
	SocialEnum
} from '@/Global/components/SvgProvider/SvgProvider'

type Props = {
	config: SectionStoryblok[]
}

const Navigation: React.FC<Props> = ({ config }) => {
	return (
		<>
			<TopPanel config={config} />
		</>
	)
}
const TopPanel: React.FC<Props> = ({ config }) => {
	const svgConfig = {
		width: 35,
		height: 35,
		color: 'hsla(120,100%,50%, .8)'
	}
	return (
		<div className='fixed top-0 left-0 right-0 z-10 flex justify-center items-center p-3 bg-background'>
			<div className='flex justify-between max-w-5xl w-4/5'>
				<h2 className='text-3xl'>LOGO</h2>
				<div className='flex'>
					{config.map((item: any) => (
						<Link
							key={`link:${item._uid}`}
							href={`/#${item.ID}`}
							className='px-4'
						>
							{item.ID}
						</Link>
					))}
					<SvgProvider type={DevEnum.github} options={svgConfig} />
					<SvgProvider type={SocialEnum.linkedin} options={svgConfig} />
				</div>
			</div>
		</div>
	)
}

export default Navigation
