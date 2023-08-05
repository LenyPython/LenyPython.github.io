import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import Navigation from '@/components/Navigation/Navigation'
import MatrixBg from '@/components/MatrixBg/MatrixBg'

const PortfolioContentLayout: React.FC<{ blok: any }> = ({ blok }) => {
  return (
    <>
      <MatrixBg />
      <nav className='fixed top-0 left-0 right-0'>
        <Navigation config={blok.Sections} />
      </nav>
      <main>
        <div {...storyblokEditable(blok)}>
          {blok.Sections.map((component: any) => (
            <StoryblokComponent blok={component} key={blok._id} />
          ))}
        </div>
      </main>
    </>
  )
}

export default PortfolioContentLayout
