import RichText from '@/components/RIchText/RichText'
import { Image } from '@/types/global'
import { ISbRichtext, renderRichText } from '@storyblok/react'
import Link from 'next/link'

type Props = {
  blok: {
    call_to_action: string
    rich_text: ISbRichtext
    cta_link: string
    headline: string
    Image: Image
  }
}
const Hero: React.FC<Props> = ({ blok }) => {
  const { headline, Image, rich_text, cta_link, call_to_action } = blok
  return (
    <div className='flex '>
      <div className='flex flex-col'>
        <h2>{headline}</h2>
        <RichText html={renderRichText(rich_text)} />
        <Link href={cta_link}>{call_to_action}</Link>
      </div>
      <img src={Image.filename} alt={Image.alt} />
    </div>
  )
}

export default Hero
