import { StoryblokComponent, storyblokEditable } from '@storyblok/react'

const Page: React.FC<{ blok: any }> = ({ blok }) => {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.body.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  )
}

export default Page
