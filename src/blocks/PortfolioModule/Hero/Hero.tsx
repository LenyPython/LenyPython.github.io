import { ISbRichtext, renderRichText } from '@storyblok/react'
import Link from 'next/link'
import Image from 'next/image'

import { ImageType } from '@/types/global'

import RichText from '@/components/RIchText/RichText'

import styles from './hero.module.scss'

type Props = {
  blok: {
    call_to_action: string
    rich_text: ISbRichtext
    cta_link: string
    headline: string
    Image: ImageType
  }
}
const Hero: React.FC<Props> = ({ blok }) => {
  const { headline, Image: img, rich_text, cta_link, call_to_action } = blok
  return (
    <div className='flex bg-black/75'>
      <div className='flex flex-col justify-around'>
        <div>
          <h2 className='text-6xl font-bold mb-10'>{headline}</h2>
          <RichText html={renderRichText(rich_text)} />
        </div>
        <Link href={cta_link} className={styles.ctaLink}>
          <span></span>
          {call_to_action}
        </Link>
      </div>
      <Image
        src={img.filename}
        className={styles.heroImg}
        width={500}
        height={500}
        alt={img.alt}
      />
    </div>
  )
}

export default Hero
