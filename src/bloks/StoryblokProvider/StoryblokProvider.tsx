/** 1. Tag it as a client component */
'use client'
//@ts-ignore next-line
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'

/** 2. Import your components */
import Page from '@/storyblok/Page/Page'
import Teaser from '@/storyblok/Teaser/Teaser'

/** 3. Initialize it as usual */
storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    page: Page
  }
})

export default function StoryblokProvider({
  children
}: {
  children: React.ReactNode
}) {
  return children
}
