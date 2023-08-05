import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import Navigation from '@/components/RIchText/Navigation/Navigation'

const PortfolioContentLayout: React.FC<{ blok: any }> = ({ blok }) => {
  return (
    <>
      <nav>
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
