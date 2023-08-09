import { StoryblokComponent } from '@storyblok/react'

type Props = {
  blok: {
    headline: string
    tech_groups: any[]
  }
}

const Technology: React.FC<Props> = ({ blok }) => {
  return (
    <div className='relative p-10 rounded-xl bg-black backdrop-blur-lg w-80'>
      <h2 className='absolute top-0 left-8 -translate-y-1/2 text-3xl'>
        {blok.headline}
      </h2>
      {blok.tech_groups.map((component: any) => (
        <StoryblokComponent blok={component} key={component._uid} />
      ))}
    </div>
  )
}

export default Technology
