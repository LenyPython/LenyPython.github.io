import { AppProps } from 'next/app'
import { storyblokInit, apiPlugin } from '@storyblok/react'

import '@/styles/global.css'

const components = {}

storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
