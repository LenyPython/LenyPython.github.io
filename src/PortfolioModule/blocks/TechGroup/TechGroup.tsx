import { StoryblokComponent } from '@storyblok/react'

type Props = {
  blok: {
    headline: string
    techs: any
  }
}

const TechGroup: React.FC<Props> = ({ blok }) => {
  return (
    <div className='w-full p-2 border-y border-y-font mb-3'>
      <h2>{blok.headline}</h2>
      {blok.techs.map((component: any) => (
        <StoryblokComponent blok={component} key={component._uid} />
      ))}
    </div>
  )
}

export default TechGroup
