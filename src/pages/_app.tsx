import { AppProps } from 'next/app'
import { storyblokInit, apiPlugin } from '@storyblok/react'

import '@/styles/global.scss'
import Section from '@/Global/blocks/Section/Section'
import Hero from '@/PortfolioModule/blocks/Hero/Hero'
import PortfolioContentLayout from '@/PortfolioModule/blocks/PortfolioContentLayout/PortfolioContentLayout'
import Technology from '@/PortfolioModule/blocks/Technology/Technology'
import TechGroup from '@/PortfolioModule/blocks/TechGroup/TechGroup'
import Projects from '@/PortfolioModule/blocks/Projects/Projects'
import Project from '@/PortfolioModule/blocks/Project/Project'
import Credentials from '@/PortfolioModule/blocks/Credentials/Credentials'
import Credential from '@/PortfolioModule/blocks/Credential/Credential'
import WorkHistory from '@/PortfolioModule/blocks/WorkHistory'
import WorkExperience from '@/PortfolioModule/blocks/WorkExperience'
import Socials from '@/PortfolioModule/blocks/Socials'
import Contact from '@/PortfolioModule/blocks/Contact'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import { TextPlugin } from 'gsap/dist/TextPlugin'

gsap.registerPlugin(TextPlugin, ScrollTrigger, ScrollToPlugin)

const components = {
	Section,
	Hero,
	PortfolioContentLayout,
	Technology,
	TechGroup,
	Projects,
	Project,
	Credentials,
	Credential,
	WorkHistory,
	WorkExperience,
	Socials,
	Contact
}

storyblokInit({
	accessToken: process.env.STORYBLOK_API_TOKEN,
	use: [apiPlugin],
	components
})

export default function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}
