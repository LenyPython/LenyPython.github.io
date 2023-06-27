import { storyblokEditable } from '@storyblok/react'

type Props = {
  blok: any
}

const Feature: React.FC<Props> = ({ blok }) => (
  <div className='column feature' {...storyblokEditable(blok)}>
    {blok.name}
  </div>
)

export default Feature
