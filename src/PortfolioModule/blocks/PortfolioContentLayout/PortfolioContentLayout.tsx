import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import Navigation from '@/PortfolioModule/components/Navigation/Navigation'
import MatrixBg from '@/PortfolioModule/components/MatrixBg/MatrixBg'
import { PortfolioContentLayoutStoryblok } from '@/types/component-types-sb'
import Footer from '@/PortfolioModule/components/Footer'

type Props = {
	blok: PortfolioContentLayoutStoryblok
}

const PortfolioContentLayout: React.FC<Props> = ({ blok }) => {
	return (
		<>
			<nav>
				<Navigation config={blok.Sections} />
			</nav>
			<main>
				<div className='w-full overflow-hidden' {...storyblokEditable(blok)}>
					{blok.Sections.map((component: any) => (
						<StoryblokComponent blok={component} key={component._uid} />
					))}
				</div>
			</main>
			<MatrixBg />
			<Footer />
		</>
	)
}

export default PortfolioContentLayout
