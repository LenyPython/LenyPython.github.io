import { StoryblokComponent, storyblokEditable } from '@storyblok/react'

const Section: React.FC<{ blok: any }> = ({ blok }) => {
  return (
    <section
      id={blok.ID}
      className='flex justify-center items-center min-h-[80vh]'
      {...storyblokEditable(blok)}
    >
      {blok.Blocks.map((component: any) => (
        <StoryblokComponent blok={component} key={component._uid} />
      ))}
    </section>
  )
}

export default Section
