import TechSvg from '@/PortfolioModule/components/TechSvg/TechSvg'
import { TechGroupStoryblok } from '@/types/component-types-sb'
import { SvgType } from '@/utils/SvgProvider'

type Props = {
  blok: TechGroupStoryblok
}

const TechGroup: React.FC<Props> = ({ blok }) => {
  const { advanced_tech, basic_tech } = blok
  const advTech = advanced_tech[0].techs
  const basicTech = basic_tech[0].techs
  return (
    <div className='w-full p-2 border-y border-y-font mb-3'>
      <h2>{blok.headline}</h2>
      <div className='w-full flex'>
        {advTech.length > 0 &&
          advTech.map((svg: SvgType) => (
            <TechSvg svgType={svg} key={`${advanced_tech[0]._uid}-${svg}`} />
          ))}
      </div>
      <hr className='m-3' />
      <div className='w-full flex'>
        {basicTech.length > 0 &&
          basicTech.map((svg: SvgType) => (
            <TechSvg svgType={svg} key={`${basic_tech[0]._uid}-${svg}`} basic />
          ))}
      </div>
    </div>
  )
}

export default TechGroup
