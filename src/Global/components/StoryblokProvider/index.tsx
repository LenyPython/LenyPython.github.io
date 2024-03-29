'use client'
// @ts-ignore
import { storyblokInit, apiPlugin } from '@storyblok/react'
import { PropsWithChildren } from 'react'

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
const StoryblokProvider: React.FC<PropsWithChildren> = ({ children }) => {
	return children
}
export default StoryblokProvider
