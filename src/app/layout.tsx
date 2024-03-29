// @ts-expect-error
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'
import StoryblokProvider from '@/Global/components/StoryblokProvider'

// storyblok component
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

import '@/styles/global.scss'
import { PropsWithChildren } from 'react'

export const metadata = {
	title: "Piotr Lenartowicz, I'm a software engineer",
	description:
		'Portfolio website of Piotr Lenartowicz. Check me out and feel free to contact!',
	keywords: [
		'frontend',
		'engineer',
		'software',
		'web development',
		'software developer',
		'coding'
	],
	other: {
		'google-site-verification': 'k9QCsodOesXnINyBXFqD5LaS32KeX6NlLep08a3ROUQ'
	}
}

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

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<StoryblokProvider>
			<html lang='en'>
				<body>{children}</body>
			</html>
		</StoryblokProvider>
	)
}

export default RootLayout
