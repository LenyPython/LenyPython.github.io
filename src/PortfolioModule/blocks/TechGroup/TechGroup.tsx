import TechSvg from '@/PortfolioModule/components/TechSvg/TechSvg'
import { TechGroupStoryblok } from '@/types/component-types-sb'

type Props = {
  blok: TechGroupStoryblok
}

const TechGroup: React.FC<Props> = ({ blok }) => {
  const { advanced_tech, basic_tech } = blok
  return (
    <div className='w-full p-2 border-y border-y-font mb-3'>
      <h2>{blok.headline}</h2>
      <div className='w-full flex'>
        {advanced_tech?.length &&
          advanced_tech.map((svg: any) => (
            <TechSvg svgType={svg.svg_type} key={svg._uid} />
          ))}
      </div>
      <hr className='m-3' />
      <div className='w-full flex'>
        {basic_tech?.length &&
          basic_tech.map((svg: any) => (
            <TechSvg svgType={svg.svg_type} key={svg._uid} basic />
          ))}
      </div>
    </div>
  )
}

export default TechGroup
