import { StoryblokComponent } from '@storyblok/react'

type Props = {
  blok: {
    headline: string
    tech_groups: any[]
  }
}

const Technology: React.FC<Props> = ({ blok }) => {
  return (
    <div>
      <h2>{blok.headline}</h2>
      {blok.tech_groups.map((component: any) => (
        <StoryblokComponent blok={component} key={component._uid} />
      ))}
    </div>
  )
}

export default Technology
