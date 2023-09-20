import AlgoAndServices from '@/PortfolioModule/components/AlgoAndServices'
import { SocialsStoryblok } from '@/types/component-types-sb'

type Props = {
	blok: SocialsStoryblok
}

const Socials: React.FC<Props> = ({ blok }) => {
	return (
		<div className='relative flex flex-col justify-evenly items-center w-full max-w-5xl p-5'>
			<h2 className='absolute top-0 left-8 -translate-y-3/4 text-3xl'>
				{blok.headline}
			</h2>
			<AlgoAndServices />
		</div>
	)
}

export default Socials
