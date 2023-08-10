import SvgProvider, { SvgType } from '@/utils/SvgProvider'

type Props = {
  blok: {
    svg_type: SvgType
  }
}
const Tech: React.FC<Props> = ({ blok }) => {
  console.log(blok)
  return (
    <SvgProvider
      type={blok.svg_type}
      width={50}
      height={50}
      h={220}
      s={50}
      l={60}
      a={1}
    />
  )
}

export default Tech
