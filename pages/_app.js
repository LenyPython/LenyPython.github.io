import '../styles/globals.css'
import { storyblokInit, apiPlugin } from '@storyblok/react'
import Feature from '../components/Feature'
import Grid from '../components/Grid'
import Page from '../components/Page'
import Teaser from '../components/Teaser'
import Config from '../components/Config'
import HeaderMenu from '../components/HeaderMenu'
import HeaderLink from '../components/HeaderLink'
import Layout from '../components/Layout'

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  config: Config,
  layout: Layout,
  header_menu: HeaderMenu,
  header_link: HeaderLink
}

storyblokInit({
  accessToken: process.env.SB_TOKEN,
  use: [apiPlugin],
  components,
  apiOptions: {
    region: ''
  }
})

function MyApp({ Component, pageProps }) {
  console.log(pageProps)
  return (
    <Layout story={pageProps}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
