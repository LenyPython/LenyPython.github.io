import './globals.css'
//@ts-ignore next-line
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'
import StoryblokProvider from '@/storyblok/StoryblokProvider/StoryblokProvider'

storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin]
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <StoryblokProvider>
      <html lang='en'>
        <body>{children}</body>
      </html>
    </StoryblokProvider>
  )
}
