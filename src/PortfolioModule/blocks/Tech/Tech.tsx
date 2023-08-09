import { log } from 'console'
import Image from 'next/image'

type Props = {
  blok: {
    svg: {
      id: number
      _uid: string
      alt: string
      title: string
      filename: string
    }
  }
}
const Tech: React.FC<Props> = ({ blok }) => {
  const { svg } = blok
  console.log(svg)
  return (
    <Image
      src={svg.filename}
      width={30}
      height={30}
      title={svg.title}
      alt={svg.alt}
    />
  )
}

export default Tech
