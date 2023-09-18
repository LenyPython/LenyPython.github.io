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
	const links = config.filter((item: SectionStoryblok) => item.in_navigation)
	const svgConfig = {
		width: 35,
		height: 35,
		color: 'hsla(120,100%,50%, .8)'
	}
	return (
		<div className='fixed top-0 left-0 right-0 z-10 flex justify-center items-center p-3 bg-background'>
			<div className='flex justify-between max-w-5xl w-4/5'>
				<Link href='/'>
					<h2 className='text-3xl pr-3'>LOGO</h2>
				</Link>
				<div className='flex items-center'>
					{links.map((item: SectionStoryblok) => (
						<Link
							key={`link:${item._uid}`}
							href={`/#${item.ID}`}
							className='pr-3 uppercase'
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
