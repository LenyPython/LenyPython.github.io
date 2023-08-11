import { ProjectsStoryblok } from '@/types/component-types-sb'
import { StoryblokComponent } from '@storyblok/react'

type Props = {
  blok: ProjectsStoryblok
}

const Projects: React.FC<Props> = ({ blok }) => {
  console.log(blok)
  return (
    <div className='relative w-3/4 max-w-4xl p-10 rounded-xl bg-black backdrop-blur-lg '>
      <h2 className='absolute top-0 left-8 -translate-y-1/2 text-3xl'>
        {blok.headline}
      </h2>
      {blok.projects.map((project: any) => (
        <StoryblokComponent blok={project} key={project._uid} />
      ))}
    </div>
  )
}

export default Projects
