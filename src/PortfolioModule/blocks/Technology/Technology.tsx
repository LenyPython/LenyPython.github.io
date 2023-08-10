import { StoryblokComponent } from '@storyblok/react'

type Props = {
  blok: {
    headline: string
    tech_groups: any[]
  }
}

const Technology: React.FC<Props> = ({ blok }) => {
  return (
    <div className='relative w-3/4 max-w-4xl p-10 rounded-xl bg-black backdrop-blur-lg '>
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
