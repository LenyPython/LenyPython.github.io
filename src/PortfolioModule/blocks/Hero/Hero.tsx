import { useState } from 'react'
import { renderRichText } from '@storyblok/react'
import Image from 'next/image'
import Link from 'next/link'

import RichText from '@/Global/components/RIchText/RichText'

import styles from './hero.module.scss'
import { HeroStoryblok } from '@/types/component-types-sb'

type Props = {
  blok: HeroStoryblok
}
const Hero: React.FC<Props> = ({ blok }) => {
  const { headline, Image: img, rich_text, cta_link, call_to_action } = blok
  const [isActive, setIsActive] = useState<boolean>(false)
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('piotr.lenartowicz@yahoo.com')
    setIsActive(true)
    setTimeout(() => setIsActive(false), 5000)
  }
  return (
    <div className='w-3/4 max-w-4xl h-full bg-secondarybg/30 border border-solid flex p-10 backdrop-blur-lg rounded-lg'>
      <div className='flex flex-col justify-around '>
        <div>
          <h2 className='text-6xl font-bold mb-10'>{headline}</h2>
          <RichText html={renderRichText(rich_text)} />
        </div>
        <div className='flex items-center mt-20'>
          <Link href={`#${cta_link.anchor}`} className={styles.ctaLink}>
            <span></span>
            {call_to_action}
          </Link>
          <button onClick={copyEmailToClipboard} className='ml-10'>
            {isActive ? 'Copied!' : 'Get email'}
          </button>
        </div>
      </div>
      <Image
        src={img?.filename ?? ''}
        className={styles.heroImg}
        width={250}
        height={250}
        alt={img?.alt ?? 'image'}
      />
    </div>
  )
}

export default Hero
