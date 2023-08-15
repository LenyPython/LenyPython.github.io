import SvgProvider, {
  SvgType
} from '@/Global/components/SvgProvieder/SvgProvider'

type Props = {
  svgType: SvgType
  basic?: boolean
}
const TechSvg: React.FC<Props> = ({ svgType, basic }) => {
  return (
    <SvgProvider
      type={svgType}
      width={50}
      height={50}
      h={220}
      s={50}
      l={60}
      a={basic ? 0.5 : 1}
    />
  )
}

export default TechSvg
