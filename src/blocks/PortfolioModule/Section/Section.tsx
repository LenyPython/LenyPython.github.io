import { StoryblokComponent, storyblokEditable } from '@storyblok/react'

const Section: React.FC<{ blok: any }> = ({ blok }) => {
  return (
    <section id={blok.ID} {...storyblokEditable(blok)}>
      {blok.Blocks.map((blok: any) => (
        <StoryblokComponent blok={blok} key={blok._id} />
      ))}
    </section>
  )
}

export default Section
