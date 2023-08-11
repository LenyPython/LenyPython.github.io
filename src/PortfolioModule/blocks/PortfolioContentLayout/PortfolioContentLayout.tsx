import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import Navigation from '@/PortfolioModule/components/Navigation/Navigation'
import MatrixBg from '@/PortfolioModule/components/MatrixBg/MatrixBg'
import { PortfolioContentLayoutStoryblok } from '@/types/component-types-sb'

type Props = {
  blok: PortfolioContentLayoutStoryblok
}

const PortfolioContentLayout: React.FC<Props> = ({ blok }) => {
  return (
    <>
      <MatrixBg />
      <nav className='fixed bottom-0 left-0 right-0'>
        <Navigation config={blok.Sections} />
      </nav>
      <main>
        <div {...storyblokEditable(blok)}>
          {blok.Sections.map((component: any) => (
            <StoryblokComponent blok={component} key={component._uid} />
          ))}
        </div>
      </main>
    </>
  )
}

export default PortfolioContentLayout
