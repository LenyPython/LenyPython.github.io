import { AppProps } from 'next/app'
import { storyblokInit, apiPlugin } from '@storyblok/react'

import '@/styles/global.scss'
import Section from '@/blocks/PortfolioModule/Section/Section'
import Hero from '@/blocks/PortfolioModule/Hero/Hero'
import PortfolioContentLayout from '@/blocks/PortfolioModule/PortfolioContentLayout/PortfolioContentLayout'

const components = {
  Section,
  Hero,
  PortfolioContentLayout
}

storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
