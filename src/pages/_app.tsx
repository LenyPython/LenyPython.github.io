import { AppProps } from 'next/app'
import { storyblokInit, apiPlugin } from '@storyblok/react'

import '@/styles/global.css'

import Feature from '@/bloks/Feature/Feature'
import Grid from '@/bloks/Grid/Grid'
import Page from '@/bloks/Page/Page'
import Teaser from '@/bloks/Teaser/Teaser'

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page
}

storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
