import { storyblokEditable } from '@storyblok/react'

type Props = {
  blok: any
}

const Teaser: React.FC<Props> = ({ blok }) => {
  return <h2 {...storyblokEditable(blok)}>{blok.headline}</h2>
}

export default Teaser
