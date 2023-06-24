import './globals.css'
//@ts-ignore next-line
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'
import StoryblokProvider from '@/storyblok/StoryblokProvider/StoryblokProvider'
import Navigation from '@/components/Navigation/Navigation'
import Footer from '@/components/Footer/Footer'

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
        <body>
          <Navigation />
          {children}
          <Footer />
        </body>
      </html>
    </StoryblokProvider>
  )
}
