import { StoryblokComponent, storyblokEditable } from '@storyblok/react'

import DefaultLayout from '@/layouts/Default'

const Page: React.FC<{ blok: any; name: string }> = ({ blok, name }) => {
  return (
    <DefaultLayout>
      <header>
        <h1 className='text-center'>{name}</h1>
      </header>
      <main {...storyblokEditable(blok)}>
        {blok.body.map((nestedBlok: any) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </main>
    </DefaultLayout>
  )
}

export default Page
