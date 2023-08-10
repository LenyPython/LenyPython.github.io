import TechSvg from '@/PortfolioModule/components/TechSvg/TechSvg'
import SvgProvider from '@/utils/SvgProvider'
import { StoryblokComponent } from '@storyblok/react'

type Props = {
  blok: {
    headline: string
    advanced_tech: any
    basic_tech: any
  }
}

const TechGroup: React.FC<Props> = ({ blok }) => {
  return (
    <div className='w-full p-2 border-y border-y-font mb-3'>
      <h2>{blok.headline}</h2>
      <div className='w-full flex'>
        {blok.advanced_tech.map((svg: any) => (
          <TechSvg svgType={svg.svg_type} key={svg._uid} />
        ))}
      </div>
      <hr className='m-3' />
      <div className='w-full flex'>
        {blok.basic_tech.map((svg: any) => (
          <TechSvg svgType={svg.svg_type} key={svg._uid} basic />
        ))}
      </div>
    </div>
  )
}

export default TechGroup
