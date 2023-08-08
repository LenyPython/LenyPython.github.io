import { AppProps } from 'next/app'
import { storyblokInit, apiPlugin } from '@storyblok/react'

import '@/styles/global.scss'
import Section from '@/Global/blocks/Section/Section'
import Hero from '@/PortfolioModule/blocks/Hero/Hero'
import PortfolioContentLayout from '@/PortfolioModule/blocks/PortfolioContentLayout/PortfolioContentLayout'
import Technology from '@/PortfolioModule/blocks/Technology/Technology'
import TechGroup from '@/PortfolioModule/blocks/TechGroup/TechGroup'
import Tech from '@/PortfolioModule/blocks/Tech/Tech'

const components = {
  Section,
  Hero,
  PortfolioContentLayout,
  Technology,
  TechGroup,
  Tech
}

storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
