import { StoryblokComponent } from '@storyblok/react'

type Props = {
  blok: {
    headline: string
    techs: any
  }
}

const TechGroup: React.FC<Props> = ({ blok }) => {
  return (
    <div>
      <div>
        <h2>{blok.headline}</h2>
        {blok.techs.map((component: any) => (
          <StoryblokComponent blok={component} key={component._uid} />
        ))}
      </div>
    </div>
  )
}

export default TechGroup
